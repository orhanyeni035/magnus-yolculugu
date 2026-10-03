# 1. Hafta Notları: JavaScript'e giriş

28 Eylül – 1 Ekim 2026. Adım 4–11.

---

## 1. Terminal, Node.js ve Git (Adım 4–6)

Bir dosyayı çalıştırmak:

```bash
node dosya-adi.js
```

Sık kullanılan terminal komutları:

| Komut | Ne yapar? |
|---|---|
| `pwd` | Şu an hangi klasördeyim? |
| `ls` | Bu klasörde ne var? |
| `cd klasor` | Klasöre gir |
| `cd ..` | Bir üst klasöre çık |
| `mkdir klasor` | Yeni klasör aç |
| `Control + C` | Çalışan programı durdur |

Git ile kaydetme ve GitHub'a gönderme:

```bash
git add .
git commit -m "Ne yaptığımı anlatan kısa mesaj"
git push
```

---

## 2. Değişkenler (Adım 7)

Değişken, bir bilgiyi saklamak için kullandığın **etiketli bir kutu**. Kutuya bir isim verirsin, içine bir değer koyarsın.

- **`let`** → içeriği değiştirilebilen kutu
- **`const`** → içeriği bir kez konduktan sonra değiştirilemeyen kutu ("constant" = sabit)

```js
let fiyat = 285;
fiyat = 300;            // olur, let değişebilir

const hisseAdi = "THYAO";
hisseAdi = "ASELS";     // HATA: Assignment to constant variable
```

**Kural:** Değeri hiç değişmeyecekse `const`. Döngüde değişecekse (sayaç, toplam, para) `let`.

İsim kuralları:
- Türkçe karakter kullanma: `hisseAdi`, `hisseAdı` değil
- İki kelimeyi birleştirirken ikincinin baş harfi büyük: `sonFiyat`
- Boolean değişkenler `is` ile başlar: `isUp`, `isActive`
- JavaScript'in kendi isimlerini kullanma (`Number`, `String` gibi)

---

## 3. Veri tipleri (Adım 8)

| Tip | Örnek | Açıklama |
|---|---|---|
| `number` | `285.75`, `100` | Tam ve ondalıklı sayı aynı tip. Ondalık ayracı **nokta** |
| `string` | `"THYAO"` | Tırnak içindeki her şey, içinde rakam olsa bile |
| `boolean` | `true`, `false` | Evet / hayır. Tırnaksız yazılır |
| `undefined` | `let x;` | Kutu açıldı ama içine bir şey konmadı (sistem verir) |
| `null` | `let x = null;` | "Bilerek boş bıraktım" (programcı verir) |

**En önemli kural: tırnak = metin.** `5` sayıdır, `"5"` metindir.

### typeof

```js
typeof 42          // "number"
typeof "42"        // "string"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof null        // "object"  ← JavaScript'in eski bir hatası, mülakatta sorulur
```

### Template literal (ters tırnak)

```js
const hisse = "THYAO";
const fiyat = 285;
console.log(`${hisse} fiyatı: ${fiyat} TL`);   // THYAO fiyatı: 285 TL
```

### `+` ve `*` farkı

`+` iki iş yapar: sayıları **toplar**, metinleri **yan yana ekler**. Bir tarafta metin görürse yan yana ekler.
`*` tek iş yapar: **çarpar**. Metni görünce sayıya çevirir.

```js
"285.5" * 10    // 2855       (number)
"285.5" + 10    // "285.510"  (string)
"5" * "2"       // 10
"5" + "2"       // "52"
```

Metni sayıya çevirmek: `Number("50")` → `50`

---

## 4. Operatörler (Adım 9)

### Aritmetik

| Operatör | Anlamı | Örnek | Sonuç |
|---|---|---|---|
| `+` | toplama | `10 + 3` | 13 |
| `-` | çıkarma | `10 - 3` | 7 |
| `*` | çarpma | `10 * 3` | 30 |
| `/` | bölme | `10 / 3` | 3.333... |
| `%` | kalan (mod) | `10 % 3` | 1 |
| `**` | üs alma | `2 ** 3` | 8 (2 × 2 × 2) |

