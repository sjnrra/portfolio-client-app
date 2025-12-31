import smtplib
from email.mime.text import MIMEText
from email.utils import formatdate
from models.contactModel import Contact
import os
from dotenv import load_dotenv

load_dotenv()
EMAIL_USER = os.getenv("EMAIL_USER")
EMAIL_PASS = os.getenv("EMAIL_PASS")

def send_mail(contact: Contact):
    if not EMAIL_USER or not EMAIL_PASS:
        raise RuntimeError("メール設定が読み込めませんでした。")

    FROM = EMAIL_USER
    TO = EMAIL_USER
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

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
        smtp.login(EMAIL_USER, EMAIL_PASS)
        smtp.send_message(msg)
