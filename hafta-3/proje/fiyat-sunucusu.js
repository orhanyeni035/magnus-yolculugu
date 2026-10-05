// 3. HAFTA PROJESİ: Canlı fiyat sunucusu
// Haftanın bütün konuları tek programda.
// Çalıştırmak için: hafta-3/proje klasöründe  ->  node fiyat-sunucusu.js

// ---------------------------------------------------------------
// 1) MODÜLLER (Adım 23–25)
// ---------------------------------------------------------------
const http = require("http");           // Node'un hazır modülü: sunucu
const fs = require("fs");               // Node'un hazır modülü: dosya
const path = require("path");           // Node'un hazır modülü: dosya yolu
const EventEmitter = require("events"); // Node'un hazır modülü: olaylar
const dayjs = require("dayjs");         // npm'den indirdiğimiz paket: tarih/saat

// ---------------------------------------------------------------
// 2) AYARLAR .env DOSYASINDAN (Adım 24)
// ---------------------------------------------------------------
// path.join: bu dosyanın klasöründen bir üst klasördeki .env'i bulur
try {
  process.loadEnvFile(path.join(__dirname, "..", ".env"));
} catch (hata) {
  console.log(".env bulunamadi, varsayilan ayarlar kullaniliyor");
}

const PORT = process.env.PORT || 3000;              // .env'de yoksa 3000
const UYARI_SINIRI = Number(process.env.UYARI_SINIRI) || 340;
const DOSYA = path.join(__dirname, "fiyatlar.json");

// ---------------------------------------------------------------
// 3) DOSYADAN BAŞLANGIÇ VERİSİ (Adım 24: fs + JSON)
// ---------------------------------------------------------------
let fiyatlar = [];
try {
  fiyatlar = JSON.parse(fs.readFileSync(DOSYA, "utf-8"));
} catch (hata) {
  fiyatlar = [338.4, 329.4, 333.02, 330.32, 333.69];   // dosya yoksa örnek veri
  fs.writeFileSync(DOSYA, JSON.stringify(fiyatlar));
}

// ---------------------------------------------------------------
// 4) OLAYLAR (Adım 25: EventEmitter)
// ---------------------------------------------------------------
const borsa = new EventEmitter();

// Dinleyici 1: yeni fiyatı ekrana yazar (dayjs ile saat)
borsa.on("yeniFiyat", (fiyat) => {
  console.log(`[${dayjs().format("HH:mm:ss")}] Yeni fiyat: ${fiyat}`);
});

// Dinleyici 2: yeni fiyatı listeye ekler ve dosyaya kaydeder
borsa.on("yeniFiyat", (fiyat) => {
  fiyatlar.push(fiyat);
  fs.writeFileSync(DOSYA, JSON.stringify(fiyatlar));
});

// Dinleyici 3: fiyat sınırı geçerse uyarır
borsa.on("yeniFiyat", (fiyat) => {
  if (fiyat > UYARI_SINIRI) {
    console.log(`  UYARI: Fiyat ${UYARI_SINIRI} sinirini gecti`);
  }
});

// ---------------------------------------------------------------
// 5) CANLI VERİ TAKLİDİ (Adım 21–22: bloklamayan kod)
// ---------------------------------------------------------------
// setInterval: her 5 saniyede bir çalışır, arada sunucu bloklanmaz
setInterval(() => {
  const son = fiyatlar[fiyatlar.length - 1];
  const degisim = (Math.random() - 0.5) * 4;            // -2 ile +2 arası
  const yeni = Number((son + degisim).toFixed(2));
  borsa.emit("yeniFiyat", yeni);                        // zile bas
}, 5000);

// ---------------------------------------------------------------
// 6) SUNUCU (Adım 26: http) + HATA YÖNETİMİ (Adım 27)
// ---------------------------------------------------------------
const sunucu = http.createServer((istek, cevap) => {
  try {
    if (istek.url === "/") {
      cevap.end("Fiyat sunucusu calisiyor. Adresler: /fiyat  /fiyatlar");
    } else if (istek.url === "/fiyat") {
      const son = fiyatlar[fiyatlar.length - 1];
      cevap.setHeader("Content-Type", "application/json");
      cevap.end(JSON.stringify({ hisse: "AAPL", fiyat: son, saat: dayjs().format("HH:mm:ss") }));
    } else if (istek.url === "/fiyatlar") {
      const icerik = fs.readFileSync(DOSYA, "utf-8");
      cevap.setHeader("Content-Type", "application/json");
      cevap.end(icerik);
    } else {
      cevap.statusCode = 404;                           // böyle bir sayfa yok
      cevap.end("Sayfa bulunamadi");
    }
  } catch (hata) {
    cevap.statusCode = 500;                             // sunucuda sorun var
    cevap.end("Sunucuda bir hata olustu");
  }
});

sunucu.listen(PORT, () => {
  console.log(`Sunucu calisiyor: http://localhost:${PORT}`);
});
