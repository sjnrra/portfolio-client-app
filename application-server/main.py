from fastapi import FastAPI
from pydantic import BaseModel
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

class Contact(BaseModel):
    name: str
    email: str
    message: str

##############################################################
# SEND MAIL
##############################################################
def send_mail(contact: Contact):
    FROM = EMAIL_USER  # 送信元
    TO = EMAIL_USER  # 管理者の通知先メール
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

    # Gmail の場合
    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
        smtp.login(EMAIL_USER, EMAIL_PASS)
        smtp.send_message(msg)

##############################################################
# REQUEST
##############################################################
@app.post("/contact")
def receive_contact(contact: Contact):

    # print("受信:", contact.dict())
    #    return {"status": "ok", "received": contact.dict()}

    #    return {"status": "ok"}

    print("受信データ:", contact.dict())  # デバッグ用
    send_mail(contact)
    return {"status": "ok"}
