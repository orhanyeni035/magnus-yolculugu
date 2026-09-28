const hisseAdi = "ENKA";
const fiyat = 86.8;
const islemHacmi = 2500000;

const oncekiKapanis = 86.3;
const dunkuKapanis = 84;

const yuzdeGetiri = ((dunkuKapanis - oncekiKapanis) / oncekiKapanis) * 100;
console.log(yuzdeGetiri);

if (fiyat > 80) {
  console.log("Fiyat 80 in üzrinde");
} else {
  console.log("Fiyat 80 in altında");
}

if (yuzdeGetiri > 2) {
  console.log("güçlü yükseliş");
} else if (yuzdeGetiri > 0) {
  console.log("yükseliş");
} else if (yuzdeGetiri === 0) {
  console.log("değişim yok");
} else if (yuzdeGetiri < 0 && yuzdeGetiri > -2) {
  console.log("düşüş");
} else {
  console.log("ciddi düşüş");
}

if (yuzdeGetiri > 0) {
  if (islemHacmi > 1000000) {
    console.log("yüksek işlem hacmiyle yükseliş");
  } else {
    console.log("düşük işlem hacmiyle yükseliş");
  }
}

const emirtipi = "LIMIT";
switch (emirtipi) {
  case "MARKET":
    console.log("Market emri");
    break;
  case "LIMIT":
    console.log("Limit emri");
    break;
  case "STOP":
    console.log("Stop emri");
    break;
  case "STOP-LIMIT":
    console.log("Stop-Limit emri");
    break;
  default:
    console.log("Bilinmeyen emir tipi");
}

const sonuc = yuzdeGetiri > 0 ? "artı" : "eksi";
console.log(sonuc);
