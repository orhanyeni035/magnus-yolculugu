const hisse = {
  kod: "THYAO",
  ad: "Türk Hava Yolları",
  öncekiKapanis:280,
  sonKapanis:284,
  sonFiyat: 285.50,
  hacim: 2500000,
  islemGoruyor: true
};
hisse.sektor = "Ulaştırma";
hisse.sonKapanis = 290.00;

console.log(hisse);
console.log (hisse.kod);
console.log (hisse.sonKapanis);

const yuzdeGetiri = ((hisse.sonKapanis - hisse.oncekiKapanis) / hisse.oncekiKapanis) * 100;

console.log(yuzdeGetiri);

const hisseler = [
  { kod: "THYAO", fiyat: 285.50, hacim: 2500000 },
  { kod: "ASELS", fiyat: 72.30, hacim: 1800000 },
  { kod: "BIMAS", fiyat: 512.00, hacim: 950000 },
  { kod: "TUPRS", fiyat: 164.80, hacim: 1200000 },
  { kod: "SISE", fiyat: 45.60, hacim: 2100000 }
];
console.log;(hisseler);

const hisseKodlari = hisseler.map((hisse) => hisse.kod);

console.log(hisseKodlari);

const yuksekHacimliHisseler = hisseler.filter((hisse) => hisse.hacim > 1_000_000);

console.log(yuksekHacimliHisseler);

const toplamHacim = hisseler.reduce(
  (biriken, hisse) => biriken + hisse.hacim,
  0
);

console.log(toplamHacim);

const aranan = hisseler.find((hisse) => hisse.kod === "TUPRS");
console.log(aranan);

const fiyataGoreSiraliHisseler = [...hisseler].sort(
  (a, b) => b.fiyat - a.fiyat
);

console.log("Fiyata göre büyükten küçüğe:", fiyataGoreSiraliHisseler);
console.log("Orijinal dizi:", hisseler);

const yuksekHacimliKodlar = hisseler
  .filter((hisse) => hisse.hacim > 1_000_000)
  .map((hisse) => hisse.kod);

console.log(yuksekHacimliKodlar);


//Bir hisse nesnesi oluştur: kod, ad, önceki kapanış, son kapanış, hacim, işlem görüyor mu.
// Nokta yazımıyla kodunu ve son kapanışını yazdır.
// Nesneye yeni bir anahtar ekle: sektör. Sonra son kapanışı değiştir ve yeni halini yazdır.
// Nesnenin verilerini kullanarak yüzde getiriyi hesapla ve yazdır. (Geçen adımda yazdığın fonksiyonu kullanabilirsin.)
// En az 5 hisselik bir nesne dizisi oluştur. Her hissede kod, fiyat ve hacim olsun.
// map ile sadece hisse kodlarından oluşan bir dizi üret, yazdır.
// filter ile hacmi 1 milyonun üzerindeki hisseleri seç, yazdır.
// reduce ile toplam hacmi hesapla, yazdır.
// find ile belirli bir koda sahip hisseyi bul, yazdır.
// sort ile hisseleri fiyata göre büyükten küçüğe sırala, yazdır. (Orijinal dizi bozulmasın.)
// Zincirleme: Hacmi 1 milyon