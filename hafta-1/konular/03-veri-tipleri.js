// 8. ADIM — Veri tipleri

const hisseAdi = "ENKA"; // string
const fiyat = 285; // number
const isActive = true; // boolean
const isClosed = false; // boolean
let kapanisFiyati = null; // null  → bilerek boş
let sonFiyat; // undefined → değer hiç verilmedi

console.log(hisseAdi);
console.log(fiyat);
console.log(isActive);
console.log(isClosed);
console.log(kapanisFiyati);
console.log(sonFiyat);

// typeof — değerin kendisini değil, TİPİNİ verir
console.log(typeof hisseAdi); // string
console.log(typeof fiyat); // number
console.log(typeof isActive); // boolean
console.log(typeof isClosed); // boolean
console.log(typeof kapanisFiyati); // object  ← JavaScript'in bilinen eski hatası
console.log(typeof sonFiyat); // undefined

// + işaretinin iki yüzü
const fiyatMetin = "285"; // tırnak içinde, yani METİN

console.log(fiyat + 15); // 300   → sayı + sayı = toplama
console.log(fiyatMetin + 15); // "28515" → metin + sayı = birleştirme

// Template literal — ters tırnak ve ${} ile değişken gömme
console.log(`${hisseAdi} hisse senedi ${fiyat} TL`);
