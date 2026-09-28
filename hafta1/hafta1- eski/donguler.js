// FOR DÖNGÜSÜ

// for(let i = 0; i < 5; i++) {
//   console.log(i);
// }

// for (let i = 10; i > 5; i --) {     // 10'dan 5'e geri say
//   console.log(i);
// }

// for (let i = 0; i < 10; i += 2) {      // 0'dan 10'a kadar çift sayılar
//   console.log(i);
// }

// WHİLE DÖNGÜSÜ

// let  bakiye = 1000;
// while (bakiye > 0) {
//     bakiye -= 250;
//   console.log (bakiye);
// }

// DO... WHİLE

// let deneme = 0;
// do {
//   console.log("en az birkez çalışır ");
//   deneme++;
// } while (deneme < 2);

// for (let i = 1; i <= 10; i++) {
//   if (i === 9) break; // 5 e gelince durur
//   if (i % 2 === 0) continue; // Çift sayıları atlar
//   console.log(i);

// }

    // let yatirim = 100;
    // let yil = 0;

    // for (let i = 1; i <= 10; i++) {
    // yatirim = yatirim * 1.15;
    // console.log(`Yatırımınız ${i}. yılda ${yatirim} TL oldu`);
    // }
    // yatirim = 100;
    // while  (yatirim < 1000) {
    //     yatirim = yatirim * 1.15;
    //     yil++;
    //     console.log(`Yatırımınız ${yil}. yılda ${yatirim} TL oldu`);
    // }

    const baslangic = 86;
    const artis = 0.80;
    const esik = 95;


    let gun = 0;
    let fiyat = baslangic;
    
    while (fiyat < esik) {
        fiyat += artis;
        gun++;
    }
        console.log(`Gün: ${gun} Fiyat: ${fiyat.toFixed(2)}`);


    for (let sayi = 1; sayi <= 30; sayi++) {
       if (sayi % 3 !== 0) continue;
       console.log(sayi);
    }