- `%` en çok çift/tek kontrolünde kullanılır: `sayi % 2 === 0` ise sayı çifttir
- `2 * 3 = 6` ama `2 ** 3 = 8`

**İşlem sırası:** önce parantez, sonra `**`, sonra `*` `/` `%`, en son `+` `-`.

```js
2 + 3 * 4      // 14
(2 + 3) * 4    // 20
4 * 2 ** 2 + 1 // 17  (önce 2**2=4, sonra 4*4=16, sonra +1)
```

Kısa yazımlar:

```js
adet++;      // bir artır
adet--;      // bir azalt
adet += 10;  // adet = adet + 10
adet *= 2;   // adet = adet * 2
```

### Karşılaştırma

Sonuç her zaman `true` ya da `false`.

| Operatör | Anlamı |
|---|---|
| `===` | eşit mi? (değer **ve** tip) |
| `!==` | eşit değil mi? |
| `>` `<` | büyük / küçük mü? |
| `>=` `<=` | büyük veya eşit / küçük veya eşit mi? |

```js
7 === "7"     // false  (number ile string)
true === "true" // false (boolean ile string)
8 > 8         // false
8 >= 8        // true
```

`==` tipi görmezden gelir ve gizlice çevirir (`7 == "7"` → true). **Her zaman `===` ve `!==` kullan.**

### Mantıksal

| Operatör | Anlamı | Ne zaman `true`? |
|---|---|---|
| `&&` | VE | **İkisi de** true ise (bilet **ve** kimlik) |
| `\|\|` | VEYA | **En az biri** true ise (nakit **veya** kart) |
| `!` | DEĞİL | Tersine çevirir (ışık düğmesi) |

```js
true && false     // false
false || true     // true
false || false    // false
!true             // false
!(2 > 1)          // false  (önce 2>1 = true, sonra çevir)
!(5 !== "5")      // false  (5 !== "5" = true, çevirince false)
```

Çok adımlı ifadelerde yöntem: **sadeleştir → çevir → birleştir.** Her adımı kâğıda yaz.

### Finansta kullanım

```js
const fark = sonKapanis - oncekiKapanis;
const yuzdeGetiri = (fark / oncekiKapanis) * 100;
```

Fark tek başına yanıltıcıdır. 10 TL'lik artış 100 TL'lik hissede %10, 1000 TL'lik hissede %1'dir.

Ondalık sayılarda küçük sapmalar olur: `86.75 - 86.30` → `0.4500000000000028`. Bu hata değildir. Göstermek için `.toFixed(2)` kullanılır, ama sonucu **metin** olarak verir.

---

## 5. Koşullar (Adım 10)

### if / else

```js
if (fiyat > 100) {
  console.log("Fiyat yüksek");
} else {
  console.log("Fiyat normal");
}
```

- `else` koşul almaz, "geri kalan her durum" demektir
- Tek satır olsa bile her zaman süslü parantez `{ }` kullan

### else if zinciri: koridor

```js
if (bugun > dun) {
  console.log("Yükseldi");
} else if (bugun < dun) {
  console.log("Düştü");
} else {
  console.log("Değişmedi");
}
```

Koridor gibi: **ilk açık kapıdan girersin ve çıkarsın.** En fazla bir blok çalışır. Bu yüzden sıralama önemlidir: `>= 70` kontrolü `>= 90`'dan önce gelirse 95 puan "İyi" olur, "Süper" kapısına hiç gelinmez.

### Ayrı if'ler: kontrol noktaları

```js
if (fiyat > 10) { console.log("X"); }
if (fiyat > 20) { console.log("Y"); }   // fiyat 50 ise ikisi de çalışır
```

Aralarında `else` yoksa her biri ayrı ayrı kontrol edilir.

### switch: merdiven

