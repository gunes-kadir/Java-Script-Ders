var yas = prompt("Yaşınızı giriniz : ");

if (yas >= 18) {
    console.log("Ehliyet alabilirsiniz")
}
else {
    console.log( 18 - yas + " yıl sonra ehliyet alabilirsiniz.");
}


var ay = prompt("Hangi aydayız : ");


switch(ay) {
    case '12' :
        case '1' :
            case '2' :
                console.log('kış mevsimindesiniz.');
                break;
case '3' :      
        case '4' :
            case '5' :
                console.log('bahar mevsimindesiniz.');
                break;
case '6' :
        case '7' :
            case '8' :
                console.log('yaz mevsimindesiniz.');
                break;
    

            case '9' :
                console.log('sonbahar mevsimindesiniz.');
                break;
                case '10' :
                        console.log('sonbahar mevsimindesiniz.');
                        break;
                        case '11' :
                        console.log('sonbahar mevsimindesiniz.');
                        break;
                        default:
                            console.log('yanlış değer girdiniz');

            }