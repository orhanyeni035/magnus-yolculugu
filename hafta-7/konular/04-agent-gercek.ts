const araclar = [
  {
    type: "function",
    function: {
      name: "sonFiyatiGetir",
      description: "Bir hissenin son fiyatını getirir",
      parameters: {
        type: "object",
        properties: { sembol: { type: "string", description: "Hisse sembolü, örneğin AAPL" } },
        required: ["sembol"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "riskHesapla",
      description: "Bir hissenin volatilitesini (riskini) hesaplar",
      parameters: {
        type: "object",
        properties: { sembol: { type: "string", description: "Hisse sembolü, örneğin AAPL" } },
        required: ["sembol"],
      },
    },
  },
];

async function araciCalistir(ad: string, sembol: string) {
  if (ad === "sonFiyatiGetir") {
    const c = await fetch("http://localhost:3000/son-fiyat/" + sembol);
    return await c.json();
  }
  if (ad === "riskHesapla") {
    const c = await fetch("http://localhost:3000/risk/" + sembol);
    return await c.json();
  }
  return { hata: "Böyle bir araç yok" };
}

const mesajlar: any[] = [
  { role: "system", content: "Sen bir finans asistanısın. Kısa Türkçe cevap ver. Fiyat sorulursa sonFiyatiGetir aracını, risk sorulursa riskHesapla aracını MUTLAKA çağır. Bir aracı çağırmadan o bilgiyi asla söyleme. Yatırım tavsiyesi verme." },
  { role: "user", content: "AAPL'in son fiyatı ve riski ne?" },
];

for (let tur = 1; tur <= 5; tur++) {
  const cevap = await fetch("http://localhost:11434/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ model: "llama3.2", stream: false, tools: araclar, messages: mesajlar }),
  });
  const veri = await cevap.json();
  mesajlar.push(veri.message);

  const fisler = veri.message.tool_calls;
  if (!fisler || fisler.length === 0) {
    console.log("CEVAP:", veri.message.content);
    process.exit(0);
  }

  for (const fis of fisler) {
    console.log("Tur " + tur + ":", fis.function.name, JSON.stringify(fis.function.arguments));
    const sonuc = await araciCalistir(fis.function.name, fis.function.arguments.sembol);
    mesajlar.push({ role: "tool", content: JSON.stringify(sonuc) });
  }
}

console.log("Cevap üretemedim, tur sınırı doldu.");