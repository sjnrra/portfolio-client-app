from fastapi import FastAPI,APIRouter, BackgroundTasks, HTTPException
from models.contactModel import Contact
from services.contactService import send_mail

router = APIRouter()

@router.post("/contact")
def receive_contact(contact: Contact, background_tasks: BackgroundTasks):
    try:
        background_tasks.add_task(send_mail, contact)
    except Exception:
        raise HTTPException(status_code=500, detail="メール送信に失敗しました")
    return {"status": "ok"}
