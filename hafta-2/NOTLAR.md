# 2. Hafta Notları: JavaScript'in çekirdeği

1–3 Ekim 2026. Adım 12–19.

---

## 1. Fonksiyonlar (Adım 12)

Fonksiyon, bir kodu bir kere yazıp ona **isim vermek**. Sonra o ismi istediğin kadar çağırırsın. Çay makinesi gibi: içine bir şey koyarsın (parametre), sana bir sonuç verir (`return`).

```js
function selamVer(isim) {     // isim = parametre (boş kutu)
  return "Merhaba " + isim;   // sonucu geri ver
}

selamVer("Orhan");            // "Orhan" = parametreye verilen değer
```

### return ile console.log farkı

- `console.log` sonucu **ekrana yazar**, iş biter
- `return` sonucu çağıran yere **geri verir**. Onu bir değişkende saklayabilir, başka hesapta kullanabilirsin

```js
const sonuc = topla(5, 3);       // 8
const ikiKat = topla(5, 3) * 2;  // 16
```

Fonksiyonu çalıştırmak için parantez şart: `ortalamaBul` fonksiyonun kendisi, `ortalamaBul([1, 2])` onun sonucu.

### Varsayılan parametre

```js
function komisyonHesapla(tutar, oran = 0.02) {
  return tutar * oran;
}
komisyonHesapla(10000);         // 200  (varsayılan oran)
komisyonHesapla(10000, 0.005);  // 50
```

### Ok fonksiyonları (arrow functions)

```js
// Klasik
function ikiKati(sayi) {
  return sayi * 2;
}

// Ok fonksiyonu
const ikiKati = (sayi) => {
  return sayi * 2;
};

// Tek satırsa: süslü parantez ve return düşer
const ikiKati = (sayi) => sayi * 2;
```

Ok fonksiyonunun kendi adı yoktur, o yüzden bir `const` kutusuna konur. Kısa hâli sadece tek satırlık işlerde kullanılır. İçinde döngü varsa süslü parantez ve `return` şart.

Fonksiyonun adını içeride değişken gibi kullanma: fonksiyonu ezersin.

---

## 2. Diziler (listeler)

```js
const fiyatlar = [100, 103, 106, 105, 104];

fiyatlar[0]                     // 100 → sıra numarası 0'dan başlar
fiyatlar[4]                     // 104
fiyatlar[5]                     // undefined
fiyatlar.length                 // 5
fiyatlar[fiyatlar.length - 1]   // son eleman

fiyatlar.push(108);   // sona ekle
fiyatlar.pop();       // sondakini çıkar
```

`const` ile tanımlanmış dizinin içi değiştirilebilir (`push` çalışır), ama dizinin kendisi başka bir diziyle değiştirilemez.

Döngüde `i < fiyatlar.length` kullanılır, `<=` değil. Yoksa son turda `undefined` gelir.

```js
for (const fiyat of fiyatlar) {   // sıra numarası lazım değilse
  console.log(fiyat);
}
```

---

## 3. Dizi metotları (Adım 13)

| Metot | Ne yapar? | Sonuç |
|---|---|---|
| `map` | her elemanı **değiştirir** | yeni liste, aynı uzunluk |
| `filter` | şarta uyanları **seçer** | yeni liste, kısalabilir |
| `find` | uyan **ilk** elemanı bulur | tek değer ya da `undefined` |
| `sort` | **sıralar** | aynı liste, sıralı |
| `reduce` | **tek değere** indirger | tek değer |

```js
const fiyatlar = [42, 47, 39, 51, 46];

fiyatlar.map((f) => f + 10);          // [52, 57, 49, 61, 56]
fiyatlar.filter((f) => f > 45);       // [47, 51, 46]
fiyatlar.find((f) => f > 50);         // 51
fiyatlar.find((f) => f > 100);        // undefined
fiyatlar.sort((a, b) => a - b);       // küçükten büyüğe
fiyatlar.sort((a, b) => b - a);       // büyükten küçüğe
fiyatlar.reduce((kova, f) => kova + f, 0);   // 225
```

