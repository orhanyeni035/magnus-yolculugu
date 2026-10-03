const hisseAdi = "stn";
const alisFiyati = 45.2;
const adet = 250;
const guncelFiyat = 51.8;

let toplamMaliyet = alisFiyati * adet;
console.log("Toplam maliyet  : " + toplamMaliyet.toFixed(2) + " TL ");

let guncelDeger = guncelFiyat * adet;
console.log("Güncel değer    : " + guncelDeger.toFixed(2) + " TL ");

let karZarar = guncelDeger - toplamMaliyet;
console.log("Kâr/Zarar tutarı: " + karZarar.toFixed(2) + " TL");

let karZararYuzde = (karZarar / toplamMaliyet) * 100;
console.log("Kâr/Zarar yüzde : %" + karZararYuzde.toFixed(2));

kar = guncelFiyat > alisFiyati;
console.log("");

if (karZarar > 0) {
  console.log("KAR");
} else if (karZarar < 0) {
  console.log("ZARAR");
} else {
  console.log("NÖTR");
}

if (karZararYuzde > 10) {
  console.log("Satış düşünülebilir");
}

console.log(
  `${hisseAdi} hissesi: ${adet} adet, durum: ${karZarar > 0 ? "KAR" : karZarar < 0 ? "ZARAR" : "NÖTR"}.`,
);
// 4) Durum (iç içe ternary)
// let durum = karZarar > 0 ? "KAR" : karZarar < 0 ? "ZARAR" : "NÖTR";
// console.log("Durum           : " + durum);
