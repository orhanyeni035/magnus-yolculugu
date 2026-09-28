const fiyatlar =[ 90, 70, 80, 65, 95, 75, 85, 105, 101, 100];
fiyatlar.forEach((fiyat, i )=> {
    console.log(`${i + 1}.Gün: ${fiyat}TL`)
    
});

const komisyonlu = fiyatlar.map((fiyat) =>fiyat * 1.002);
console.log(komisyonlu);
console.log(fiyatlar);

const toplam = fiyatlar.reduce((biriken, fiyat) => biriken + fiyat, 0);
console.log (toplam);

const ortalama = toplam / fiyatlar.length;
console.log(ortalama);

const sonuc = fiyatlar.filter((fiyat) => fiyat > ortalama);
console.log(sonuc);

const ilk100UstuFiyat = fiyatlar.find((fiyat) => fiyat > 80);
console.log(ilk100UstuFiyat);

const siraliFiyatlar = [...fiyatlar].sort((a, b) => a - b);

console.log("Sıralı kopya:", siraliFiyatlar);
console.log("Orijinal dizi:", fiyatlar);
console.log("En düşük fiyat:", siraliFiyatlar[0]);
console.log("En yüksek fiyat:", siraliFiyatlar[siraliFiyatlar.length - 1]);

const komisyonluFiyatlar = fiyatlar
  .filter((f) => f > 80)
  .map((f) => f * 1.002);

  console.log (komisyonluFiyatlar);