Akılda kalsın:
- `map` = **değiştir**, `filter` = **seç**
- `a - b` alfabe sırası (a, b) → küçükten büyüğe. `b - a` ters → büyükten küçüğe
- `sort()`'u parantezsiz kullanma: sayıları metin gibi sıralar (`[10, 100, 9]`)
- `reduce` kova kalıbının kısa hâli. Sondaki `0` kovanın başlangıç değeri
- Zincirleme: `fiyatlar.map(...).reduce(...)` önce soldaki çalışır, sonucu sağdakine geçer

En büyük / en küçük için hazır araç (şampiyon döngüsünün kısayolu):

```js
Math.max(...fiyatlar)   // 51
Math.min(...fiyatlar)   // 39
```

---

## 4. Nesneler (Adım 14)

Birbiriyle ilgili bilgileri bir arada tutar. Kimlik kartı gibi: her bilginin bir **anahtarı** (etiket) ve **değeri** var.

```js
const hisse = { isim: "THYAO", fiyat: 280, adet: 1000 };

hisse.isim                    // "THYAO"
hisse.fiyat * hisse.adet      // 280000
hisse.sektor = "Ulaştırma";   // yeni anahtar ekle
```

### Nesne listesi

Gerçek veri hep böyle gelir.

```js
const gunler = [
  { tarih: "2026-10-01", kapanis: 42 },
  { tarih: "2026-10-02", kapanis: 47 },
  { tarih: "2026-10-03", kapanis: 39 },
];

gunler[1].kapanis                                  // 47
gunler.map((g) => g.kapanis)                       // [42, 47, 39]
gunler.filter((g) => g.kapanis > 40)               // ilk iki gün
gunler.sort((a, b) => b.kapanis - a.kapanis)[0].tarih   // "2026-10-02"
```

---

## 5. Destructuring ve spread (Adım 15)

Destructuring, nesneden bilgileri tek satırda çıkarır. Süslü paranteze **anahtar adları** yazılır, değerler değil.

```js
const hisse = { isim: "THYAO", fiyat: 280 };
const { isim, fiyat } = hisse;
```

Spread (`...`) bir listenin içini döker:

```js
const sabah = [100, 102];
const aksam = [105, 103];
const hepsi = [...sabah, ...aksam];   // [100, 102, 105, 103]
```

---

## 6. Modüller: import / export (Adım 16)

Kodu birden fazla dosyaya bölmek.

```js
// hesap.js
export const ortalamaBul = (liste) => {
  const toplam = liste.reduce((k, x) => k + x, 0);
  return toplam / liste.length;
};
export const enYuksekBul = (liste) => Math.max(...liste);
```

```js
// ana.js
import { ortalamaBul, enYuksekBul } from "./hesap.js";
console.log(ortalamaBul([40, 50, 60]), enYuksekBul([40, 50, 60]));   // 50 60
```

- `export` → dışarıya ver, `import` → buraya al
- Tek import satırına istediğin kadar isim virgülle yazılır
- Aynı klasörde `package.json` içinde `{ "type": "module" }` olmalı
- `console.log` virgülle birden fazla değer alır ve aralarına boşluk koyar

---

## 7. Hata yönetimi: try, catch, throw (Adım 17)

Normalde bir hata olunca program durur. `try / catch` hatayı yakalar, program devam eder.

```js
try {
  if (fiyat < 0) {
    throw new Error("Fiyat eksi olamaz!");   // hatayı sen fırlatırsın
  }
  console.log("Fiyat:", fiyat);
} catch (hata) {
  console.log("Sorun:", hata.message);       // hatanın açıklaması
}
```

- `try` = dene, `catch` = yakala, `throw` = fırlat
- Hata yoksa sadece `try` çalışır. Hata olunca kod direkt `catch`'e atlar
- `catch` tek başına olmaz, önünde mutlaka `try` olur

---

## 8. Asenkron kod (Adım 18)

