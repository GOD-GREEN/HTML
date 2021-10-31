let nome;
let idade;
let peso;
let altura;

nome = window.prompt("Diga seu Nome:");
idade = Number(window.prompt("Diga sua idade:"));
peso = Number(window.prompt("Diga seu peso:"));
altura = Number(window.prompt("Diga sua altura:" +
                                    "\n Ex.: 1.95"));

let imc = peso/(altura*altura);
let condicao;

if (imc < 18.50){
    condicao = "Abaixo do peso"
} else if (imc <= 25.99){
    condicao = "Normal"
} else {
    condicao = "Acima do peso"
};

let doador
let compara

if (condicao === "Normal"){
    doador = "ok"
} else {
    doador = "IMC irregular"
};

let doador1;

if (idade >= 18 && idade <= 60){
    doador1 = "ok"

} else {
    doador1 = "Idade incompativel"
};

let pesoD

if (peso >= 50) {
    pesoD = "ok"
} else {
    pesoD = "baixo peso"
};

let doa;

if (doador == "IMC irregular"){
    doa = "Não doador"
}

else if (doador1 || pesoD != "ok") {
    doa = "Não doador"

} else {
    
    doa = "doador"
};


if (doa === "doador") {
    console.log(
        "Nome: " + nome +
        "\nCondição: " + doa
    )
} else {
    console.log
    ("Nome: " + nome +
    "\nCondição: " + doa +
    "\nMotivo: " + doador, doador1, pesoD);
};
