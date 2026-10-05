// console.log("Node sürümü:", process.version);
// console.log("Bu dosyanın yeri:", __filename);

// console.log("1");
// setTimeout(() => console.log("2"), 0);
// console.log("3");

// console.log("A");
// setTimeout(() => console.log("B"), 0);
// setTimeout(() => console.log("C"), 0);
// console.log("D");

console.log("Başladı");

setTimeout(() => console.log("Zamanlayıcı"), 0);

const baslangic = Date.now();
while (Date.now() - baslangic < 3000) {
  // 3 saniye boyunca hiçbir şey yapmadan dön
}

console.log("Uzun iş bitti");