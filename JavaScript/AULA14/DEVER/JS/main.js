var quadros = [
    "./IMG/urso1.png",
    "./IMG/urso2.png",
    "./IMG/urso3.png"
];
var anima;
var urso = document.getElementById('urso');
var margem = 0;
var quadroatual = 0;

let larguraTela = window.innerWidth;

let cont = 0;
setTimeout(function(){
        anima = setInterval(function(){
        if(quadroatual != 1){
            urso.src = quadros[1];
            quadroatual =1;

        }else{
            urso.src = quadros[2];
            quadroatual = 2;
        }
        
        margem += 40;
        urso.style.marginLeft = margem + "px";

        if(margem >= larguraTela - 350){
            urso.src = quadros[0];
            clearInterval(anima);
            
        }
       
      
    },250)
    
},1000)

setTimeout(function(){
    anima = setInterval(function(){
        if(quadroatual != 1){
            urso.src = quadros[1];
            quadroatual =1;

        }else{
            urso.src = quadros[2];
            quadroatual = 2;
        }

        margem += -40;
        urso.style.marginLeft = margem + "px";

        if(margem <= 0){
            urso.src = quadros[0];
            clearInterval(anima);
            
        }

        
console.log(cont);
    },250);
},15000)