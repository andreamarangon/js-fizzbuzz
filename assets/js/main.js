//creo array vuota dove inserire i numeri
var numeri = [];


//creo ciclo per creare numeri fino a 100
for (var i = 1; i < 101; i++) {
  var numero = i;
  c = numero % 3;
  d = numero % 5;
  if (c == 0){
    numeri.push('Fizz');
 } else if (d == 0) {
    numeri.push('Buzz');
 } else {
   numeri.push(numero);
 }


  // numeri.push(numero);
}
console.log(numeri);
