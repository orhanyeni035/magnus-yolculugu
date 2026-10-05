const http = require  ("http")
const fs =  require ("fs")


const server = http.createServer ((istek, cevap) => { 
    if (istek.url === "/") {
     cevap.end("anasayfa");
    } else if (istek.url === "/fiyatlar" ){
     try {
        const icerik = fs.readFileSync("fiyatlar.json", "utf-8");
     cevap.end(icerik)
    }
  catch(hata) { 
     cevap.end("Fiyatlar okunamadi");
    }
  }else {
    cevap.end("sayfa bulunumadı")
}
});
server.listen(3000);