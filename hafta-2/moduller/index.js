import * as hesaplar from "./hesaplar.js";
import { yuzdeGetiri as getiriHesapla, KOMISYON_ORANI } from "./hesaplar.js";
import paraFormatla from "./formatla.js";
import { hisseler } from "./veri.js";

const hisse = hisseler[0];
const oncekiKapanis = 280;
const getiri = getiriHesapla(oncekiKapanis, hisse.fiyat);
console.log(`${hisse.kod} yüzde getirisi: %${getiri.toFixed(2)}`);

const toplamHacim = hisseler.reduce((toplam, hisse) => toplam + hisse.hacim, 0);
console.log("Toplam hacim:", toplamHacim);

const islemTutari = hisse.fiyat * 10;
const komisyon = islemTutari * KOMISYON_ORANI;
console.log("İşlem komisyonu:", paraFormatla(komisyon));
console.log(hesaplar.bilesikGetiri(1000, 0.15, 5));
