const gun1 = 100;
const gun2 = 103;
const gun3 = 106;
const gun4 = 105;
const gun5 = 104;

const toplam = gun1 + gun2 + gun3 + gun4 + gun5;

console.log(`toplam ${toplam}`);

const ortalama = toplam / 5;

console.log(`ortalama ${ortalama}`);

let enYuksek = gun1;

if (gun2 > enYuksek) enYuksek = gun2;
if (gun3 > enYuksek) enYuksek = gun3;
if (gun4 > enYuksek) enYuksek = gun4;
if (gun5 > enYuksek) enYuksek = gun5;

console.log(`En yüksek fiyat: ${enYuksek}`);

let enDusuk = gun1;

if (gun2 < enDusuk) enDusuk = gun2;
if (gun3 < enDusuk) enDusuk = gun3;
if (gun4 < enDusuk) enDusuk = gun4;
if (gun5 < enDusuk) enDusuk = gun5;

console.log(`En düşük fiyat: ${enDusuk}`);

const yuzdeDegisim = ((gun5 - gun1) / gun1) * 100;

console.log(`Yüzde değişim: %${yuzdeDegisim.toFixed(2)}`);

if (yuzdeDegisim > 0) {
  console.log("Haftalık yükseliş");
} else if (yuzdeDegisim < 0) {
  console.log("Haftalık düşüş");
}