Bazı işler zaman alır (internetten veri çekmek gibi). JavaScript bu işleri beklemeden sonraki satıra geçer.

```js
console.log("1. Başladı");
setTimeout(() => console.log("2. Veri geldi"), 2000);   // 2000 ms = 2 saniye
console.log("3. Bitti");
// Çıktı sırası: 1, 3, 2
```

Çay gibi: demliğe koyarsın, ayakta beklemezsin, bu arada başka iş yaparsın.

- **Callback:** "iş bitince bunu çağır" diye verilen fonksiyon (yukarıdaki `() => ...`)
- **Promise:** "sonuç gelecek, söz veriyorum". Restorandaki sipariş fişi gibi. `resolve` = söz tutuldu, `reject` = tutulamadı
- **async / await:** sözün tutulmasını okunaklı şekilde beklemek

```js
const calistir = async () => {
  const fiyat = await fiyatGetir();   // gelene kadar bekle
  console.log("Fiyat geldi:", fiyat);
};
calistir();
```

- `await` kullanılan fonksiyonun başına `async` yazılır
- Fonksiyonun içinde açılan değişkenler dışarıda yoktur
- İki `await` arka arkaya sırayla bekler (2 + 2 = 4 saniye)

---

## 9. fetch ve API (Adım 19)

```js
const calistir = async () => {
  try {
    const cevap = await fetch("https://api.coinbase.com/v2/prices/BTC-USD/spot");
    const veri = await cevap.json();               // cevabı okunur hâle getir
    const fiyat = Number(veri.data.amount);        // metin geliyor, sayıya çevir
    console.log(fiyat * 0.5);
  } catch (hata) {
    console.log("Veri çekilemedi:", hata.message);
  }
};
calistir();
```

- Önce gelen verinin şekline bak (`console.log(veri)`), sonra içinden istediğini al
- İç içe nesneye noktalarla girilir: `veri.data.amount`
- Liste içinde liste gelirse: `veri.prices.map((g) => g[1])`
- Uzun listenin sadece başını görmek: `veri.slice(0, 3)`

### API anahtarı

- Siteye üye olunca verilen kişisel kod. Adresin sonuna `&apikey=...` diye eklenir
- **Kimseyle paylaşma, GitHub'a yükleme.** 3. haftada `.env` dosyasına taşınacak
- Adres ve anahtar sadece bir yerde olmalı. İki kez `apikey` yazılırsa site "Invalid API KEY" der
- Hangi adresin ne verdiğini sitenin **dokümantasyonundan** (Docs / Belgeler) bulursun: "Uç nokta" kopyalanacak adres, "Cevap" gelecek verinin örneği
- Ücretsiz planlarda günlük istek sınırı olur (Financial Modeling Prep: günde 250). Gelen gün sayısı değil, kodu kaç kere çalıştırdığın sayılır

---

## Günlük getiri

```
getiri = (bugün - dün) / dün * 100
```

1. Fark: fiyat kaç lira değişti
2. Oran: bu fark dünkü fiyatın ne kadarı
3. Yüzde: oranı 100 ile çarp

Döngüde bir önceki güne `fiyatlar[i - 1]` ile ulaşılır, döngü `i = 1`'den başlar (ilk günün dünü yok).

---

## Yeni hata mesajları

| Hata | Anlamı |
|---|---|
| `x is not a function` | Fonksiyon olmayan bir şeyi çağırdın (örn. liste olmayan şeye `map`) |
| `Cannot read properties of undefined` | `undefined`'ın içine bakmaya çalıştın (örn. `find` bir şey bulamadı) |
| `Cannot access 'x' before initialization` | Değişkeni oluşturmadan önce kullandın |
| `fetch failed` | İnternet ya da adres sorunu |
| `[Function: x]` çıktısı | Fonksiyonu çağırmadın, parantez unutuldu |

---

## Haftanın projesi

İnternetten fiyat verisi çekip günlük getirileri hesaplayan program. Bkz. `testler/` ve `getiri-sayfasi/`.
