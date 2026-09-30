let aylikBirikim = 500;     
let getiriOrani = 0.02;     
let hedef = 50000;

let birikim = 0;
let ay = 0;

while (birikim <= hedef) {
    ay++;                                   
    birikim = birikim + aylikBirikim;       
    birikim = birikim * (1 + getiriOrani);  
}

console.log("Hedef " + ay + ". ayda geçildi.");
console.log("Birikim: " + birikim.toFixed(2) + " TL");


let yil = Math.floor(ay / 12);  
let kalanAy = ay % 12;          

console.log("Süre: " + yil + " yıl " + kalanAy + " ay");


let yatirilan = ay * aylikBirikim;
console.log("Cebinden çıkan: " + yatirilan + " TL");
console.log("Getiriden gelen: " + (birikim - yatirilan).toFixed(2) + " TL");