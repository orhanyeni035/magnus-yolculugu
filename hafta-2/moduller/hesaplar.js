export const KOMISYON_ORANI = 0.002;

export function yuzdeGetiri(oncekiKapanis, sonKapanis) {
  return ((sonKapanis - oncekiKapanis) / oncekiKapanis) * 100;
}

export function karZarar(alisFiyati, adet, guncelFiyat) {
  return (guncelFiyat - alisFiyati) * adet;
}

export function bilesikGetiri(anapara, oran, yil) {
  let deger = anapara;

  for (let i = 0; i < yil; i++) {
    deger *= 1 + oran;
  }

  return deger;
}
