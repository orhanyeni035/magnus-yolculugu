# magnus-yolculugu

Sıfırdan backend ve AI mühendisliğine giden öğrenme yolculuğumun kayıtları.
Hedef: canlı piyasa verisi işleyen bir veri hattı ve bu veriyi kullanan bir
analiz agent'ı kurmak.

Öğrenme sırası, hedeflenen teknoloji yığınına göre belirlendi:
**JavaScript → Node.js → TypeScript + Hono → PostgreSQL/TimescaleDB →
Redis + BullMQ + MQTT → LLM agent'ları**

## Yapı

```
hafta-1/          JavaScript temelleri
  konular/        Konu konu alıştırmalar
  testler/        Hafta sonu testleri (yardımsız yazıldı)
  tekrar.js       Haftanın tamamı tek dosyada
  notlar.txt      Ders notları
  ozet.txt        Kendi cümlelerimle özet

hafta-2/          JavaScript'in çekirdeği
  01-fonksiyonlar.js
  02-diziler.js
  03-dizi-metotlari.js
  04-nesneler.js
  05-destructuring.js
  06-hata-yonetimi.js
  07-async.js
  moduller/       import / export alıştırması (ayrı package.json ile ESM)
```

## Çalıştırma

```bash
node hafta-1/konular/01-merhaba.js
node hafta-2/01-fonksiyonlar.js
node hafta-2/moduller/index.js
```

Gereken tek şey Node.js (v20+).

## İlerleme

- [x] **1. Hafta** — Terminal, Git, değişkenler, veri tipleri, operatörler,
      koşullar, döngüler
- [x] **2. Hafta** — Fonksiyonlar, diziler ve metotları, nesneler,
      destructuring/spread, modüller, hata yönetimi
- [ ] **2. Hafta (devam)** — async/await, `fetch` ile API'den veri çekme
- [ ] **3. Hafta** — Node.js: event loop, `fs`, streams, `http`
- [ ] **4. Hafta** — TypeScript ve Hono ile API
- [ ] **5. Hafta** — Docker, PostgreSQL, TimescaleDB, Drizzle
- [ ] **6. Hafta** — Redis, BullMQ, MQTT ile canlı veri hattı
- [ ] **7-8. Hafta** — LLM agent'ları, tool calling, MCP, evals

## Not

Örneklerdeki fiyat ve hacim verileri gerçek piyasa verisi değildir;
yalnızca alıştırma amaçlıdır. Hiçbiri yatırım tavsiyesi içermez.
