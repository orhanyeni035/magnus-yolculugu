import os
import psycopg
from dotenv import load_dotenv

load_dotenv()
adres = os.environ["DATABASE_URL"]

with psycopg.connect(adres) as baglanti:
    satirlar = baglanti.execute("SELECT zaman, fiyat FROM mumlar").fetchall()
    for satir in satirlar:
        print(satir[0], satir[1])