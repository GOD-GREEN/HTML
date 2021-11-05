

function limpar(){
    document.getElementById('contato').style = "display: none;"
    document.getElementById('back').style = "display: none;"
    document.getElementById('dadosPessoais').style = "display: none;"
    document.getElementById('endereco').style = "display: none;"
}

function login(){

}

function next(){
    limpar()
    document.getElementById('contato').style = "display: block;"
    document.getElementById('back').style = "display: block;"
}

function back(){
    limpar()
    document.getElementById('dadosPessoais').style = "display: block;"
    
}

function backCont(){
    limpar()
    document.getElementById('contato').style = "display: block;"
    document.getElementById('back').style = "display: block;"
}

function nextEnd(){
    limpar();
    document.getElementById('endereco').style = "display: block;"
    document.getElementById('backCont').style = "display: block;"
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

function menuCadastrar(){
    var CPF = document.getElementById('registrarSeuCPF');
    
    var dados = JSON.parse(localStorage.getItem("dadosUsuario"));

    if(dados == null){
        localStorage.setItem("dadosUsuario", "[]");
        dados = [];
    }
    
    var auxRegistro = [
        CPFuser = CPF.value

    ]

    dados = auxRegistro;

    localStorage.setItem("dadosUsuario", JSON.stringify(dados));

    window.location.href = "../CadastroUsuario/cadastroUsuario.html"


}

function carregarDados(){

    console.log("Rodou")

    cadUser = document.getElementById('cadasUser');

    cadUser.value = JSON.parse(localStorage.getItem("dadosUsuario"));

}
