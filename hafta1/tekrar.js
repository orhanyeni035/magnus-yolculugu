// HİSSE BİLGİLERİ 

const hisseAdi = "OTOKAR";
const sonFiyati = 309.50 ;
const isActive = true;
let kapanisFiyati;
 
console.log ( hisseAdi, sonFiyati, isActive, kapanisFiyati)

console.log (typeof hisseAdi);
console.log (typeof sonFiyati);
console.log (typeof isActive);
console.log (typeof kapanisFiyati);

console.log(`${hisseAdi} hissesi şu an ${sonFiyati} TL seviyesinde ve işlem durumu: ${isActive ? "açık" : "kapalı"}.`);

// ÖNCEKİ KAPANIŞ FİYATI

const oncekiKapanis =307.75;
const sonKapanis = 315.75;
const fark= sonKapanis - oncekiKapanis;
const yuzdeGetiri = (fark / oncekiKapanis ) * 100;

console.log ( `Fiyat farkı : ${fark.toFixed(2)} TL`);
console.log(`Yüzde getiri: %${yuzdeGetiri.toFixed(2)}`);

if (yuzdeGetiri > 0 ) {
    console.log (" Hisse yükselişte")
}else if  (yuzdeGetiri < 0 ) {
    console.log (" hisse düşüşte " )
}else {
    console.log (" hisse değişemdi")
}

const emirTipi = "limit" ;

switch (emirTipi){
case "piyasa":
console.log ("Piyasa emri seçildi.")
break;

case "limit":
console.log("limit emri seçlidi.")
break;

case "stop":
console.log( "stop emri seçlildi.")
break;
default:
    console.log("Bilinmeyen emir tipi.");
}
console.log(yuzdeGetiri >= 0 ? "ARTI" : "EKSİ");

let birikim = 100 ;

for (let yil =1; yil <=5; yil++) {
    birikim *= 1.20 ;
    console.log(`${yil}. yıl sonu: ${birikim.toFixed(2)} TL`);
}

let fiyat = 100;
const esik = 150;
const gunlukArtisOrani = 0.02; // günlük %2
let gun = 0;

while (fiyat <= esik) {
  fiyat *= 1 + gunlukArtisOrani;
  gun++;
}

console.log(`Fiyat ${gun}. günde ${esik} TL eşiğini geçti: ${fiyat.toFixed(2)} TL`);







