let nome = "João";
// Arrey = vetor - armazena mais de uma informação

let frutas = ['maçã','banana','uva','melancia'];
//indexaçaõ ->  0       1       2       3
console.log(frutas);

console.log(frutas[2]);

console.log("Array de frutas:")
console.log("Casa 1: " + frutas[0]);
console.log("Casa 2: " + frutas[1]);
console.log("Casa 3: " + frutas[2]);
console.log("Casa 4: " + frutas[3]);

frutas.push("melão");
console.log(frutas);
console.log(frutas.length);

frutas[2] = "abacaxi";
console.log(frutas);
console.log("A última fruta é: " + frutas[frutas.length-1]);

let auxiliar = frutas;
console.log(Array.isArray(frutas));

frutas = "bananas";

console.log(Array.isArray(frutas));

frutas = auxiliar;

console.log(frutas.indexOf('melancia'));

frutas.pop("melancia");// Exclui o ultimo elemento do Array

console.log(frutas);

// laços de repetição

for(let index = 0; index < 10; index++){// ++ incrementa (soma +1)
    console.log(index);
}

for(let i = 1; i <= 10; i++){// ++ incrementa (soma +1)
    console.log(i);
}

for(let fruta = 0; fruta < frutas.length; fruta++){
    console.log("A " + (fruta+1) + "ª fruta é: " + frutas[fruta]);
}

for(let i = 10; i >= 0; i--){
    console.log(i)
}

for(let i = frutas.length-1; i>=0; i--){
    console.log("A "+ (i+1) + "ª fruta é: " + frutas[i]);
}

let numeros = [];

let i = ["10","11","12"];

for(i = 10; i <= 1101; i++){
    numeros.push(i);
}

for(let i = 0; i<numeros.length; i++){
    console.log(numeros[i]);
}

let pessoas = [["João", "Masculino", 22], ["Ana" , "feminino", 30]];

//declaração vazia -> let pessoas = [][];
//Array bidirecional ou Matriz bicondicional

console.log(pessoas);


