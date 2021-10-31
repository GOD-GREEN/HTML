//VARIAVEIS GLOBAIS//
var cadastros = [];

var condicaoImc = [];

var motive = [];

var aux;

//FUNÇÕES//
function limpa(){
    document.cadastross.reset();
}

function cadastro() {
    let pessoa=[
        document.getElementById('nome').value,
        document.getElementById('idade').value,
        document.getElementById('altura').value,
        document.getElementById('peso').value
    ];



    cadastros.push(pessoa);

    for(let i =0; i<cadastros.length; i++){

        let peso = parseFloat(cadastros[i][3]);
        let altura = parseFloat(cadastros[i][2])/100;
        
                let IMC = peso / (altura * altura);
                var condicao;
    
                if (IMC <= 18.50)
                    condicao = ["abaixo do normal"];
                else if (IMC <= 24.99)
                    condicao = ["normal"];
                else
                    condicao = ["acima do normal"];
            }
    condicaoImc.push(condicao);

    for(let i =0; i<cadastros.length; i++){


        let idade = Number(cadastros[i][1]);
        let peso = parseFloat(cadastros[i][3]);
        
    
        var motivo = "";
        //Justificando a reprovação
        if (idade >= 18) {
            if (idade <= 60) {
        
            } else {
                motivo = ["Idade Avançada, "];
            }
        } else {
            motivo = ["Baixa idade, "];
        }
        
        if (peso >= 50) {
            if (condicaoImc[i][0] == "normal") {
        
            } else {
                motivo += [motivo + "IMC inapropriado, "];
                
            }
        } else {
            motivo = [motivo + "Abaixo do Peso, "];
        }
        
        if (motivo == "") {
            motivo = ["Doador"];
        } else {
            motivo= ["Não Doador" + "<br />" +
                "Motivo: " + motivo];
        }
        
    }
    console.log(motivo);

        motive.push(motivo);
    console.log(condicaoImc);
    console.log(motive);
    console.log(cadastros);
    document.cadastross.reset();
}

function consultar() {
    let consulte = document.getElementById('consulte');

    if(consulte.style.display==="none"){
        consulte.style.display="block"
    }else{
        consulte.style.display="none"
    }

    let dados= "<h2>Consulta Geral</h2>";

    for(let i =0; i<cadastros.length; i++){

            dados += '<div class="pessoa">';
            dados += "Nome: " + cadastros[i][0] + "<br />";
            dados += "Idade: " + cadastros[i][1] + "<br />";
            dados += "Altura: " + cadastros[i][2] + "<br />";
            dados += "Peso: " + cadastros[i][3] + "<br />";
            dados += "</div>";

    }

    document.getElementById('dados').innerHTML = dados;
}

function imc(){
    let consulte = document.getElementById('consulte');

    if(consulte.style.display==="none"){
        consulte.style.display="block"
    }else{
        consulte.style.display="none"
    }

    let dados = "<h2>Consulta IMC</h2>";

    for(let i =0; i<cadastros.length; i++){

        dados += '<div class="pessoa">';
        dados += "Nome: " + cadastros[i][0] + "<br />";
        dados += "Idade: " + cadastros[i][1] + "<br />";
        dados += "Altura: " + cadastros[i][2] + "<br />";
        dados += "Peso: " + cadastros[i][3] + "<br />";
        dados += "IMC: " + condicaoImc[i][0] + "<br />"
        dados += "</div>";


    }
    document.getElementById('dados').innerHTML = dados;
    
}

function doador(){
    let consulte = document.getElementById('consulte');

    if(consulte.style.display==="none"){
        consulte.style.display="block"
    }else{
        consulte.style.display="none"
    }

    let dados = "<h2>Consulta Doador</h2>";


    for(let i =0; i<cadastros.length; i++){
    

    dados += '<div class="pessoa">';
    dados += "Nome: " + cadastros[i][0] + "<br />";
    dados += "Idade: " + cadastros[i][1] + "<br />";
    dados += "Altura: " + cadastros[i][2] + "<br />";
    dados += "Peso: " + cadastros[i][3] + "<br />";
    dados += "Condição: " + motive[i][0] + "<br />"
    dados += "</div>";

    }

    document.getElementById('dados').innerHTML = dados;
    
}

