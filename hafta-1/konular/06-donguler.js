// 11. ADIM — Döngüler (for, while, do...while, break, continue)

// --- 1) for — tur sayısı belliyken --------
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

for (let i = 10; i > 5; i--) {
  console.log(i); // 10'dan 6'ya geri say
}

for (let i = 0; i <= 10; i += 2) {
  console.log(i); // çift sayılar
}

// --- 2) while — tur sayısı belirsizken ----
// Döngü içinde koşulu etkileyen değer MUTLAKA değişmeli,
// yoksa sonsuz döngüye girer (çıkış: Ctrl + C).
let bakiye = 1000;

while (bakiye > 0) {
  bakiye -= 250;
  console.log(bakiye);
}

// --- 3) do...while — en az bir kez çalışır
let deneme = 0;

do {
  console.log("En az bir kez çalışır");
  deneme++;
} while (deneme < 2);

// --- 4) break ve continue -----------------
// break: döngüyü tamamen bitirir
// continue: o turu atlar, sonraki tura geçer
for (let i = 1; i <= 10; i++) {
  if (i === 9) break;
  if (i % 2 === 0) continue;
  console.log(i); // 1, 3, 5, 7
}

// --- 5) Bileşik getiri (for) --------------
let yatirim = 100;

for (let i = 1; i <= 10; i++) {
  yatirim *= 1.15; // her yıl %15
  console.log(`Yatırım ${i}. yılda ${yatirim.toFixed(2)} TL oldu`);
}

// --- 6) Hedefe kaç yılda ulaşır? (while) --
yatirim = 100; // başa sar, yoksa for'dan kalan değerle devam eder
let yil = 0;

while (yatirim < 1000) {
  yatirim *= 1.15;
  yil++;
}

console.log(`1000 TL'ye ${yil}. yılda ulaşıldı: ${yatirim.toFixed(2)} TL`);

// --- 7) Fiyat alarmı (while) --------------
const baslangic = 86;
const artis = 0.8;
const esik = 95;

let gun = 0;
let fiyat = baslangic;

while (fiyat < esik) {
  fiyat += artis;
  gun++;
}

console.log(`${gun}. günde alarm — fiyat: ${fiyat.toFixed(2)} TL`);

// --- 8) 3'ün katları (continue) -----------
for (let sayi = 1; sayi <= 30; sayi++) {
  if (sayi % 3 !== 0) continue;
  console.log(sayi);
}
