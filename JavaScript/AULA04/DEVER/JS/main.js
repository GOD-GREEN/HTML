var valor1 = parseFloat(window.prompt("Digite um valor: "))
var valor2 = parseFloat(window.prompt("Digite outro valor: "))

//Atividade

if (valor1 % 2 !== 0){
    console.log(valor1 + " esse valor é impar.")
} else {
    console.log(valor1 + " esse é valor é par.")
}


if (valor2 % 2 !== 0){
    console.log(valor2 + " esse valor é impar.")
} else {
    console.log(valor2 + " esse é valor é par.")
}

if (valor1) {
let v1 = valor1*valor1
    console.log(v1 + " é o quadrado de " + valor1);

let v2 = valor2*valor2*valor2
    console.log(v2 + " é o cubo de " + valor2);
}

//Desafio

var divisor0 = 1, dividido = 0, divisor1 = 1;
for (var  i = 0; i < valor1; i++) {
    dividido = valor1 / divisor0;
    divisor0 = (dividido + divisor0) / 2;
}

for (var  i = 0; i < valor2; i++) {
    dividido = valor2 / divisor1;
    divisor1 = (dividido + divisor1) / 2;
}
console.log("A raiz de " + valor1 + " é igual à " + divisor0 + ".");
console.log("A raiz de " + valor2 + " é igual à " + divisor1 + ".");