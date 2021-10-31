//Sub Strings//

/*
float, double, char, decimal, binary, boolean.
string-> array de char, ou seja, char[]
*/

let nome = "Juca Balla";

console.log(nome.startsWith('j'));
console.log(nome.startsWith('J'));

console.log(nome[0]);

console.log(nome.endsWith('s'));

console.log(nome[nome.length-1]);

console.log(nome.length-1);

console.log(nome[5]);

console.log(nome.substring(5));
// pegando a casa solicitada em diante
console.log(nome.substring(2,6));
//                  começo ^ ^ fim

console.log(nome.substring(2,nome.length))

let consulta = "Juca";

console.log(nome.toUpperCase().startsWith(consulta.toUpperCase()));
//               ^^ em letras miusculas            ^^ em letras maiusculas

console.log(nome);
console.log(nome.toUpperCase());
console.log(nome.toLowerCase());

nome = "João Barreto da Silva Pereira";

console.log(nome.search("Barreto")); // -1 é caso não encontre o valor.

let listanomes = [
    nome, //0
    "Juca Bala", //1
    "Tião Silva", //2
    "Pedro Barreto", //3
    "Ivan Souza" //4
]

for(let i = 0; i<listanomes.length; i++){ // percorrer o array de listanomes

    if(listanomes[i].search("Barreto") > 0){ // se o encontrar o nome Barreto
        console.log(listanomes[i]); // imprima o nome
    }

}

// string.search('texto a ser encontrado') -> retorna o valor da casa que possui o
// texto buscado. caso não encontre retorna -1.

nome2 = "Viviane Garcia";

console.log(nome2.toLowerCase().search("Viviane".toLowerCase()));

//peça para o usuario para digitar um nome no prompt e diga se tem ou não no array
// listanomes
//não deve fazer diferenças letras maiusculas ou minusculas. Ou seja, não deve ser 
// Case sensitive

let nomeDigitado = window.log("Digite um nome: ");
let tem = "Não";

for(let i = 0; i < listanomes.length-1; i++){
    if(listanomes[i].toLowerCase().search(window.prompt)){
        
    }
}
