function yuzdeGetiri(onceki, son) {
  if (onceki <= 0) {
    throw new Error("Önceki kapanış sıfırdan büyük olmalıdır.");
  }

  return ((son - onceki) / onceki) * 100;
}
try {
  const sonuc = yuzdeGetiri(100, 110);
  console.log(sonuc);
} catch (hata) {
  console.error(hata.message);
}
try {
  const sonuc = yuzdeGetiri(0, 110);
  console.log(sonuc);
} catch (hata) {
  console.error(hata.message);
}

console.log("Program devam ediyor");

function fiyatKontrol(fiyat) {
  if (typeof fiyat !== "number") {
    throw new Error("Fiyat sayı olmalı");
  }

  if (fiyat < 0) {
    throw new Error("Fiyat negatif olamaz");
  }

  return true;
}
try {
  console.log(fiyatKontrol(285.50));
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
try {
  fiyatKontrol(-50); // Hata fırlatır
} catch (hata) {
  console.error(hata.message);
} finally {
  console.log("İlk çağrının finally bloğu çalıştı");
}

try {
  fiyatKontrol(285.50); // Geçerli
} catch (hata) {
  console.error(hata.message);
} finally {
  console.log("İkinci çağrının finally bloğu çalıştı");
}
const hisseler = [
  { kod: "THYAO", fiyat: 285.50 },
  { kod: "ASELS", fiyat: null },
  { kod: "BIMAS" }, // fiyat anahtarı yok
  { kod: "TUPRS", fiyat: "165" },
  { kod: "SISE", fiyat: 45.60 }
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