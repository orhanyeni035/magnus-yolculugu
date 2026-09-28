let baslangicFiyati = 50;
let gunlukArtis = 1.5;

// 1) Her günü yazdır
console.log("--- Tüm günler ---");
for (let gun = 1; gun <= 10; gun++) {
    let fiyat = baslangicFiyati + (gun - 1) * gunlukArtis;
    console.log(gun + ". gün: " + fiyat.toFixed(2) + " TL");
}

// 2) Sadece çift günler (continue)
console.log("\n--- Sadece çift günler ---");
for (let gun = 1; gun <= 10; gun++) {
    if (gun % 2 !== 0) {
        continue; // tek günse bu turu atla, sonraki güne geç
    }
    let fiyat = baslangicFiyati + (gun - 1) * gunlukArtis;
    console.log(gun + ". gün: " + fiyat.toFixed(2) + " TL");
}

// 3) 60 TL'yi geçince dur (break)
console.log("\n--- 60 TL'yi geçince dur ---");
for (let gun = 1; gun <= 10; gun++) {
    let fiyat = baslangicFiyati + (gun - 1) * gunlukArtis;
    console.log(gun + ". gün: " + fiyat.toFixed(2) + " TL");

    if (fiyat > 60) {
        console.log("Fiyat 60 TL'yi geçti, döngü " + gun + ". günde durdu.");
        break; // döngüden tamamen çık
    }
}
