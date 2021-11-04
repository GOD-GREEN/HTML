function login(){

}

function menuCadastra(){

}



function cadastraNota(){
    var data  =  document.getElementById('dataNota');
    var COO   =   document.getElementById('COONota');
    var CNPJ  =  document.getElementById('CNPJNota');
    var valor = document.getElementById('valorNota');

    var nota = JSON.parse(localStorage.getItem("dadosNota"))

    if(nota == null){
        localStorage.setItem("dadosNota", "[]");
        var nota = [];
    }
    
    var auxRegistro = [
        dataNota = data.value,
        COONota = COO.value,
        CNPJNota = CNPJ.value,
        valorNota = valor.value
    ]

    nota = auxRegistro;

    localStorage.setItem("dadosNota", JSON.stringify(nota));
    alert("Nota cadastrada com sucesso!")

    //window.location.href = '../index.html'

    document.form.reset();
}


//############# CADASTRAR/LOGIN #####################//

function Cadastrar(){
    var CPF = document.getElementById('digiteSeuEMailOuCpf').value;
    
    
    var dados = JSON.parse(localStorage.getItem("dadosUsuario"));

    if(dados == null){
        localStorage.setItem("dadosUsuario", "[]");
        dados = [];
    }
    
    var auxRegistro = {
        nome: Usuario.value,
        senha: Senha.value
    }

    dados.push(auxRegistro);

    localStorage.setItem("dadosUsuario", JSON.stringify(dados));
}
