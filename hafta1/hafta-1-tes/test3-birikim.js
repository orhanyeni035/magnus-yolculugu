// Başlangıç değerleri
let aylikBirikim = 500;     // her ay eklenen para
let getiriOrani = 0.02;     // aylık %2
let hedef = 50000;

let birikim = 0;
let ay = 0;

// Birikim hedefi geçene kadar dön
while (birikim <= hedef) {
    ay++;                                   // yeni ay başladı
    birikim = birikim + aylikBirikim;       // önce para ekleniyor
    birikim = birikim * (1 + getiriOrani);  // sonra getiri işliyor
}

console.log("Hedef " + ay + ". ayda geçildi.");
console.log("Birikim: " + birikim.toFixed(2) + " TL");

// Yıl ve ay'a çevirme
let yil = Math.floor(ay / 12);  // tam yıl sayısı
let kalanAy = ay % 12;          // yıldan artan ay

console.log("Süre: " + yil + " yıl " + kalanAy + " ay");

// Karşılaştırma: sadece yatırılan para ne kadar?
let yatirilan = ay * aylikBirikim;
console.log("Cebinden çıkan: " + yatirilan + " TL");
console.log("Getiriden gelen: " + (birikim - yatirilan).toFixed(2) + " TL");