```js
switch (sinyal) {
  case "al":
    console.log("Alım");
    break;
  case "sat":
    console.log("Satış");
    break;
  default:
    console.log("Bilinmeyen sinyal");
}
```

- Eşleşen basamaktan inmeye başlar, ilk `break`'te çıkar
- `break` yazmazsan alttaki case'ler de çalışır
- `default` hiçbiri tutmazsa çalışır (else gibi)
- Arka planda `===` kullanır: `1` ile `"1"` eşleşmez. `"açık"` ile `"AÇIK"` da eşleşmez

Ne zaman hangisi?
- Aralık ve karşılaştırma (`>`, `<`, `&&`) → `if / else if`
- Tek değer, sabit seçenekler (`"al"`, `"sat"`) → `switch`

### Ternary (kısa if)

```js
const durum = fiyat > 80 ? "Yüksek" : "Düşük";
```

Okunuşu: koşul doğruysa `?`'den sonraki, değilse `:`'dan sonraki. İç içe kullanma, okunmaz olur.

---

## 6. Döngüler (Adım 11)

### for

Kaç tur döneceğini **biliyorsan**.

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
//   başlangıç   şart    adım
```

Geri sayım: `for (let i = 10; i >= 1; i--)`

Listeyi dolaşmak (liste 0'dan başlar, son eleman `length - 1`):

```js
for (let i = 0; i < fiyatlar.length; i++) {
  console.log(fiyatlar[i]);
}
```

### while

Bir **şart** gerçekleşene kadar.

```js
let para = 1000;
let ay = 0;
while (para < 2000) {
  para = para * 1.1;
  ay++;
}
console.log(`${ay} ayda 2000'i geçti`);   // 8
```

**Sonsuz döngü:** şartı değiştiren adımı unutursan döngü hiç bitmez. Durdurmak için terminalde **Control + C**.

### break ve continue

- `break` → döngüden **tamamen çık** ("yeter, eve gidiyorum")
- `continue` → bu turu **atla**, sonrakine geç ("bunu geç, sıradakine bak")

### İki temel kalıp

**Kova (toplayıcı):** kova döngünün dışında başlar, içinde dolar, sonuç dışarıda yazdırılır.

```js
let toplam = 0;
for (let i = 0; i < fiyatlar.length; i++) {
  toplam += fiyatlar[i];
}
const ortalama = toplam / fiyatlar.length;
```

**Şampiyon:** ilk eleman şimdilik şampiyon, daha büyüğü gelirse yerini alır.

```js
let enYuksek = fiyatlar[0];
for (let i = 1; i < fiyatlar.length; i++) {
  if (fiyatlar[i] > enYuksek) {
    enYuksek = fiyatlar[i];
  }
}
```

Döngünün içinde `let` ile açılan değişken dışarıda kullanılamaz. Dışarıda lazımsa döngüden önce aç.

---

## 7. Ek konular

```js
Math.floor(3.7)   // 3   aşağı yuvarlar
Math.ceil(3.2)    // 4   yukarı yuvarlar
Math.round(3.5)   // 4   en yakına yuvarlar
Math.max(4, 9, 2) // 9
Math.min(4, 9, 2) // 2

console.log("Birinci satır\nİkinci satır");   // \n = yeni satır
```

---

## En sık görülen hata mesajları

| Hata | Anlamı |
|---|---|
| `SyntaxError` | Yazım hatası: parantez, tırnak, virgül eksik |
| `ReferenceError: x is not defined` | Bu ismi tanımıyorum (yazım hatası mı? `let`/`const` unuttun mu?) |
| `has already been declared` | Bu isim zaten var |
| `TypeError: Assignment to constant variable` | `const`'a yeni değer atadın |
| `NaN` | Sayı olmayan bir hesap sonucu ("Not a Number") |

---

## Haftanın projesi

5 günlük kapanış fiyatlarından **ortalama, en yüksek ve en düşük** fiyatı tek döngüde bulan program. Bkz. `testler/` ve `denemeler/isinma-2ekim.js`.
