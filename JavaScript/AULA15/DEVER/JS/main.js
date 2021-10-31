var respostasCertas = ['A', 'B', 'A'];
var respostasEscolhidas = [];
var questão = [];
var a0, a1, a2;
var c0, c1, c2;


respostasEscolhidas.value = document.getElementsByName('radios1');


function Quest(Quest, Re) {

    respostasEscolhidas = [Quest, Re];

    questão.push(respostasEscolhidas)
    return questão;
}

let elemento = [document.getElementById('questao1'),
                document.getElementById('questao2'),
                document.getElementById('questao3'),
                document.getElementById('questao4')
]

elemento[0].style.display = "none";
elemento[1].style.display = "none";
elemento[2].style.display = "none";

setTimeout(function () {
    elemento[0].style.display = "block";
    elemento[1].style.display = "none";
    elemento[2].style.display = "none";
    


    a0 = setInterval(function () {


        if (questão[0] == undefined) {
            c0 = 'Tempo Excedido!';
        } else if (questão[0][1] != respostasCertas[0]) {
            c0 = 'Resposta Errada.';
        } else {
            c0 = 'Resposta Certa!';
        }


    }, 20000)
    setTimeout(function () {
        clearInterval(a0)
    }, 20001)
})

function proxima() {
    clearInterval(a0)
}

setTimeout(function () {
    elemento[1].style.display = "block";
    elemento[0].style.display = "none";
    elemento[2].style.display = "none";

    a1 = setInterval(function () {

        if (questão[1] == undefined) {
            c1 = 'Tempo Excedido!';
        } else if (questão[1][1] != respostasCertas[1]) {
            c1 = 'Resposta Errada.';
        } else {
            c1 = 'Resposta Certa!';
        }

    }, 20000)

    setTimeout(function () {
        clearInterval(a1)
    }, 20001)

}, 20002)

function proxima() {
    clearInterval(a1)
}

setTimeout(function () {

    elemento[2].style.display = "block";
    elemento[0].style.display = "none";
    elemento[1].style.display = "none";

    a2 = setInterval(function () {

        if (questão[2] == undefined) {
            c2 = 'Tempo Excedido!';
        } else if (questão[2][1] != respostasCertas[2]) {
            c2 = 'Resposta Errada.';
        } else {
            c2 = 'Resposta Certa!';
        }

    }, 19999)
    setTimeout(function () {
        clearInterval(a2)
    }, 40001);
}, 40002);

function proxima() {
    clearInterval(a2)
}


function finalizar(){

    elemento[2].style.display = "none";
    elemento[0].style.display = "none";
    elemento[1].style.display = "none";
    document.getElementById('finalizar').style.display = "none";
    document.getElementById('proxima').style.display = "none";

    document.getElementById('h22').innerHTML= 'Correção do Quiz.';
    document.getElementById('correção')
    document.getElementById('correção0').innerHTML= 'Questão 1 '+c0;
    document.getElementById('correção1').innerHTML= 'Questão 2 '+c1;
    document.getElementById('correção2').innerHTML= 'Questão 3 '+c2;

    clearInterval(a0);
    clearInterval(a1);
    clearInterval(a2);
}

    setTimeout(function() { 
        finalizar()
       
}, 60002);