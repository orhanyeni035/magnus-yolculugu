// 18. ADIM — Callback, Promise, async/await

// 1) Senkron / asenkron sırası
// Çıktı: 1, 3, 2
// setTimeout'un süresi "en erken şu kadar sonra" demek.
// Senkron satırlar bitmeden kuyruğa hiç bakılmaz.
console.log("1");
setTimeout(() => console.log("2"), 0);
console.log("3");

// 2) Callback — sonucu geri vermenin eski yolu
function fiyatCekCallback(kod, callback) {
  setTimeout(() => {
    callback(285.5);
  }, 1000);
}

fiyatCekCallback("THYAO", (fiyat) => {
  console.log("Callback:", fiyat);
});

// 3) Promise — resolve başarı, reject hata
function fiyatCek(kod) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (kod === "THYAO") {
        resolve(380.5);
      } else {
        reject(new Error("Hisse bulunamadı"));
      }
    }, 1000);
  });
}

// 4) .then() / .catch()
fiyatCek("THYAO")
  .then((fiyat) => console.log(".then():", fiyat))
  .catch((hata) => console.log(".catch():", hata.message));

fiyatCek("XYZ")
  .then((fiyat) => console.log(".then():", fiyat))
  .catch((hata) => console.log(".catch():", hata.message));

// 5) async / await — aynı iş, okunaklı yazım
// await sadece async fonksiyon içinde kullanılır.
// Hata yakalamak için .catch() yerine try/catch kullanılır.
async function calistir() {
  try {
    const fiyat = await fiyatCek("THYAO");
    console.log("await:", fiyat);
  } catch (hata) {
    console.log("await hata:", hata.message);
  }

  try {
    const fiyat = await fiyatCek("XYZ");
    console.log("await:", fiyat);
  } catch (hata) {
    console.log("await hata:", hata.message);
  }
}

calistir();

// ============================================
// SENİN YAZACAKLARIN
// ============================================

// 6) SIRALI çekme — üçünü tek tek bekle, süreyi ölç
async function sirali() {
  const baslangic = Date.now();

  // BURAYA: üç kez "await fiyatCek("THYAO")" yaz,
  //         her sonucu ayrı bir değişkene koy

  console.log("Sıralı süre (ms):", Date.now() - baslangic);
}

// 7) PARALEL çekme — üçünü aynı anda başlat, süreyi ölç
async function paralel() {
  const baslangic = Date.now();

  // BURAYA: Promise.all kullan
  // Kalıp: const [a, b, c] = await Promise.all([ ... , ... , ... ]);

  console.log("Paralel süre (ms):", Date.now() - baslangic);
}

// 8) BURAYA: önce sirali(), sonra paralel() fonksiyonunu çağır.
//    Aradaki süre farkını gör.
