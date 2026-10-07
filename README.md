# MAGNUS-JOURNEY

Sıfırdan backend ve yapay zekâ mühendisliğine giden öğrenme yolculuğumun kayıtları. Program adı: **GHOST**.

Hedef: canlı piyasa verisi işleyen bir veri hattı ve bu veriyi kullanan bir analiz agent'ı kurmak. Asıl amaç kodun **mantığını** anlamak: ne yaptığını okuyabilmek ve yapay zekânın yazdığı koddaki hataları yakalayabilmek.

Öğrenme sırası:
**JavaScript → Node.js → TypeScript + Hono → Python → PostgreSQL/TimescaleDB → LLM agent'ları**

## Yapı

```
hafta-1/                 JavaScript'e giriş
  konular/               Konu konu alıştırmalar (01–07)
  testler/               Hafta testleri
  denemeler/             Ders sırasında yazdığım denemeler (GitHub'a yüklenmez)
  tekrar.js              Haftanın tamamı tek dosyada
  NOTLAR.md              Haftanın ders notları
  OZET.md                Kendi cümlelerimle özet

hafta-2/                 JavaScript'in çekirdeği
  konular/               01-fonksiyonlar … 08-fetch
  moduller/              import / export alıştırması
  testler/               Haftanın projesi: günlük getiri
    gunluk-getiri.js       Coingecko'dan Bitcoin verisiyle
    gunluk-getiri-api.js   Financial Modeling Prep'ten Apple verisiyle (anahtar .env'de)
  getiri-sayfasi/        Günlük getiriyi tarayıcıda tablo olarak gösteren sayfa
  denemeler/             Ders sırasında yazdığım denemeler (GitHub'a yüklenmez)
  NOTLAR.md              Haftanın ders notları

hafta-3/                 Node.js
  konular/               01-node-nedir … 07-sunucu (event loop, npm, fs, .env, EventEmitter, http)
  proje/                 Canlı fiyat sunucusu: haftanın bütün konuları tek programda
  testler/               Hafta testi: try/catch'li http sunucusu

hafta-4/                 TypeScript, API ve testler
  konular/               01-turler, 02-hono (son-fiyat, mumlar), hesap + Vitest testleri
  testler/               Hafta testi: testleri olan iki uç noktalı Hono API'si

hafta-5/                 Python
  konular/               01-ilk, 02-pandas (getiri, volatilite, korelasyon), servis (FastAPI), 03-veritabani
  requirements.txt       Python paket listesi (.venv GitHub'a yüklenmez)

hafta-6/                 Docker, PostgreSQL, TimescaleDB (devam ediyor)
  konular/               01-drizzle: Node'dan veritabanına bağlanmak
```

## Çalıştırma

```bash
# JavaScript / Node
node hafta-1/konular/01-merhaba.js
cd hafta-3/proje && node fiyat-sunucusu.js

# TypeScript (Node 24 .ts dosyasını doğrudan çalıştırır)
cd hafta-4 && npm install
node konular/sunucu.ts        # Hono sunucusu: http://localhost:3000
npx vitest run                # testler

# Python
cd hafta-5 && python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cd konular && uvicorn servis:app --reload   # FastAPI: http://localhost:8000
```

Getiri sayfası tarayıcıda açılır ama dosyaya çift tıklayınca çalışmaz, küçük bir sunucu gerekir:

```bash
cd hafta-2/getiri-sayfasi
npx serve
# sonra tarayıcıda: http://localhost:3000
```

Gerekenler: Node.js (v24), Python 3, Docker Desktop (Hafta 6 için).

## İlerleme

- [x] **1. Hafta** — Terminal, Git, değişkenler, veri tipleri, operatörler, koşullar, döngüler
- [x] **2. Hafta** — Fonksiyonlar, dizi metotları, nesneler, destructuring/spread, modüller, hata yönetimi, async/await, fetch
- [x] **3. Hafta** — Node.js: event loop, npm, `fs`, `.env`, EventEmitter, `http` sunucusu
- [x] **4. Hafta** — TypeScript, Hono ile API, piyasa verisi, finans kavramları, Vitest
- [x] **5. Hafta** — Python: aynı mantık farklı dil, pandas, FastAPI
- [ ] **6. Hafta** — Docker, PostgreSQL, TimescaleDB, Drizzle, Redis (devam ediyor)
- [ ] **7-8. Hafta** — LLM agent'ları, tool calling, MCP, evals

## Not

Alıştırma dosyalarındaki fiyatlar örnek amaçlıdır. `testler/` içindeki programlar gerçek piyasa verisi çeker. Hiçbiri yatırım tavsiyesi içermez.
