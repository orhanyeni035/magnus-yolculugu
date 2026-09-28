const gunSayisi =400

const yil = Math.floor (gunSayisi/365);
const kalanGun = gunSayisi % 365 ;
const ay = Math.floor ( kalanGun / 30);
const gun = kalanGun %30;
console.log (`${gunSayisi} gün = ${yil} yıl, ${ay} ay, ${gun} gün`);