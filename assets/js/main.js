//creo array vuota dove inserire i numeri
var numeri = [];


//creo ciclo per creare numeri fino a 100
for (var i = 1; i <= 100; i++) {
  var numero = i;
  a = numero % 3;
  b = numero % 5;
  c = a + b;
  if (c == 0){
    numeri.push('FizzBuzz');
  } else if (a == 0) {
    numeri.push('Fizz');
  } else if (b == 0) {
    numeri.push('Buzz');
  } else {
   numeri.push(numero);
  }
}
console.log(numeri);
document.getElementById('lista').innerHTML = numeri;
