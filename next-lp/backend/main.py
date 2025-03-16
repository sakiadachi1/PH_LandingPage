from fastapi import FastAPI, File, UploadFile
import shutil
import os

app = FastAPI()

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@app.post("/upload")
async def upload_image(file: UploadFile = File(...)):
    file_path = os.path.join(UPLOAD_DIR, file.filename)
    
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {"message": "ファイルがアップロードされました", "file_path": file_path}

# 追加: ルートエンドポイント
@app.get("/")
async def root():
    return {"message": "FastAPI is running!"}