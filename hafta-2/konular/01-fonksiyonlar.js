// 12. ADIM — Fonksiyonlar ve ok fonksiyonları

// 1) Yüzde getiri — return ile sonuç döndürür
function yuzdeGetiri(oncekiKapanis, sonKapanis) {
  return ((sonKapanis - oncekiKapanis) / oncekiKapanis) * 100;
}

console.log(yuzdeGetiri(100, 110)); // 10
console.log(yuzdeGetiri(200, 180)); // -10
console.log(yuzdeGetiri(50, 60)); // 20

// 2) Kâr/zarar
const alisFiyati = 45.2;
const adet = 20;
const guncelFiyat = 51.8;

function karZarar(alisFiyati, adet, guncelFiyat) {
  return (guncelFiyat - alisFiyati) * adet;
}

console.log(karZarar(alisFiyati, adet, guncelFiyat));

// 3) Duruma göre metin döndürür
function durumBelirle(getiri) {
  if (getiri > 0) {
    return "KAR";
  } else if (getiri < 0) {
    return "ZARAR";
  } else {
    return "NÖTR";
  }
}

console.log(durumBelirle(-1));

// 4) Bileşik getiri — içinde döngü var
function bilesikGetiri(anapara, oran, yil) {
  let deger = anapara;

  for (let i = 0; i < yil; i++) {
    deger *= 1 + oran;
  }

  return deger;
}

console.log(bilesikGetiri(100, 0.15, 10));

// 5) Aynı işin ok fonksiyonu hâli (örtük return)
const yuzdeGetiriOk = (oncekiKapanis, sonKapanis) =>
  ((sonKapanis - oncekiKapanis) / oncekiKapanis) * 100;

console.log(yuzdeGetiriOk(100, 150));

// 6) Varsayılan parametre
function komisyon(tutar, oran = 0.002) {
  return tutar * oran;
}

console.log(komisyon(1000)); // varsayılan oran
console.log(komisyon(1000, 0.01)); // verilen oran
