var Q1 = document.getElementById('questão1');
var Q2 = document.getElementById('questão2');
var Q3 = document.getElementById('questão3');

var R1 = document.getElementsByName('radios1');
var R2 = document.getElementsByName('radios2');
var R3 = document.getElementsByName('radios3');

function Quest1(){
    Q1.value = 1;
    if( Q1 != R1){
        R1 = false;
    }
}
function Quest2(){
    Q2.value = 2;
    if(Q2 != R2){
        R2 = false;
    }
}
function Quest3(){
    Q3.value = 1;
    if(Q3 != R3){
        R3 = false;
    }
}




setTimeout(function(){
    Quest1()
    Quest2()
    Quest3()
},20000)