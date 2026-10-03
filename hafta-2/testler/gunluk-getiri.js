const calistir = async () => {
  try {
    const cevap = await fetch(
      "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=5&interval=daily",
    );
    const veri = await cevap.json();
    const fiyatlar = veri.prices.map((g) => g[1]);

    for (let i = 1; i < fiyatlar.length; i++) {
      const dun = fiyatlar[i - 1];
      const bugun = fiyatlar[i];
      const fark = ((bugun - dun) / dun) * 100;
      console.log(`${i}. gün: %${fark.toFixed(2)}`);
    }
  } catch (hata) {
    console.log("Veri çekilemedi:", hata.message);
  }
};

calistir();
