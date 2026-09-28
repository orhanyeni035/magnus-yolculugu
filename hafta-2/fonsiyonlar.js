function yuzdeGetiri(oncekiKapanis, sonKapanis) {
  return ((sonKapanis - oncekiKapanis) / oncekiKapanis) * 100;
}

console.log(yuzdeGetiri(100, 110)); // 10
console.log(yuzdeGetiri(200, 180)); // -10
console.log(yuzdeGetiri(50, 60));   // 20

const alisFiyati = 45.20
const adet = 20
const guncelFiyat= 51.80

function karZarar (alisFiyati, adet, guncelFiyat) {
    return ( guncelFiyat - alisFiyati ) * adet 
}
console.log (karZarar(alisFiyati , adet, guncelFiyat));

function durumBelirle(getiri) {
  if (getiri > 0) {
    return "KAR";
  } else if (getiri < 0) {
    return "ZARAR";
  } else {
    return "NÖTR";
  }
}
console.log (durumBelirle( -1));

function bilesikGetiri(anapara, oran, yil) {
  let deger = anapara;

  for (let i = 0; i < yil; i++) {
    deger *= 1 + oran;
  }

  return deger;
}
console.log (bilesikGetiri(100, 0.15, 10))

const yuzdeGetiriOk = (oncekiKapanis, sonKapanis) =>
  ((sonKapanis - oncekiKapanis) / oncekiKapanis) * 100;

console.log (yuzdeGetiriOk(100,150));

function komisyon(tutar, oran = 0.002) {
  return tutar * oran;
}

console.log(komisyon(1000));     
console.log(komisyon(1000, 0.01)); 