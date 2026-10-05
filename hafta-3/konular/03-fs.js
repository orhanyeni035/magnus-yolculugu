const fs = require("fs");

fs.writeFileSync("not.txt", "Bugün fs öğrendim");
console.log("Dosya yazıldı");

const icerik = fs.readFileSync("not.txt", "utf-8");
console.log("Dosyada yazan:", icerik);

const fiyatlar = [338.4, 329.4, 333.02, 330.32, 333.69];

fs.writeFileSync("fiyatlar.json", JSON.stringify(fiyatlar));
console.log("Kaydedildi");

const metin = fs.readFileSync("fiyatlar.json", "utf-8");
const okunanFiyatlar = JSON.parse(metin);
const toplam = okunanFiyatlar.reduce((biriken, fiyatlar) => biriken + fiyatlar, 0);

console.log("Ortalama:", toplam / okunanFiyatlar.length);
console.log("Gün sayısı:", okunanFiyatlar.length);
console.log("İlk fiyat:", okunanFiyatlar[0]);