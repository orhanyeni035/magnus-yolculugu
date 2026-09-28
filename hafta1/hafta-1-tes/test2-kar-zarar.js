// Yatırım bilgileri
let alisFiyati = 45.20;     // hisse başına alış fiyatı
let adet = 250;             // alınan hisse adedi
let guncelFiyat = 51.80;    // bugünkü fiyat

// 1) Toplam maliyet
let toplamMaliyet = alisFiyati * adet;

// 2) Bugünkü toplam değer
let guncelDeger = guncelFiyat * adet;

// 3) Kâr/zarar tutarı ve yüzdesi
let karZarar = guncelDeger - toplamMaliyet;
let karZararYuzde = (karZarar / toplamMaliyet) * 100;

console.log("Toplam maliyet  : " + toplamMaliyet.toFixed(2) + " TL");
console.log("Güncel değer    : " + guncelDeger.toFixed(2) + " TL");
console.log("Kâr/Zarar tutarı: " + karZarar.toFixed(2) + " TL");
console.log("Kâr/Zarar yüzde : %" + karZararYuzde.toFixed(2));

// 4) Durum (iç içe ternary)
let durum = karZarar > 0 ? "KAR" : karZarar < 0 ? "ZARAR" : "NÖTR";
console.log("Durum           : " + durum);

// 5) Kâr %10'u geçtiyse uyarı
if (karZararYuzde > 10) {
    console.log("Satış düşünülebilir");
}