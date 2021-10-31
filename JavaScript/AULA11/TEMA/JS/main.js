/*
let contador = 110;
do{//faça primeiro e pergunte depois
console.log(contador);
contador--;
}while(contador<10);//enquanto(condição)
while(contador >= 0){//enquanto(condição) --pergunte antes de fazer
console.log(contador);
contador--;
}
let resposta;
do{
resposta = window.prompt("Quem descobriu o Brasil? (só o sobrenome)")
}while(resposta.toLowerCase() != 'cabral');
resposta= window.prompt("Qual a raiz quadrada de 144?");
while(Number(resposta) != 12){
resposta = window.prompt("Você errou, tente de novo! Qual a raiz de 144?")
}
window.alert("Você acertou.")
*/
//foreach
//digite o nome e a idade de alunos de uma turma, até que o nome seja sair.
let nome, idade;
let alunos = [];
/* //não atendeu. cadastrou o sair como se fosse aluno
while (nome!="sair"){
nome = window.prompt("Digite o nome do aluno ou 'SAIR' para encerrar o cadastro");
idade= Number(window.prompt("Digite a idade:"))
alunos.push([nome,idade])
}
*/
/*
nome = window.prompt("Digite o nome do aluno ou 'SAIR' para encerrar o cadastro");
while(nome.toLowerCase() !="sair"){
idade= Number(window.prompt("Digite a idade:"))
alunos.push([nome,idade])
nome = window.prompt("Digite o nome:")
}
while (nome.toLowerCase()!="sair"){
nome = window.prompt("Digite o nome do aluno ou 'SAIR' para encerrar o cadastro");
if(nome!= "sair"){
idade= Number(window.prompt("Digite a idade:"))
alunos.push([nome,idade])
}
}
*/
/*
while (0==0){
nome = window.prompt("Digite o nome do aluno ou 'SAIR' para encerrar o cadastro");
if(nome.toLowerCase() == "sair"){
break; //interrompe o laço. seja FOR ou WHILE
}
idade= Number(window.prompt("Digite a idade:"))
alunos.push([nome,idade])
}
console.log(alunos)
*/
/*
let opcao = 0;

switch(opcao){
    case 0:
        console.log("Voce escolheu zero");
        break; //sempre interrompe a função

    case 1:
        console.log("Voce escolheu um");
        break;

    case 2:
        console.log("Voce escolheu dois");
        break;

    default:
        console.log("Você escreveu qualquer coisa menos 0,1 ou 2");
        console.log("Voçe escreveu: " + opcao);
        break;
}

let nome = "Juca";

switch(nome){
    case "Juca":
        console.log("Você escolheu Juca Bala da Silva")
}
*/
let funcionarios = [], cliente=[], fornecedores=[];
// receba nome, telefone e categoria. se a categoria for 1 cadastre como cliente,
// se for 2 é funcionario, se for 3 é fornecedor.
/* let peaple = 0
switch(peaple){
    case 1:
        cliente = [
            window.prompt("Nome: "),
            window.prompt("tel.: "),
            window.prompt("categoria: ")
        ]
        break;

        case 2:
        funcionarios = [
            window.prompt("Nome: "),
            window.prompt("tel.: "),
            window.prompt("categoria: ")
        ]
        break;
    
        case 3:
        fornecedores = [
            window.prompt("Nome: "),
            window.prompt("tel.: "),
            window.prompt("categoria: ")
        ]
        break;
}*/

do{

nome = window.prompt("Nome");
telefone = window.prompt("Telefone")
categoria = window.prompt("Categoria (1)Cliente  (2)Funcionario  (3)Fornecedor");

switch(categoria){
    case '1':
        cliente.push([nome,telefone])
        break;

    case '2':
        funcionarios.push([nome,telefone])
        break;

    case '3':
        fornecedores.push([nome,telefone])
        break;

    default:
        window.prompt("Categoria Errada!");
        window.prompt("As categorias são: (1)Cliente  (2)Funcionario  (3)Fornecedor Digite Apenas numeros!")
    }        
}while(0==0);{
    console.log(cliente);
    console.log(funcionarios);
    console.log(fornecedores);
}
