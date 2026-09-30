// 7. ADIM — Değişkenler (let ve const)

// let: içeriği değiştirilebilen kutu
let fiyat = 285;
console.log(fiyat); // 285

fiyat = 300; // let olduğu için değiştirilebilir (başına let YAZILMAZ)
console.log(fiyat); // 300

// const: bir kez değer konur, değiştirilemez
const hisseAdi = "THYAO";
console.log(hisseAdi);

// hisseAdi = "ASELS";  // TypeError: Assignment to constant variable.

// Kural: önce const dene, gerçekten değişmesi gerekiyorsa let'e geç.
