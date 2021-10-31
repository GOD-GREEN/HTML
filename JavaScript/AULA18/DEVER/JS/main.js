let quest;
let questoes = [
    ["quem descobriu o Brasil", "Cabral", "Colombo", "Vasco da Gama", "Hércules", 'a'],
    ["Qual a Capital do Espirito Santo?", "Natal", "Belém", "Vitória", "Salvador", 'c'],
    ["Qual o estado fisíco da agua na nuvem?", "sólido", "líquido", "gasoso", "plasma", 'c'],
    ["Qual a cor do capuz da Chapelzinho vermelho?", "Rosa", "Lilás", "Azul", "Vermelho", 'd'],
    ["Qual o segundo game mais vendido do mundo atualmente?", "Tetris", "Minecraft", "Grand Theft Auto V", "Mineirinho Adventures", 'a'],
    ["Como você resolveu o problema do seu terceiro projeto? ", "Desisti", "Só Deus Sabe", "Achei no StackoverFlow", "Estudei muito", 'b'],
    ["Quantos bits tem um byte?", "10", "15", "128", "8", 'd']
];

let sorteadas = [];

function sorteio() {
    for (let i = 0; i < 3; i++) {
        let sorteio = Math.floor(Math.random() * questoes.length);
        if (sorteadas.indexOf(sorteio) == -1) {
            sorteadas.push(sorteio);
        } else {
            i--;
        }
    }
}
var codQuestoes = "";

for (let i = 0; i < sorteadas.length; i++) {

    codQuestoes += "<div id='questao" + (i + 1) + "'>" +
        "<p>" + (i + 1) + ") " + questoes[sorteadas[i]][0] + "</p>" +
        "<input type='radio' value= 'a' name='q " + (i + 1) + "'>" +
        questoes[sorteadas[i]][1] + "<br />" +
        "<input type='radio' value= 'b' name='q " + (i + 1) + "'>" +
        questoes[sorteadas[i]][2] + "<br />" +
        "<input type='radio' value= 'c' name='q " + (i + 1) + "'>" +
        questoes[sorteadas[i]][3] + "<br />" +
        "<input type='radio' value= 'd' name='q " + (i + 1) + "'>" +
        questoes[sorteadas[i]][4] + "<br />" +
        "<input type='hidden' id='certa" + (i + 1) + "' value= " +
        questoes[sorteadas[i]][5] + "><hr />";
    if (i == sorteadas.length - 1) {
        codQuestoes += "<button onclick='finaliza()'>Finalizar</button>" +
            "</div>";
    } else {
        codQuestoes += "<button onclick='proximaQuestao()'>Próxima</button>" +
            "</div>";
    }


    function proximaQuestao() {

        let elemento = [document.getElementById('questao1'),
        document.getElementById('questao2'),
        document.getElementById('questao3')
        ]

        elemento[i - 2].style.display = "none";
        elemento[i - 1].style.display = "block";
        elemento[0].style.display = "none";

        i++

    }

    function finaliza() {
        let certo = [];

        if (document.getElementsByName('q1').checked == questoes[sorteadas[0]][5]) {
            certo.push('Resposta Certa!')
        } else {
            certo.push('Resposta Errada!')
        }
        if (document.getElementsByName('q2').checked == questoes[sorteadas[1]][5]) {
            certo.push('Resposta Certa!')
        } else {
            certo.push('Resposta Errada!')
        }
        if (document.getElementsByName('q3').checked == questoes[sorteadas[2]][5]) {
            certo.push('Resposta Certa!')
        } else {
            certo.push('Resposta Errada!')
        }

        document.getElementById('questao1').style.display = "block";
        document.getElementById('questao2').style.display = "block";
        document.getElementById('questao3').style.display = "block";

        document.getElementById('questao1').innerHTML = "Sua Resposta está: " + certo[0];
        document.getElementById('questao2').innerHTML = "Sua Resposta está: " + certo[1];
        document.getElementById('questao3').innerHTML = "Sua Resposta está: " + certo[2];

        console.log(document.getElementById('q1').value)

    }

}

document.getElementById('questoes').innerHTML = codQuestoes;