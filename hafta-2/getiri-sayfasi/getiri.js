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
