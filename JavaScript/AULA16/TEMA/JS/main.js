var index = 0;
//Cria um index global para as questões.

let questoes = [
    document.getElementById("questao1"),
    document.getElementById("questao2"),
    document.getElementById("questao3"),
    document.getElementById("questao4"),
    document.getElementById("questao5")
];

var botao = document.getElementById('botao');

var intervalo; //criando a a variável do timer

function resultado() {
    ​​​​​
    let total = 0;
    if (document.getElementsByName('q1')[0].checked) total++;
    if (document.getElementsByName('q2')[2].checked) total++;
    if (document.getElementsByName('q3')[0].checked) total++;
    if (document.getElementsByName('q4')[3].checked) total++;
    if (document.getElementsByName('q5')[2].checked) total++;

    window.alert("Você fez: " + total + " acertos.");

    for (let i = 0; i < questoes.length; i++) {
        questoes[i].style.display = 'block';
    }

    clearInterval(intervalo);
}​​​​​

function sistema() {
    ​​​​​ //criando o timer
    questoes[index].style.display = "none"; //index atual

    index++;

    if (index == 5) {        ​​​​​
        resultado();
    }​​​​​else
        questoes[index].style.display = "block"; //proximo index

}​​​​​

intervalo = setInterval(sistema, 20000); //armazenando o TIMER em variável
function proxQuestao() {
    ​​​​​
    clearInterval(intervalo);
    sistema(); //passa para a próxima questão
    intervalo = setInterval(sistema, 20000); //volta a contar o tempo
}​​​​​