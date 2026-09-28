// 5 günlük kapanış fiyatları (her biri ayrı değişkende)
let gun1 = 152.40;
let gun2 = 148.75;
let gun3 = 155.10;
let gun4 = 159.30;
let gun5 = 157.85;

// 1) Toplam ve ortalama
let toplam = gun1 + gun2 + gun3 + gun4 + gun5;
let ortalama = toplam / 5;

console.log("Toplam   : " + toplam.toFixed(2));
console.log("Ortalama : " + ortalama.toFixed(2));

// 2) En yüksek ve en düşük (dizi ve Math.max/min yok, sadece if)
let enYuksek = gun1;
let enDusuk = gun1;

if (gun2 > enYuksek) { enYuksek = gun2; }
if (gun3 > enYuksek) { enYuksek = gun3; }
if (gun4 > enYuksek) { enYuksek = gun4; }
if (gun5 > enYuksek) { enYuksek = gun5; }

if (gun2 < enDusuk) { enDusuk = gun2; }
if (gun3 < enDusuk) { enDusuk = gun3; }
if (gun4 < enDusuk) { enDusuk = gun4; }
if (gun5 < enDusuk) { enDusuk = gun5; }

console.log("En yüksek: " + enYuksek);
console.log("En düşük : " + enDusuk);

// 3) Son gün ile ilk gün arasındaki yüzde değişim
let yuzdeDegisim = ((gun5 - gun1) / gun1) * 100;

console.log("Yüzde değişim (1. gün -> 5. gün): %" + yuzdeDegisim.toFixed(2));