// 10. ADIM — Koşullar (if, else, switch, ternary)

const hisseAdi = "ENKA";
const fiyat = 86.8;
const islemHacmi = 2500000;

const oncekiKapanis = 86.3;
const sonKapanis = 84;

const yuzdeGetiri = ((sonKapanis - oncekiKapanis) / oncekiKapanis) * 100;
console.log(`Yüzde getiri: %${yuzdeGetiri.toFixed(2)}`);

// --- 1) if / else ---------------------------
if (fiyat > 80) {
  console.log("Fiyat 80'in üzerinde");
} else {
  console.log("Fiyat 80'in altında");
}

// --- 2) if / else if / else -----------------
// JavaScript yukarıdan aşağı bakar ve İLK uyan koşulda durur.
// Bu yüzden en dar koşul en üstte olmalı.
if (yuzdeGetiri > 2) {
  console.log("Güçlü yükseliş");
} else if (yuzdeGetiri > 0) {
  console.log("Yükseliş");
} else if (yuzdeGetiri === 0) {
  console.log("Değişim yok");
} else if (yuzdeGetiri > -2) {
  console.log("Düşüş");
} else {
  console.log("Sert düşüş");
}

// --- 3) İç içe koşul ------------------------
// Yükseliş tek başına yeterli sinyal değildir; hacme de bakılır.
if (yuzdeGetiri > 0) {
  if (islemHacmi > 1_000_000) {
    console.log("Hacimli yükseliş");
  } else {
    console.log("Hacimsiz yükseliş, dikkatli ol");
  }
}

// --- 4) switch ------------------------------
// break YAZILMAZSA alttaki case'ler de çalışır (fall-through).
const emirTipi = "LIMIT";

switch (emirTipi) {
  case "MARKET":
    console.log("Piyasa emri");
    break;
  case "LIMIT":
    console.log("Limit emri");
    break;
  case "STOP":
    console.log("Zarar kes emri");
    break;
  default:
    console.log("Bilinmeyen emir tipi");
}

// --- 5) Ternary -----------------------------
const sonuc = yuzdeGetiri > 0 ? "ARTI" : "EKSİ";
console.log(sonuc);
