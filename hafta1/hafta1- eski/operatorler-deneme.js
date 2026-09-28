// HISSE-KAPANIS-FİYATI-ENKA
// DATE : 2026-9-22 
// 86.75   
// DATE : 2026-9-21  
// 86.30

const hisseAdi = "ENKA";
const islemHacmi = 2500000;

const oncekiKapanis =  86.30; 
const dunkuKapanis = 86.75;

const fark = dunkuKapanis - oncekiKapanis ;
console.log(fark);

const yuzdeGetiri = (fark / oncekiKapanis) * 100;
console.log(yuzdeGetiri);

const isUp =  oncekiKapanis < dunkuKapanis  ;
console.log(isUp);

const isDown =  oncekiKapanis > dunkuKapanis;
console.log(isDown);

console.log(isUp && isDown); 
console.log(isUp || isDown);
console.log(!isUp);

const isUpWight = isUp && islemHacmi > 1000000;
console.log(isUpWight);

const isDownWight = isDown && islemHacmi > 2000000;
console.log(isDownWight);

console.log(285 === "285");
console.log(285 == "285");


