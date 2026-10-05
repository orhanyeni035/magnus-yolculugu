const EventEmitter = require("events");
const zil = new EventEmitter();

zil.on("caldi", () => {
  console.log("Kapıya bakıyorum");
});

zil.emit("caldi");
zil.emit("caldi");

const borsa = new EventEmitter();


borsa.on("yeniFiyat", (fiyat) => {
  console.log("Yeni fiyat geldi:", fiyat);
});

borsa.on("yeniFiyat", (fiyat) => {
  if (fiyat > 334) {
    console.log("UYARI: Fiyat 334'ü geçti");
  }
});


borsa.emit("yeniFiyat", 333.69);
borsa.emit("yeniFiyat", 335.10);


