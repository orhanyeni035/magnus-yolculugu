// 14. ADIM — Nesneler ve nesne dizileri

// 1) Tek bir hisse nesnesi
const hisse = {
  kod: "THYAO",
  ad: "Türk Hava Yolları",
  oncekiKapanis: 280,
  sonKapanis: 284,
  hacim: 2500000,
  islemGoruyor: true,
};

// 2) Nokta yazımıyla erişim
console.log(hisse.kod);
console.log(hisse.sonKapanis);

// 3) Yeni anahtar ekle, mevcut değeri değiştir
hisse.sektor = "Ulaştırma";
hisse.sonKapanis = 290;

console.log(hisse);

// 4) Nesnenin verileriyle hesap
const yuzdeGetiri =
  ((hisse.sonKapanis - hisse.oncekiKapanis) / hisse.oncekiKapanis) * 100;

console.log(`Yüzde getiri: %${yuzdeGetiri.toFixed(2)}`);

// 5) Nesne dizisi — gerçek veri hep böyle gelir
const hisseler = [
  { kod: "THYAO", fiyat: 285.5, hacim: 2_500_000 },
  { kod: "ASELS", fiyat: 72.3, hacim: 1_800_000 },
  { kod: "BIMAS", fiyat: 512.0, hacim: 950_000 },
  { kod: "TUPRS", fiyat: 164.8, hacim: 1_200_000 },
  { kod: "SISE", fiyat: 45.6, hacim: 2_100_000 },
];

console.log(hisseler);

// 6) map — sadece kodlar
const hisseKodlari = hisseler.map((hisse) => hisse.kod);
console.log(hisseKodlari);

// 7) filter — hacmi 1 milyonun üzerindekiler
const yuksekHacimliHisseler = hisseler.filter(
  (hisse) => hisse.hacim > 1_000_000
);
console.log(yuksekHacimliHisseler);

// 8) reduce — toplam hacim
const toplamHacim = hisseler.reduce(
  (biriken, hisse) => biriken + hisse.hacim,
  0
);
console.log(toplamHacim);

// 9) find — belirli bir hisseyi bul
const aranan = hisseler.find((hisse) => hisse.kod === "TUPRS");
console.log(aranan);

// 10) sort — fiyata göre büyükten küçüğe, orijinal bozulmadan
const fiyataGoreSirali = [...hisseler].sort((a, b) => b.fiyat - a.fiyat);

console.log("Fiyata göre büyükten küçüğe:", fiyataGoreSirali);
console.log("Orijinal dizi:", hisseler);

// 11) Zincirleme — yüksek hacimlilerin sadece kodları
const yuksekHacimliKodlar = hisseler
  .filter((hisse) => hisse.hacim > 1_000_000)
  .map((hisse) => hisse.kod);

console.log(yuksekHacimliKodlar);
