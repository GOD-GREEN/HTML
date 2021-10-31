var contagem = [];

let ct = 0;
for (let i = 7; i <= 777; i++) {
    let set;

    if (i % 2 == 1) {
        set = ct++;

        contagem.push(ct);
    }

}


console.log("De " + 7 + " até " + 777 + " existem " + contagem[contagem.length - 1] + " Números ímpares");


let fruta = 'Melancia'

let frutas = [fruta, 'Banana', 'Maça', 'Uva', 'Melão', 'Abacaxi'];


console.log(frutas);

var frutaDigitada = window.prompt("Adivinhe as frutas: ");
var tem = "não";
var contador = 0;



for (let i = 0; i < frutas.length; i++) { //percorrer o array de listanomes
    if (frutas[i].toLowerCase().search(frutaDigitada.toLowerCase()) >= 0) {
        // imprima o nome
        tem = 'sim';
        contador++;
        a = i;



    }
}

if (tem === 'sim') {
    console.log("Quantos foram encontrados?" + contador)
    console.log("Fruta Digitada: " + frutas[a]);

}

console.log("Foi encontrado: " + tem);

let auxiliar = frutas.sort()//armazenamento em um auxiliar

for(let i = 0;i < auxiliar.length; i++)
console.log(auxiliar[i])