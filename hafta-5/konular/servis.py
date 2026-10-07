from fastapi import FastAPI
import pandas as pd

app = FastAPI()

@app.get("/")
def ana_sayfa():
    return {"mesaj": "Hesap servisi calisiyor"}

@app.get("/getiri")
def getiri(dun: float, bugun: float):
    sonuc = (bugun - dun) / dun * 100
    return {"getiri": sonuc}

@app.post("/risk")
def risk(fiyatlar: list[float]):
    getiriler = pd.Series(fiyatlar).pct_change() * 100
    return {"volatilite": getiriler.std()}