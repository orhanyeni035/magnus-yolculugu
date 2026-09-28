const hisse = { kod: "THYAO", fiyat: 285.50, hacim: 2500000 };

// const kod = hisse.kod;
// const fiyat = hisse.fiyat;

const { kod, fiyat } = hisse;

console.log(kod);     // "THYAO"
console.log(fiyat);   // 285.50

const { kod: hisseKodu, fiyat: sonFiyat } = hisse;
console.log(hisseKodu);
console.log(sonFiyat);


const { piyasaDegeri = 260 } = hisse;
console.log (piyasaDegeri);

const fiyatlar = [90, 70, 80, 100];

const [ilkFiyat, ikinciFiyat] = fiyatlar;

console.log(ilkFiyat);
console.log(ikinciFiyat);
console.log(ilkFiyat);
const [bas, ...kalanFiyatlar] = fiyatlar;
console.log(kalanFiyatlar);

function ozet({ kod, fiyat }) {
  return `${kod} hissesinin fiyatı ${fiyat} TL.`;
}
console.log(ozet(hisse));

const guncelHisse = { ...hisse, fiyat: 300 };

console.log("Yeni nesne:", guncelHisse);
console.log("Orijinal nesne:", hisse);

const digerFiyatlar = [106, 95, 87];

const birlesikFiyatlar = [...fiyatlar, ...digerFiyatlar];

console.log(birlesikFiyatlar);

function toplam(...sayilar) {
  return sayilar.reduce((biriken, sayi) => biriken + sayi, 0);
}

console.log(toplam(10, 20));             
console.log(toplam(10, 20, 30, 40, 50)); 
// Bir hisse nesnesi oluştur (kod, ad, fiyat, hacim, sektör). Destructuring ile kod ve fiyatı ayıkla, yazdır.
// Aynı nesneden fiyat değerini sonFiyat adıyla ayıkla, yazdır.
// Nesnede olmayan bir anahtarı (piyasaDegeri) varsayılan değerle ayıkla, yazdır.
// Bir fiyat dizisinden ilk iki elemanı destructuring ile al, yazdır.
// Aynı diziden ilk elemanı ve kalanları rest ile ayır, ikisini de yazdır.
// ozet({ kod, fiyat }) adında bir fonksiyon yaz; parametrede destructuring kullansın, bir özet cümle döndürsün.
// Spread ile hisse nesnesinin fiyatını güncelleyen yeni bir nesne üret. Orijinalin değişmediğini yazdırarak göster.
// İki fiyat dizisini spread ile birleştir, yazdır.
// ...sayilar kullanan bir topla fonksiyonu yaz, farklı sayıda argümanla çağır.