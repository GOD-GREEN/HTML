var bar = document.getElementById("bar");
var histcal = document.getElementById("histcal");
histcal.value = "";
bar.value = "";
var operador = "";
var memoria = 0;
var aux = 0;
var v1;

function btn_num(valor) {
    

    if (bar.value.includes(".") && valor === ".") {
        window.alert("já possui ponto.")
        }else if ( valor == "." && bar.value == ""){
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
        }
        histcal.value += memoria + operador + valoratual + "=" + total + "\n";
        memoria = total;
        
    }
}

if (operador === "+") {
            
    console.log(valoratual + operador + v1);

} else if (operador === "-") {
          
    histcal.value=(valoratual + "-" + v1);

} else if (operador === "*") {
            
    histcal.value=(valoratual + "*" + v1);

} else if (operador === "/") {
            
    histcal.value=(valoratual + "/" + v1);

}
        

function operacao(op) {
    
        operador = op;
        memoria = Number(bar.value);
        bar.value = "";

}

function limpar() {
    operador = ""
    bar.value = ""
    memoria = 0;
}

