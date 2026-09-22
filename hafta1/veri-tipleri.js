const hisseAdi = "ENKA";
console.log(hisseAdi); // ekrana ENKA yazar

const fiyat = 285;
console.log(fiyat);  // ekrana 285 yazar

const fiyatMetin= "285";   // dikkat: tırnak içinde, yani metin

const isActive = true;
console.log(isActive); // ekrana true yazar

const isClosed = false;
console.log(isClosed); // ekrana false yazar

let kapanisFiyati = null;
console.log(kapanisFiyati); // ekrana null yazar

let sonFiyat;

console.log(typeof hisseAdi); // ekrana string yazar

console.log(typeof fiyat); // ekrana number yazar

console.log(typeof isActive); // ekrana boolean yazar

console.log(typeof isClosed); // ekrana boolean yazar

console.log(typeof kapanisFiyati); // ekrana object yazar   

console.log(sonFiyat); // ekrana undefined yazar

console.log(fiyatMetin + 15);  // ekrana 285 yazar

console.log(`${hisseAdi} hisse senedi ${fiyat} TL`);  // ekrana ENKA hisse senedi 285 TL yazar
