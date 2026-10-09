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
];

function sonFiyatiGetir(sembol: string) {
  const fiyatlar: Record<string, number> = { AAPL: 334.6, MSFT: 515.6 };
  return { sembol: sembol, fiyat: fiyatlar[sembol] };
}

const mesajlar: any[] = [
  { role: "system", content: "Sen bir finans asistanısın. Kısa Türkçe cevap ver. Fiyatları sadece araçla öğren, asla uydurma." },
  { role: "user", content: "AAPL ile MSFT'nin son fiyatlarını karşılaştır." },
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
    const sonuc = sonFiyatiGetir(fis.function.arguments.sembol);
    mesajlar.push({ role: "tool", content: JSON.stringify(sonuc) });
  }
}

console.log("Cevap üretemedim, tur sınırı doldu.");