// 17. ADIM — Hata yönetimi (try, catch, throw, finally)

// 1) Kendi kuralını throw ile dayatan fonksiyon
function yuzdeGetiri(onceki, son) {
  if (onceki <= 0) {
    throw new Error("Önceki kapanış sıfırdan büyük olmalıdır.");
  }

  return ((son - onceki) / onceki) * 100;
}

// 2) Geçerli değerlerle — catch çalışmaz
try {
  const sonuc = yuzdeGetiri(100, 110);
  console.log(sonuc);
} catch (hata) {
  console.error(hata.message);
}

// 3) Hatalı değerle — catch devreye girer, program ÇÖKMEZ
try {
  const sonuc = yuzdeGetiri(0, 110);
  console.log(sonuc);
} catch (hata) {
  console.error(hata.message);
}

console.log("Program devam ediyor");

// 4) İki ayrı kural kontrol eden fonksiyon
function fiyatKontrol(fiyat) {
  if (typeof fiyat !== "number") {
    throw new Error("Fiyat sayı olmalı");
  }

  if (fiyat < 0) {
    throw new Error("Fiyat negatif olamaz");
  }

  return true;
}

// 5) Üç senaryoyu da dene
try {
  console.log(fiyatKontrol(285.5));
} catch (hata) {
  console.error(hata.message);
}

try {
  console.log(fiyatKontrol("abc"));
} catch (hata) {
  console.error(hata.message);
}

try {
  console.log(fiyatKontrol(-50));
} catch (hata) {
  console.error(hata.message);
}

// 6) finally — hata olsa da olmasa da çalışır
try {
  fiyatKontrol(-50);
} catch (hata) {
  console.error(hata.message);
} finally {
  console.log("İlk çağrının finally bloğu çalıştı");
}

try {
  fiyatKontrol(285.5);
} catch (hata) {
  console.error(hata.message);
} finally {
  console.log("İkinci çağrının finally bloğu çalıştı");
}

// 7) Gerçek senaryo: bozuk kayıtlar tüm işi durdurmaz
const hisseler = [
  { kod: "THYAO", fiyat: 285.5 },
  { kod: "ASELS", fiyat: null },
  { kod: "BIMAS" }, // fiyat anahtarı yok
  { kod: "TUPRS", fiyat: "165" }, // metin, sayı değil
  { kod: "SISE", fiyat: 45.6 },
];

let basariliSayisi = 0;
let hataliSayisi = 0;

for (const hisse of hisseler) {
  try {
    fiyatKontrol(hisse.fiyat);
    console.log(`${hisse.kod}: ${hisse.fiyat} TL`);
    basariliSayisi++;
  } catch (hata) {
    console.log(`${hisse.kod}: ${hata.message}`);
    hataliSayisi++;
  }
}

console.log("Başarılı:", basariliSayisi);
console.log("Hatalı:", hataliSayisi);
