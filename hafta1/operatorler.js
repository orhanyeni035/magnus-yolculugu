// 1 Aritmetik operatörler 
const a = 10 ;
const b = 3 ;

console.log(a + b); // toplama
console.log(a - b); // çıkarma
console.log(a * b); // çarpma
console.log(a / b); // bölme
console.log(a % b); // mod alma 
console.log(a ** b); // üs alma

// arttırma ve azaltma operatörleri

let adet = 5;

adet ++ ;  // adet artık  6 (1 artar)
adet -- ;  // adet artık 5 (1 azalır)

adet += 10 ;  // adet artık 15 (10 eklenir)
adet -= 3 ;  // adet artık 12 (3 çıkarılır)
adet *= 2 ;  // adet artık 24 (2 ile çarpılır)

// += yazımı, adet = adet + 10 yazmanın kısa yoludur. Çok kullanılır.


// 2 KARŞILAŞTIRMA OPERATÖRLERİ

const fiyat=285;

console.log(fiyat > 285);  // false büyüktür
console.log(fiyat < 285);  // false küçüktür
console.log(fiyat >= 285); // true büyük eşittir
console.log(fiyat <= 285); // true küçük eşittir
console.log(fiyat == 285); // true eşittir
console.log(fiyat != 285); // false


// En önemli kural: === ve == farkı 

console.log(285 === "285");   // false
console.log(285 == "285");    // true  (!)

// 3 MANTIKSAL OPERATÖRLER

//   Birden fazla koşulu birleştirir 

const islemgoruyor = true;

console.log (fiyat> 200 && islemgoruyor);  // true
console.log (fiyat< 300 || islemegoruyor);  // true VEYA
console.log (!islemgoruyor);  // false DEĞİL

