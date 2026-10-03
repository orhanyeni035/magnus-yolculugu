// 13. ADIM — Dizi metotları

const fiyatlar = [90, 70, 80, 65, 95, 75, 85, 105, 101, 100];

// 1) forEach — her eleman için bir iş yap
fiyatlar.forEach((fiyat, i) => {
  console.log(`${i + 1}. gün: ${fiyat} TL`);
});

// 2) map — her elemanı dönüştür, yeni dizi üret
const komisyonlu = fiyatlar.map((fiyat) => fiyat * 1.002);
console.log(komisyonlu);
console.log(fiyatlar); // orijinal değişmedi

// 3) reduce — hepsini tek değere indir
const toplam = fiyatlar.reduce((biriken, fiyat) => biriken + fiyat, 0);
console.log(toplam);

const ortalama = toplam / fiyatlar.length;
console.log(ortalama);

// 4) filter — koşula uyanları seç
const ortalamaUstu = fiyatlar.filter((fiyat) => fiyat > ortalama);
console.log(ortalamaUstu);

// 5) find — koşula uyan ilk elemanı bul
const ilk80UstuFiyat = fiyatlar.find((fiyat) => fiyat > 80);
console.log(ilk80UstuFiyat);

// 6) sort — spread ile kopya al ki orijinal bozulmasın
const siraliFiyatlar = [...fiyatlar].sort((a, b) => a - b);

console.log("Sıralı kopya:", siraliFiyatlar);
console.log("Orijinal dizi:", fiyatlar);
console.log("En düşük fiyat:", siraliFiyatlar[0]);
console.log("En yüksek fiyat:", siraliFiyatlar[siraliFiyatlar.length - 1]);

// 7) Zincirleme — önce ele, sonra dönüştür
const komisyonluFiyatlar = fiyatlar.filter((f) => f > 80).map((f) => f * 1.002);

console.log(komisyonluFiyatlar);
