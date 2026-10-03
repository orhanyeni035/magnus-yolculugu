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
    gunluk-getiri-api.js   Financial Modeling Prep'ten Apple verisiyle (anahtarlı, yüklenmez)
  getiri-sayfasi/        Günlük getiriyi tarayıcıda tablo olarak gösteren sayfa
  denemeler/             Ders sırasında yazdığım denemeler (GitHub'a yüklenmez)
  NOTLAR.md              Haftanın ders notları

hafta-3/                 Node.js (başlıyor)
```

## Çalıştırma

```bash
node hafta-1/konular/01-merhaba.js
node hafta-2/konular/01-fonksiyonlar.js
cd hafta-2/moduller && node index.js
cd hafta-2/testler && node gunluk-getiri.js
```

Getiri sayfası tarayıcıda açılır ama dosyaya çift tıklayınca çalışmaz, küçük bir sunucu gerekir:

```bash
cd hafta-2/getiri-sayfasi
npx serve
# sonra tarayıcıda: http://localhost:3000
```

Gereken tek şey Node.js (v20+).

## İlerleme

- [x] **1. Hafta** — Terminal, Git, değişkenler, veri tipleri, operatörler, koşullar, döngüler
- [x] **2. Hafta** — Fonksiyonlar, dizi metotları, nesneler, destructuring/spread, modüller, hata yönetimi, async/await, fetch
- [ ] **3. Hafta** — Node.js: event loop, npm, `fs`, `.env`, `http` sunucusu
- [ ] **4. Hafta** — TypeScript, Hono ile API, finans kavramları, testler
- [ ] **5. Hafta** — Python: aynı mantık farklı dil, pandas, FastAPI
- [ ] **6. Hafta** — Docker, PostgreSQL, TimescaleDB, Redis
- [ ] **7-8. Hafta** — LLM agent'ları, tool calling, MCP, evals

## Not

Alıştırma dosyalarındaki fiyatlar örnek amaçlıdır. `testler/` içindeki programlar gerçek piyasa verisi çeker. Hiçbiri yatırım tavsiyesi içermez.
