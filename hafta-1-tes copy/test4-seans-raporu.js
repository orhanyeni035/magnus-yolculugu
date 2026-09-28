const baslangicFiyati = 50;
const gunlukArtis = 1.5;


for (let gun = 1; gun <= 10; gun++) {
  const fiyat = baslangicFiyati + (gun - 1) * gunlukArtis;
  console.log(`${gun}. gün: ${fiyat.toFixed(2)} TL`);
}

for (let gun = 1; gun <= 10; gun++) {
  if (gun % 2 !== 0) continue;

  const fiyat = baslangicFiyati + (gun - 1) * gunlukArtis;
  console.log(`${gun}. gün: ${fiyat.toFixed(2)} TL`);
}

for (let gun = 1; gun <= 10; gun++) {
  const fiyat = baslangicFiyati + (gun - 1) * gunlukArtis;

  if (fiyat > 60) {
    console.log(`Fiyat ${gun}. günde 60 TL'yi geçti.`);
    break;
  }
}

const gunNumarasi = 2;

switch (gunNumarasi) {
  case 1:
    console.log("Pazartesi");
    break;
  case 2:
    console.log("Salı");
    break;
  case 3:
    console.log("Çarşamba");
    break;
  default:
    console.log("Bu gün için ad tanımlanmamış.");
}