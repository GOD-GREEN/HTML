var numero = parseFloat(window.prompt("Digite um numero: "));
var divisor = 1, dividido = 0;
for (var  i = 0; i < numero; i++) {
    dividido = numero / divisor;
    divisor = (dividido + divisor) / 2;
}
console.log(divisor);