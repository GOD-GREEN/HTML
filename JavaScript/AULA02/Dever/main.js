let nome0;
let peso0;
let altura0;

let nome1;
let peso1;
let altura1;

nome0 = window.prompt("Digite o nome do 1° Funcionário");
peso0 = Number (window.prompt("Digite o peso do 1° Funcionário"));
altura0 = Number (window.prompt("Digite a altura do 1° Funcionário"));

nome1 = window.prompt("Digite o nome do 2° Funcionário");
peso1 = Number (window.prompt("Digite o peso do 2° Funcionário"));
altura1 = Number (window.prompt("Digite a altura do 2° Funcionário"));

let comparaP = peso0<peso1;
let comparaA = altura0<altura1;

if(comparaP === true) {
    console.log("O funcionario", (nome1), "é mais pesado que o funcionário", (nome0));
} else {
    console.log("O funcionário", (nome0), "é mais pesado que o funcionário", (nome1));
}

if(comparaA === true) {
    console.log("O funcionario", (nome1), "é mais alto que o funcionário", (nome0));
} else {
    console.log("O funcionário", (nome0), "é mais alto que o funcionário", (nome1));
}



