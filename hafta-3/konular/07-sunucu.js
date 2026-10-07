const http = require("http");
const fs = require("fs");                 // YENİ

const sunucu = http.createServer((istek, cevap) => {
  if (istek.url === "/fiyat") {
    const veri = { hisse: "AAPL", fiyat: 333.69 };
    cevap.setHeader("Content-Type", "application/json");
    cevap.end(JSON.stringify(veri));
    } else if (istek.url === "/fiyatlar") {
    try {
      const icerik = fs.readFileSync("fiyatlar.json", "utf-8");
      cevap.end(icerik);
    } catch (hata) {
      cevap.statusCode = 500;
      cevap.end("Fiyatlar okunamadi");
    }
  }  else {
    cevap.end("Ana sayfa");
    
  }
});

sunucu.listen(3000);
console.log("Sunucu calisiyor: http://localhost:3000");