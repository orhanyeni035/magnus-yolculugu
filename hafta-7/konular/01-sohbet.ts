const cevap = await fetch("http://localhost:11434/api/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    model: "llama3.2",
    stream: false,
    messages: [
      { role: "system", content: "Sen bir finans asistanısın. Kısa ve sade Türkçe cevap ver. Asla yatırım tavsiyesi verme." },
      { role: "user", content: "AAPL alayım mı?" },
    ],
  }),
});

const veri = await cevap.json();
console.log(veri.message.content);