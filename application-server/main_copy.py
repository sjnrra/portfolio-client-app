from fastapi import FastAPI, BackgroundTasks, HTTPException
from pydantic import BaseModel, EmailStr
import smtplib
from email.mime.text import MIMEText
from email.utils import formatdate
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

app = FastAPI()

load_dotenv()
EMAIL_USER = os.getenv("EMAIL_USER")
EMAIL_PASS = os.getenv("EMAIL_PASS")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

##############################################################
# バリデーションチェック
##############################################################
class Contact(BaseModel):
    name: str
    email: EmailStr
#    email: str
    message: str

##############################################################
# メール送信
##############################################################
def send_mail(contact: Contact):

    #環境変数チェック
    if not EMAIL_USER or not EMAIL_PASS:
        raise RuntimeError("メール設定が読み込めませんでした。環境変数を確認してください。")

    #メール設定
    FROM = EMAIL_USER  # 送信元
    TO = EMAIL_USER    # 管理者の通知先メール
    SUBJECT = "【お問い合わせ通知】新しい問い合わせが届きました"

    body = f"""
以下の内容でお問い合わせが届きました。

■ お名前
{contact.name}

■ メールアドレス
{contact.email}

■ お問い合わせ内容
{contact.message}
"""

    msg = MIMEText(body, "plain", "utf-8")
    msg["Subject"] = SUBJECT
    msg["From"] = FROM
    msg["To"] = TO
    msg["Date"] = formatdate()

    #メール送信
    try: 
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
            smtp.login(EMAIL_USER, EMAIL_PASS)
            smtp.send_message(msg)
    except Exception as e: 
        print("SMTP エラー:", e) 
        raise

##############################################################
# リクエスト
##############################################################
@app.post("/contact")
def receive_contact(contact: Contact, background_tasks: BackgroundTasks):
    try:
        background_tasks.add_task(send_mail, contact)
    except Exception as e:
        print("メール送信エラー:", e)
        raise HTTPException(status_code=500, detail="メール送信に失敗しました")
    
    return {"status": "ok"}

