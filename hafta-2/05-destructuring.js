// 15. ADIM — Destructuring ve spread

const hisse = { kod: "THYAO", fiyat: 285.5, hacim: 2500000 };

// 1) Nesneden değer ayıklama
const { kod, fiyat } = hisse;

console.log(kod); // "THYAO"
console.log(fiyat); // 285.5

// 2) Ayıklarken isim değiştirme
const { kod: hisseKodu, fiyat: sonFiyat } = hisse;

console.log(hisseKodu);
console.log(sonFiyat);

// 3) Olmayan anahtar için varsayılan değer
const { piyasaDegeri = 0 } = hisse;
console.log(piyasaDegeri);

// 4) Dizi destructuring — isim değil, SIRA önemli
const fiyatlar = [90, 70, 80, 100];

const [ilkFiyat, ikinciFiyat] = fiyatlar;

console.log(ilkFiyat);
console.log(ikinciFiyat);

// 5) Rest — ilk eleman ve kalanlar
const [bas, ...kalanFiyatlar] = fiyatlar;

console.log(bas);
console.log(kalanFiyatlar);

// 6) Parametrede destructuring
function ozet({ kod, fiyat }) {
  return `${kod} hissesinin fiyatı ${fiyat} TL.`;
}

console.log(ozet(hisse));

// 7) Spread — orijinali bozmadan güncellenmiş kopya
const guncelHisse = { ...hisse, fiyat: 300 };

console.log("Yeni nesne:", guncelHisse);
console.log("Orijinal nesne:", hisse);

// 8) Spread ile iki diziyi birleştirme
const digerFiyatlar = [106, 95, 87];
const birlesikFiyatlar = [...fiyatlar, ...digerFiyatlar];

console.log(birlesikFiyatlar);

// 9) Rest parametre — kaç argüman gelirse gelsin
function toplam(...sayilar) {
  return sayilar.reduce((biriken, sayi) => biriken + sayi, 0);
}

console.log(toplam(10, 20));
console.log(toplam(10, 20, 30, 40, 50));
