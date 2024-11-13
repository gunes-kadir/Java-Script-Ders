var marka = 'Opel';
var model = 'Astra';
var otomatik = 'yes';

// if/else kosulları

if(otomatik=='yes'){
    console.log('araç otomatiktir.');   
}
else {
    console.log('araç otomatik değildir.');
}

otomatik = true;

if(otomatik){
    console.log(marka+' '+model+' Otomatik');
}

if(otomatik=='true') {
    console.log("true");
// türleri farklı olduğu için karşılaştırmadı
}

if(otomatik==true) {
    console.log("true");
    // türleri aynı olunca karşılığını yazdı
}

if(10=='10') {
    console.log('sayılar eşit');
    // iki eşittir olduğu için tipleri göz önünde bulundurmadı. 
    //üç eşittir olsaydı önce tiplere bakacaktı
}

// Switch Koşulu
// 1 manuel - 2 otomatik

var vites = '3';

if(vites=='1') {
    console.log('araç manuel');
}
else if(vites=='2') {
    console.log('araç otomatik');
}

else {
    console.log('yanlış değer girildi');
}

vites='2' //yeni değer girildiği için yenisini tanımladı
switch(vites) {
    case '1' :
        console.log('araç manuel');
        break;
    case '2' :
        console.log('araç otomatik');
        break;
    default:
        console.log('yanlış değer');
        break;

}