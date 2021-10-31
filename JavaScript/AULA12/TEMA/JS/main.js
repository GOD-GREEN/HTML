/*
Functions São comportamentos que podemos criar para chamar quando achamos nescessario
*/

function soma2e2() {
    console.log("2 + 2 é: " + (2 + 2));
}

soma2e2();
soma2e2();
soma2e2();

function soma(valor1, valor2) {
    let total = valor1 + valor2;
    console.log("A soma de " + valor1 + "e" + valor2 + "é" + total);
}

soma(7, 4);

function subtrai(valor1, valor2) { //valor1 e valor2 são parametros
    let total = valor1 - valor2;
    console.log("A diferença entre " + valor1 + " e " + valor2 + " é " + total);
}

subtrai(9, 6);

function areaRetangulo(base, altura) {
    let area = base * altura;

    return area;
}

console.log(areaRetangulo(4, 9));
console.log("A área calculada foi: " + areaRetangulo(5, 9));

function isMaria(nome) {
    if (nome.toLowerCase() == 'maria') {
        return true;
    } else {
        return false;
    }
}

console.log(isMaria("Juca"))
console.log(isMaria('maria'));
let nomeCompleto = "Juca Bala";

nomeCompleto.toLowerCase(); // retorna a mesma variavel em minusculo

console.log(nomeCompleto);
console.log(nomeCompleto.toLowerCase());

//============== EXEMPLO ==================//   


//variáveis globais
let sucos = [], sanduiches = [], acompanhamentos = [];

let opcao = window.prompt("O que será cadastrado? (1)Sanduiches (2)Sucos (3)Acompanhamentos SAIR-fechar cadastro");

//FUNCTIONS

function setNome(){
    return window.prompt("Digite Nome: ")
}


//INICIO

while (opcao != "sair") {
    let nome, ingrediente = [],
        preco, ing;
    switch (opcao) {
        case '1':
            nome = window.prompt("Digite o nome do sanduiche ou SAIR:");
            ingrediente.push(window.prompt("Digite um ingrediente:"));
            ing = "";
            while (0 == 0) {
                ing = window.prompt("Digite um novo ingrediente ou FIM para encerrar:");
                if (ing.toLowerCase() != 'fim') ingrediente.push(ing);
                else break;
            }
            preco = Number(window.prompt("Digite o preço do sanduiche:")) sanduiches.push([nome, ingrediente, preco]);
            break;
        case '2':
            ingrediente.push(window.prompt("Digite um ingrediente:"));
            ing = "";
            while (0 == 0) {
                ing = window.prompt("Digite um novo ingrediente ou FIM para encerrar:");
                if (ing.toLowerCase() != 'fim') ingrediente.push(ing);
                else break;
            }
            preco = Number(window.prompt("Digite o preço do suco:")) sucos.push([ingrediente, preco]);
            break;
        case '3':
            nome = window.prompt("Digite o nome do acompanhamento:");
            preco = Number(window.prompt("Digite o preço do acompanhamento:"));
            acompanhamentos.push([nome, preco]);
            break;
        default:
            window.alert("Opção inválida! Apenas números de 1 à 3.")
    }
    opcao = window.prompt("O que será cadastrado? (1)Sanduiches (2)Sucos (3)Acompanhamentos SAIR-termina o cadastro");
}
console.log("Sanduiches\n======================="); // \n é quebra de linha(enter)for(let i = 0; i < sanduiches.length ; i++){​​​​​ console.log("Nome: " + sanduiches[i][0]); console.log("Ingredientes: " ); for(let j = 0; j < sanduiches[i][1].length; j++){​​​​​ console.log('\t' + sanduiches[i][1][j]); // \t é tabulação (TAB) }​​​​​ console.log("Preço: $" + sanduiches[i][2]);}​​​​​console.log("\n\nSucos\n======================="); // \n é quebra de linha(enter)for(let i = 0; i < sucos.length ; i++){​​​​​ console.log("Ingredientes: " ); for(let j = 0; j < sucos[i][0].length; j++){​​​​​ console.log('\t' + sucos[i][0][j]); // \t é tabulação (TAB) }​​​​​ console.log("Preço: $" + sucos[i][1]);}​​​​​console.log("\n\nAcompanhamentos\n======================="); // \n é quebra de linha(enter)for(let i = 0; i < acompanhamentos.length ; i++){​​​​​ console.log("Nome: " + acompanhamentos[i][0]);  console.log("Preço: $" + acompanhamentos[i][1]);}​​​​​