let valor1 = 0, valor2 = 0;
let v1 = "0", v2 = "0";
let nome = "Juca", sobrenome = "Bala";

/*
NaN => Not a Number
*/

console.log(nome+ " " +sobrenome);

let texto = "valor1 = " + valor1;
console.log(texto);

/* 
String = texto
Float = número com casa decimal
Double = número com o dobro de casas decimail **Não tem no JS**
Integer = númenos inteiros
Boolean (Booleano) = True e False (Verdadeiro ou Falso)
Number = número genérico (Integer ou Float)
*/

//Receba os valores das variaveis valor1 e valor2 através do prompt e
//exiba a soma dos valores no console

valor1 = Number(prompt("digite o valor 1:"));
valor2 = Number(prompt("digite o valor 2:"));

console.log(valor1 + valor2);

v1 = "15";
v2 = "20";

valor1 = parseInt(v1);
valor2 = parseInt(v2);
console.log(valor1 + valor2);

/*
convertendo string em numeros:
Number(string) - Converte a string para numero generico
parseInt(string) - converte a string para inteiro
parseFloat (string) - converte a string para float
*/

/*

/ divisão
* multiplicação
- subitração
+ soma

= atribuir valor
== semelhante
=== igualdae
> maior
< menor
>= maior igual
<= menor igual

*/

let compara = 1 == "1"; //booleano

console.log(compara);

compara = 1 === "1"; //booleano

console.log(compara);

compara = 1 === 1.0; //booleano

console.log(compara);

console.log(!compara);
// ! -> negação (NÃO), inverte o valor da comparação. ou seja, true vira false e vice versa

console.log(!(1==1));
console.log(1!=1);

// != -> diferente 

let docontra = !compara;
console.log(docontra);
//receba no console dois valores digitados pelo usuario e
//diga de o primeiro é maior que o segundo (True ou Falso)

valor1 = Number (prompt("valor1"));
valor2 = Number (prompt("valor2"));

compara = valor1>valor2;

console.log(compara)