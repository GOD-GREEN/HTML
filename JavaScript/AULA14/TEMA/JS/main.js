function ola() {
    console.log('Olá povo!');
}

//setInterval(ola,2000); //tempo em milessegundos

//setInterval(function(){alert('ola')},5000)


var temporizador;

function rodar() {
    let contador = 0
    let mostrar = document.getElementById('mostrar');
    temporizador = setInterval(
        function () {
            mostrar.innerHTML += contador + ", ";
            console.log("Contei " + contador);
            contador++;

            if (mostrar.style.color == 'black')
                mostrar.style.color = 'red';
            else
                mostrar.style.color = 'black';

            if (contador >= 10) {
                clearInterval(temporizador);
            }


        }, 1000);
}

function parar() {
    clearInterval(temporizador);
}

var quadros = [
    "./IMG/urso1.png",
    "./IMG/urso2.png",
    "./IMG/urso3.png"
];

var urso = document.getElementById('urso');
var margem = 0;
var quadroatual = 0;

let larguraTela = window.innerWidth;

let contador = 0;
setTimeout(function () {
    var anima = setInterval(function () {

        if (quadroatual != 1) {
            urso.src = quadros[1];
            quadroatual = 1;

        } else {
            urso.src = quadros[2];
            quadroatual = 2;

        }
        margem += 40;
        urso.style.marginLeft = margem + "px";

        if (margem >= larguraTela - 350) {
            margem += -40;
            urso.src = quadros[0];
            urso.style.transform = scaleX(-1);
            clearInterval(anima);
        }
        
        console.log(margem);
        console.log(larguraTela);
        
        

    }, 250);

    
}, 1000);












setTimeout(function () {
    console.log("Primeiro TIMEOUT")
}, 10000);

setTimeout(function () {
    console.log("Segundo TIMEOUT")
}, 7500);

setTimeout(function () {
    console.log("Terceiro TIMEOUT")
}, 5000);

setTimeout(function () {
    console.log("Quarto TIMEOUT")
}, 2500);