const araclar = [
  {
    type: "function",
    function: {
      name: "sonFiyatiGetir",
      description: "Bir hissenin son fiyatını getirir",
      parameters: {
        type: "object",
        properties: {
          sembol: { type: "string", description: "Hisse sembolü, örneğin AAPL" },
        },
        required: ["sembol"],
      },
    },
  },
];

const cevap = await fetch("http://localhost:11434/api/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    model: "llama3.2",
    stream: false,
    tools: araclar,
    messages: [{ role: "user", content: "AAPL'in son fiyatı ne?" }],
  }),
});

const veri = await cevap.json();
console.log(JSON.stringify(veri.message.tool_calls, null, 2));

// 1. Gerçek fonksiyon (şimdilik sabit fiyatlarla)
function sonFiyatiGetir(sembol: string) {
  const fiyatlar: Record<string, number> = { AAPL: 334.6, MSFT: 515.6 };
  return { sembol: sembol, fiyat: fiyatlar[sembol] };
}

// 2. Fişi oku, fonksiyonu çalıştır
const fis = veri.message.tool_calls[0];
const sonuc = sonFiyatiGetir(fis.function.arguments.sembol);

// 3. Sonucu modele geri ver
const cevap2 = await fetch("http://localhost:11434/api/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    model: "llama3.2",
    stream: false,
    tools: araclar,
    messages: [
      { role: "user", content: "AAPL'in son fiyatı ne?" },
      veri.message,
      { role: "tool", content: JSON.stringify(sonuc) },
    ],
  }),
});

const veri2 = await cevap2.json();
console.log(veri2.message.content);