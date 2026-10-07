// Günlük getiri hesaplayan program
process.loadEnvFile();
const API_ADRESI =
  "https://financialmodelingprep.com/stable/historical-price-eod/light?symbol=AAPL&from=2026-09-28&to=2026-10-07";
const API_ANAHTARI = process.env.FMP_ANAHTARI;

const calistir = async () => {
  try {
    // 1. İnternetten veriyi çek
    const cevap = await fetch(`${API_ADRESI}&apikey=${API_ANAHTARI}`);
    const veri = await cevap.json();
    // 2. Sadece fiyatları al (eskiden yeniye sırala)
    const fiyatlar = veri.map((g) => g.price).reverse();

    // 3. Her gün için getiriyi hesapla
    for (let i = 1; i < fiyatlar.length; i++) {
      const dun = fiyatlar[i - 1];
      const bugun = fiyatlar[i];
      const getiri = ((bugun - dun) / dun) * 100;
      console.log(`${i}. gün: %${getiri.toFixed(2)}`);
    }
  } catch (hata) {
    console.log("Veri çekilemedi:", hata.message);
  }
};

calistir();
