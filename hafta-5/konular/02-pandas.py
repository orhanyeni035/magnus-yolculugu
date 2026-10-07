import pandas as pd

tablo = pd.read_csv("fiyatlar.csv")
print(tablo)
print(tablo["kapanis"].mean())

tablo["getiri"] = tablo["kapanis"].pct_change() * 100
print(tablo)