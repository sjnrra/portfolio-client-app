###########################################################
# interface.py
###########################################################
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import subprocess

app = FastAPI()

# CORS設定（Reactからのアクセスを許可）
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # ReactのURL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# GET
@app.get("/api/hello")
def read_hello():
#    subprocess.run(["python","main.py"])
    return {"message": "Hello from Python API!"}


#POST
@app.post("/api/echo")
def echo_data(data: dict):
    subprocess.run(["python","main.py"])
    return {"received": data}

