const EventEmitter = require("events");
const mutfak = new EventEmitter();

function asci(yemek) {
  console.log("Aşçı:", yemek);
}

function tatlici(yemek) {
  if (yemek === "baklava") {
    console.log("Tatlıcı: ben yaparım");
  }
}
function icecekci(icecek) {
  if (icecek === "ayran") {
    console.log("içecekci: ben getiririm");
  }
}

mutfak.on("siparis", asci);
mutfak.on("siparis", tatlici);
mutfak.on("siparis",icecekci)

mutfak.emit("siparis", "baklava" );
mutfak.emit("siparis", "ayran");
