# 1. Hafta: Kendi cümlelerimle özet

## Değişkenler

**let ve const**

- **let:** İçeriği değiştirilebilen kutu
- **const:** İçeriği değiştirilemeyen kutu. "Constant" (sabit) demek

## Veri tipleri

**null ve undefined**

- **null:** Değerin programcı tarafından bilinçli olarak "boş" bırakılması
- **undefined:** Dil ve sistem tarafından otomatik olarak verilir, "değer atanmamış" anlamına gelir

## === ile == farkı nedir?

- **==** gerekirse türü dönüştürür. Tırnak içindeki sayılar metin olduğu halde `7 == "7"` true çıkar
- **===** katı eşitlik karşılaştırmasıdır. Hem değerler hem türler aynı olmalı, yoksa false çıkar
- **==** gerekirse tür dönüştürür, **===** dönüştürmez. Bu yüzden her zaman === kullanılır

## if, else, switch

- **if:** En temel karardır. Bir koşulu kontrol eder, doğruysa süslü parantezin içindeki kod çalışır
- **else:** if koşulu doğru değilse çalışacak kodu verir
- **switch:** Birden fazla if / else if / else bloğu yazmak yerine daha düzenli ve okunabilir bir alternatif sunar
- switch'te `break` unutulursa bir sonraki case'in kodu da çalışır
- **break** döngüyü kırar. **continue** o turu atlar, döngünün bir sonraki turuna geçer

## for ve while

- **for:** Tekrar sayısını, yani döngünün kaç kez döneceğini önceden bildiğimiz durumlarda tercih edilir.
  Örnek: bir dizinin elemanlarını sırayla gezmek
- **while:** Tekrar sayısının önceden belli olmadığı, döngünün sadece bir koşula bağlı olarak dönmesi gereken durumlarda kullanılır.
  Örnek: kullanıcı "çıkış" tuşuna basana kadar ya da rastgele bir sayı 5 gelene kadar dönmek

## Sorular

**Sonsuz döngü nasıl oluşur, nasıl kaçınırsın?**
Koşul true kaldığı sürece döngü durmaz. Kaçınmak için döngüde koşulu değiştiren bir adım bulunmalı.

**Döngü içinde tanımlanan değişken neden dışarıda kullanılamaz?**
let veya const ile bir değişkeni döngünün içinde oluşturursan, onu sadece döngünün içinde kullanabilirsin. Döngünün dışında da kullanmak istiyorsan, değişkeni döngüden önce oluştur.

**Yüzde getiri neden sadece farktan daha kullanışlı?**
Yüzde getiri, kazanç veya kaybı başlangıçtaki paraya göre gösterir. Sadece farkı görmek yanıltıcı olabilir, çünkü aynı miktardaki kazanç başlangıçta yatırılan paraya göre küçük ya da büyük olabilir.
