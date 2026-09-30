// 13. ADIM — Diziler (temel)

const hisseAdi = "NNM";
const kapanisFiyatlari = [90, 70, 80, 100, 106, 95, 87];

// 1) İlk eleman, son eleman, uzunluk
console.log(kapanisFiyatlari[0]);
console.log(kapanisFiyatlari[kapanisFiyatlari.length - 1]);
console.log(kapanisFiyatlari.length);

// 2) Klasik for — indeks gerektiğinde
for (let i = 0; i < kapanisFiyatlari.length; i++) {
  console.log(`${i + 1}. gün: ${kapanisFiyatlari[i]} TL`);
}

// 3) for...of — sadece elemanlar gerektiğinde
for (const fiyat of kapanisFiyatlari) {
  console.log(`${fiyat} TL`);
}

// 4) Toplam ve ortalama
let toplam = 0;

for (const fiyat of kapanisFiyatlari) {
  toplam += fiyat;
}

const ortalama = toplam / kapanisFiyatlari.length;

console.log("Toplam:", toplam);
console.log("Ortalama:", ortalama);

// 5) En yüksek ve en düşük — iki ayrı if, çünkü kontroller bağımsız
let enYuksek = kapanisFiyatlari[0];
let enDusuk = kapanisFiyatlari[0];

for (const fiyat of kapanisFiyatlari) {
  if (fiyat > enYuksek) enYuksek = fiyat;
  if (fiyat < enDusuk) enDusuk = fiyat;
}

console.log("En yüksek:", enYuksek);
console.log("En düşük:", enDusuk);

// 6) push ile eleman ekle, ortalamayı yeniden hesapla
kapanisFiyatlari.push(92);
toplam = 0;

for (const fiyat of kapanisFiyatlari) {
  toplam += fiyat;
}

const yeniOrtalama = toplam / kapanisFiyatlari.length;

console.log("Yeni uzunluk:", kapanisFiyatlari.length);
console.log("Yeni ortalama:", yeniOrtalama);
