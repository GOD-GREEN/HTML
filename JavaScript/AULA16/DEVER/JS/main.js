var index = 0; //Cria um index global para as Questões.

let quests = [];

let questoes = [
    document.getElementById('questao1'),
    document.getElementById('questao2'),
    document.getElementById('questao3'),
    document.getElementById('questao4'),
    document.getElementById('questao5'),
    document.getElementById('questao6'),
    document.getElementById('questao7'),
    document.getElementById('questao8'),
    document.getElementById('questao9'),
    document.getElementById('questao10')
];

var inetrvalo;

var t

function startTimer(duration, display) {

    var timer = duration, seconds;

    t = setInterval(function () {

        seconds = parseInt(timer % 60, 10);

        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = seconds;

        if (--timer < 0) {
            timer = duration;
        }

    }, 1000)

    for (var i = 0; i < questoes.length; i++) {
        quests[i] = seconds ;
    }
}


function startUp() {

    clearInterval(t);

    var duration = 19;
    var display = document.querySelector('#timer');

    startTimer(duration, display);

}

function resultado() {
    let total = 0;

    if (document.getElementsByName('q1')[2].checked) total++;
    if (document.getElementsByName('q2')[3].checked) total++;
    if (document.getElementsByName('q3')[0].checked) total++;
    if (document.getElementsByName('q4')[0].checked) total++;
    if (document.getElementsByName('q5')[0].checked) total++;
    if (document.getElementsByName('q6')[0].checked) total++;
    if (document.getElementsByName('q7')[0].checked) total++;
    if (document.getElementsByName('q8')[0].checked) total++;
    if (document.getElementsByName('q9')[0].checked) total++;
    if (document.getElementsByName('q10')[0].checked) total++;

    botao = document.getElementsByName('botao');

    for (let i = 0; i < botao.length; i++) {
        botao[i].style.display = 'none';
    }

    let tamanho = document.querySelector('#tamanho');

    tamanho.style.height = 2150 + 'px';



    for (let i = 0; i < questoes.length; i++) {
        questoes[i].style.display = 'block';
    }

    clearInterval(intervalo);

    clearInterval(t);
}


function sistema() {

    startUp()
    questoes[index].style.display = 'none';

    index++;

    if (index == 10) {
        resultado()
    } else {
        questoes[index].style.display = 'block';
    }
}

intervalo = setInterval(sistema, 20000);

startUp()

function proxQ() {
    clearInterval(intervalo);
    sistema();
    intervalo = setInterval(sistema, 20000);

}

function antQ(){
    questoes[index].style.display = 'none'
    index -= 2;
    if(index == -1) index = 0;
    proxQ();
}