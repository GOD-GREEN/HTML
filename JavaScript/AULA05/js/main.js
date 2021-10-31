var bar = document.getElementById("txt_01");
bar.value = "";
var operador = "";
var memoria = 0;
var aux = 0;

function btn_num(valor) {
    

    if (bar.value.includes(".") && valor === ".") {
        window.alert("já possui ponto.")
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
            let valoratual = Number(visor.value);
            total = memoria + valoratual;
            visor.value = (total);
        } else if (operador === "-") {
            total = memoria - Number(visor.value);
            visor.value = total;
        } else if (operador === "*") {
            let valoratual = Number(visor.value);
            total = memoria * valoratual;
            visor.value = (total);
        } else if (operador === "/") {
            let valoratual = Number(visor.value);
            total = memoria / valoratual;
            visor.value = (total);
        }
        memoria = total;
    }
}

function operacao(op) {
    
        operador = op;
        memoria = Number(visor.value);
        visor.value = "";

}

function limpar() {
    operador = ""
    visor.value = ""
    memoria = 0;
}