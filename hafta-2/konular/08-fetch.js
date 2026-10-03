const calistir = async () => {
  try {
    const cevap = await fetch(
      "https://api.coinbase.com/v2/prices/BTC-USD/spot",
    );
    const veri = await cevap.json();
    const price = Number(veri.data.amount);
    console.log(price * 0.5);
  } catch (error) {
    console.error("Veri çekilemedi:", error.message);
  }
};

calistir();
