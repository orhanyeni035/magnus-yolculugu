// TEKRAR GÜNÜ — 1. haftanın tamamı, tek dosyada

// --- Hisse bilgileri ------------------------
const hisseAdi = "OTOKAR";
const sonFiyati = 309.5;
const isActive = true;
let kapanisFiyati; // undefined

console.log(hisseAdi, sonFiyati, isActive, kapanisFiyati);

console.log(typeof hisseAdi);
console.log(typeof sonFiyati);
console.log(typeof isActive);
console.log(typeof kapanisFiyati);

console.log(
  `${hisseAdi} hissesi şu an ${sonFiyati} TL seviyesinde ve işlem durumu: ${
    isActive ? "açık" : "kapalı"
  }.`,
);

// --- Getiri hesabı --------------------------
const oncekiKapanis = 307.75;
const sonKapanis = 315.75;
const fark = sonKapanis - oncekiKapanis;
const yuzdeGetiri = (fark / oncekiKapanis) * 100;

console.log(`Fiyat farkı: ${fark.toFixed(2)} TL`);
console.log(`Yüzde getiri: %${yuzdeGetiri.toFixed(2)}`);

// --- Koşullar -------------------------------
if (yuzdeGetiri > 0) {
  console.log("Hisse yükselişte");
} else if (yuzdeGetiri < 0) {
  console.log("Hisse düşüşte");
} else {
  console.log("Hisse değişmedi");
}

// --- switch ---------------------------------
const emirTipi = "limit";

switch (emirTipi) {
  case "piyasa":
    console.log("Piyasa emri seçildi");
    break;
  case "limit":
    console.log("Limit emri seçildi");
    break;
  case "stop":
    console.log("Stop emri seçildi");
    break;
  default:
    console.log("Bilinmeyen emir tipi");
}

// --- Ternary --------------------------------
console.log(yuzdeGetiri >= 0 ? "ARTI" : "EKSİ");

// --- for: bileşik getiri --------------------
let birikim = 100;

for (let yil = 1; yil <= 5; yil++) {
  birikim *= 1.2; // yıllık %20
  console.log(`${yil}. yıl sonu: ${birikim.toFixed(2)} TL`);
}

// --- while: eşiği kaç günde geçer -----------
let fiyat = 100;
const esik = 150;
const gunlukArtisOrani = 0.02; // günlük %2
let gun = 0;

while (fiyat <= esik) {
  fiyat *= 1 + gunlukArtisOrani;
  gun++;
}

console.log(
  `Fiyat ${gun}. günde ${esik} TL eşiğini geçti: ${fiyat.toFixed(2)} TL`,
);
