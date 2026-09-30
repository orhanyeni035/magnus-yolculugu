// 9. ADIM — Operatörler

// --- 1) Aritmetik ---------------------------
const a = 10;
const b = 3;

console.log(a + b); // 13  toplama
console.log(a - b); // 7   çıkarma
console.log(a * b); // 30  çarpma
console.log(a / b); // 3.33...  bölme
console.log(a % b); // 1   kalan (mod)
console.log(a ** b); // 1000 üs alma

// Kısa yazımlar
let adet = 5;

adet++; // 6
adet--; // 5
adet += 10; // 15  (adet = adet + 10 ile aynı)
adet -= 3; // 12
adet *= 2; // 24

console.log(adet);

// --- 2) Karşılaştırma -----------------------
// Sonuçları her zaman boolean'dır.
const fiyat = 285;

console.log(fiyat > 285); // false
console.log(fiyat < 285); // false
console.log(fiyat >= 285); // true
console.log(fiyat <= 285); // true
console.log(fiyat === 285); // true
console.log(fiyat !== 285); // false

// EN ÖNEMLİ KURAL: === ile == farkı
console.log(285 === "285"); // false → hem değere hem TİPE bakar
console.log(285 == "285"); // true  → tipi görmezden gelir, gizlice çevirir
// Her zaman === ve !== kullan.

// --- 3) Mantıksal ---------------------------
const islemGoruyor = true;

console.log(fiyat > 200 && islemGoruyor); // true   VE  — ikisi de doğruysa
console.log(fiyat < 300 || islemGoruyor); // true   VEYA — biri doğruysa
console.log(!islemGoruyor); // false  DEĞİL — tersine çevirir

// --- 4) Finans hesapları --------------------
const oncekiKapanis = 86.3;
const sonKapanis = 86.75;

const fark = sonKapanis - oncekiKapanis;
const yuzdeGetiri = (fark / oncekiKapanis) * 100;

console.log(`Fark: ${fark.toFixed(2)} TL`);
console.log(`Yüzde getiri: %${yuzdeGetiri.toFixed(2)}`);

// Fark tek başına yetersizdir: 0.45 TL, 86 TL'lik hissede küçük,
// 2 TL'lik hissede devasa bir harekettir. Bu yüzden yüzde kullanılır.

const islemHacmi = 2500000;
const isUp = sonKapanis > oncekiKapanis;
const isDown = sonKapanis < oncekiKapanis;

console.log(isUp, isDown);
console.log(isUp && islemHacmi > 1_000_000); // hacimli yükseliş mi?

// Dikkat: !isUp ile isDown aynı şey DEĞİL.
// Fiyat hiç değişmediyse !isUp true, isDown false olur.
