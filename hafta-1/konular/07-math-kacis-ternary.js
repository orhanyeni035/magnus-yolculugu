// EK KONULAR — Math, kaçış karakteri, iç içe ternary

// --- 1) Math.floor ve % ile birim dönüşümü --
// Her adım bir öncekinin KALANI üzerinden gider.
const gunSayisi = 400;

const yil = Math.floor(gunSayisi / 365);
const kalanGun = gunSayisi % 365;
const ay = Math.floor(kalanGun / 30);
const gun = kalanGun % 30;

console.log(`${gunSayisi} gün = ${yil} yıl, ${ay} ay, ${gun} gün`);

// Math'in diğer metotları:
// Math.ceil  → yukarı yuvarlar
// Math.round → en yakına yuvarlar
// Math.max / Math.min → en büyük / en küçük

// --- 2) Kaçış karakteri \n ------------------
// Tek bir console.log ile birden fazla satır
console.log("Birinci satır\nİkinci satır\nÜçüncü satır");

// --- 3) İç içe ternary ----------------------
// koşul1 ? A : (koşul2 ? B : C)
const yuzdeGetiri = 3;

const karar = yuzdeGetiri > 5 ? "SATIŞ" : yuzdeGetiri < -5 ? "ALIŞ" : "BEKLE";
console.log(karar);

// İkiden fazla seçenekte if/else if daha okunaklıdır.
