var bar = document.getElementById("bar");
var histcal = document.getElementById("histcal");
var tecladoF = document.getElementById("tecladoF");
histcal.value = "";
bar.value = "";
var operador = "";
var memoria = 0;
histcal.style.display = "none";
tecladoF.style.display = "none";

function btn_num(valor) {


    if (bar.value.includes(".") && valor === ".") {
        window.alert("já possui ponto.")
    } else if (valor == "." && bar.value == "") {
        bar.value = ("0.")
    } else {
        bar.value += valor; // visor.value = visor.value + valor;
    }
}

function calcula() {
    let total
    if (operador === "") {
        window.alert("Você não escolheu um operador!");
    } else {
        if (operador === "+") {
            var valoratual = Number(bar.value);
            total = memoria + valoratual;
            bar.value = (total);

        } else if (operador === "-") {
            valoratual = Number(bar.value)
            total = memoria - valoratual;
            bar.value = total;

        } else if (operador === "*") {
            valoratual = Number(bar.value);
            total = memoria * valoratual;
            bar.value = (total);

        } else if (operador === "/") {
            valoratual = Number(bar.value);
            total = memoria / valoratual;
            bar.value = (total);

        } else if (operador === "%") {
            let aux
            valoratual = Number(bar.value)
            aux = valoratual / 100;
            total = memoria * aux;
            bar.value = total;

        } else if (operador === "P") {
            valoratual = Number(bar.value);
            total = Math.pow(memoria, valoratual);
            bar.value = (total);

        } else if (operador === "M") {
            
            window.alert("Operação indisponivel, aguarde as proximas atualizações.!")
            
        }  else if (operador === "√") {

           valoratual = Number(bar.value);
           let dividido = 0;
           let memoria1 = 1;
           for (var  i = 0; i < valoratual; i++) {
               dividido = valoratual / memoria1;
               memoria1 = (dividido + memoria1) / 2;
           }  
                total = memoria1;
                if(memoria === 0){
                    memoria = "";
                } else {
                   aux = memoria * memoria1;
                   total = aux;

                }
                bar.value = (total);

        } else if (operador === "x²") {
            total = memoria * memoria;
            bar.value = (total);
        }
        
        histcal.value += memoria + operador + valoratual + "=" + total + "\n";
        memoria = total;

    }
}


function ophist(objeto, btn) {
    let elemento = document.getElementById(objeto);
    let botao = document.getElementById(btn);

    if (elemento.style.display === "none") {
        botao.style.marginRight = "-270px";
        elemento.style.display = "block";
        botao.value = "||<";
    } else {
        elemento.style.display = "none";
        botao.style.marginRight = "-11px";
        botao.value = "||>";
    }
}

function opcient(objeto,btn,bodyp,css1,barra,igual) {
    let elemento = document.getElementById(objeto);
    let botao = document.getElementById(btn);
    let all = document.getElementById(bodyp);
    let css = document.getElementById(css1);
    let visor = document.getElementById(barra);
    let ig = document.getElementById(igual);

    if (elemento.style.display === "none") {
        elemento.style.display = "block";
        all.style.width = "485px";
        css.style.margin = "-254px 0 0 150px";
        visor.style.width = "444px";
        ig.style.margin = "0 0 0 2px";
        ig.style.width = "445px";
        botao.value = "||>";
    } else {
        elemento.style.display = "none";
        all.style.width = "330px";
        css.style.margin = "0";
        visor.style.width = "290px";
        ig.style.margin = "0";
        ig.style.width = "289px";
        botao.value = "||<";
        
    }
}


function operacao(op) {

    operador = op;
    memoria = Number(bar.value);
    bar.value = "";

}

function limpar() {
    operador = "";
    bar.value = "";
    memoria = 0;
}

function carregamento(objeto) {
    let object = document.getElementById(objeto);

    object.style.display = "none";
}