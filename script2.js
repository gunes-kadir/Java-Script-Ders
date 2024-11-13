// Matematiksel Operatörler

var x = 10;
var y = 20;
var z = 10;

console.log(x+y);
console.log(x-y);
console.log(x/y);
console.log(x*y);
console.log(x*y+z);
console.log(x*(y+z));

x++; // x=x+1 demek
x--; // x=x-1 demek

console.log(x);


// Karşılaştırma Operatörleri

var sonuc = x>y;
console.log(sonuc);

console.log(x<y);
console.log(x>=z);
console.log(x==z); // eşittir ifadesi için çift eşit kullanılıyor
console.log(x=="10");
console.log(x==="10"); // üç eşittirde önce tipleri eşit mi diye bakar.
console.log(x!=z); // != eşit değil mi sorusu


// Mantıksal Operatörler

console.log((20>10) && (30>20)); // true - ikisi de doğru olursa true
console.log((20>10) && (20>=30)); // false - bir tanesi hatalı olursa false
console.log((20>10) || (20>=30)); // true - bir tanesi doğru ise true yazar
console.log(!(x>z)); // true - eşit değil mi işlemi tersini veriyor
