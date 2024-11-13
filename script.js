var ad = prompt ("Adınızı Giriniz : ");
var ogrno = prompt (" Öğrenci no : ");
var cinsiyet = prompt("cinsiyet : "); // erkek : true - kadın : false
var ders = prompt ("Ders adı : ");
var not1 = prompt ("Not 1 : ");
var not2 = prompt ("Not 2 :");
var ortalama = (Number(not1) + Number(not2))/2;





console.log(ogrno + " numaralı " + ad +" ("+cinsiyet+") " +   "isimli öğrencinin " + ders + 
    " dersinden aldığı ortalama notu " + ortalama );
