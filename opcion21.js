// let simple=0;
// let doble=0;
// let triple=0;
let N = +prompt("Ingrese el numero de hamburguesas:");
let TI = +prompt("Ingrese el tipo de amburguesa: .1 SIMPLE" );
let TP= +prompt("Ingrese el tipo de pago: 1.tarjeta");

    if (TI=1) {
        PA=20;
    } else { PA=25;}

TO=PA*N;
if (TP=1){
    CA=TO*0.05;}
    else{
        CA=0;
    }
TOT=TO+CA;
console.log(`La hamburguesa costo :${PA} `);
console.log(`El total sin cargo es: ${TO}`);
console.log(`El cargo es: ${CA}`);
console.log(`El total a pagar es : ${TOT}`);
