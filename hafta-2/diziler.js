const hisseAdi ="NNM"
const kapanisFiyatlari = [90,70,80,100,106,95,87]
 
console.log (kapanisFiyatlari[0]);
console.log (kapanisFiyatlari[kapanisFiyatlari.length - 1]);
console.log (kapanisFiyatlari.length);

for (let i = 0; i < kapanisFiyatlari.length; i++) {
  console.log(`${i + 1}. gün: ${kapanisFiyatlari[i]} TL`);
}

for (const fiyat of kapanisFiyatlari) {
  console.log(`${fiyat} TL`);
}

let toplam = 0;

for (const fiyat of kapanisFiyatlari) {
  toplam += fiyat;
}

const ortalama = toplam / kapanisFiyatlari.length;

console.log("Toplam:", toplam);
console.log("Ortalama:", ortalama);


let enYuksek = kapanisFiyatlari[0];
let enDusuk = kapanisFiyatlari[0];

for (const fiyat of kapanisFiyatlari) {
  if (fiyat > enYuksek) enYuksek = fiyat;
  if (fiyat < enDusuk) enDusuk = fiyat;
}

console.log("En yüksek:", enYuksek);
console.log("En düşük:", enDusuk);

kapanisFiyatlari.push(92);
toplam = 0

for (const fiyat of kapanisFiyatlari) {
  toplam += fiyat;
}

const yeniOrtalama = toplam / kapanisFiyatlari.length;

console.log("Yeni uzunluk:", kapanisFiyatlari.length);
console.log("Yeni ortalama:", yeniOrtalama);