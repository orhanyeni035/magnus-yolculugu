// Fiyatları çekip günlük getirileri hesaplayan fonksiyon.
// Başka dosyalar kullanabilsin diye export ediyoruz.

export const getirileriGetir = async (adres, anahtar) => {
  // 1. İnternetten veriyi çek
  const cevap = await fetch(`${adres}&apikey=${anahtar}`);
  const veri = await cevap.json();

  // 2. Eskiden yeniye sırala
  const gunler = veri.reverse();

  // 3. Her gün için getiriyi hesapla, sonuc listesine ekle
  const sonuc = [];
  for (let i = 1; i < gunler.length; i++) {
    const dun = gunler[i - 1].price;
    const bugun = gunler[i].price;
    const getiri = ((bugun - dun) / dun) * 100;
    sonuc.push({ tarih: gunler[i].date, fiyat: bugun, getiri: getiri });
  }

  return sonuc;
};

export const volatiliteHesapla = (getiriler) => {
  const ortalama = getiriler.reduce((t, g) => t + g, 0) / getiriler.length;
  const kareler = getiriler.map((g) => (g - ortalama) ** 2);
  const varyans = kareler.reduce((t, k) => t + k, 0) / (getiriler.length - 1);
  return Math.sqrt(varyans);
};