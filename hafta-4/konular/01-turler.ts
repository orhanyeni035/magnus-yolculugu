export{};


let hisseler: string []= ["AAPL", "MSFT", "GOOG"];
let adet : number = 10 ;
let karda : boolean =false;

function toplam (a: number, b: number ): number {
    return (a+b);
}
console.log(toplam (3,5));

type Hisse = {
    sembol : string ;
    fiyat : number ;
};
const MSFT: Hisse= { sembol:"MSFT", fiyat: 512.4};
console.log (MSFT);

function zamYap(h: Hisse): number {
    return   h.fiyat  +10 ;
}
console.log(zamYap(MSFT));

const portfoy: Hisse[] = [
    { sembol: "AAPL", fiyat: 333.69 },
    { sembol: "MSFT", fiyat: 512.4 },
    { sembol: "GOOG", fiyat: 251.3 },
];
const semboller = portfoy.map(h => h.sembol);
console.log(semboller);  

interface islem {
    sembol: string;
    adet  : number;
    alisMi : boolean;
}

const  AAPL:islem ={ sembol :"AAPL", adet: 5 , alisMi:true}
console.log (AAPL);

async function sembolGetir(): Promise<string> {
    return "AAPL";
}
const fiyat = await sembolGetir();
console.log(fiyat);

