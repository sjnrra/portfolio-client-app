###########################################################
# interfaceGetCSV_001
###########################################################
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os

app = FastAPI()

# CORS設定（Reactからのアクセスを許可）
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # ReactのURL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

# POST
@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    # ファイル拡張子チェック
    if not file.filename.endswith(".csv"):
        return {"error": "CSVファイルのみアップロード可能です"}

    file_path = os.path.join(UPLOAD_DIR, file.filename)

    # ファイル保存
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {"message": f"{file.filename} を受信しました"}
