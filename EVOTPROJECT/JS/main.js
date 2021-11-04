
function menuCadastra(){

}

function cadastraNota(){
    var data  =  document.getElementById('dataNota').value
    var COO   =   document.getElementById('COONota').value
    var CNPJ  =  document.getElementById('CNPJNota').value
    var valor = document.getElementById('valorNota').value

    var nota = JSON.parse(localStorage.getItem("dadosNota"))

    if(nota == null){
        localStorage.setItem("dadosNota", "[]");
        nota = [];
    }
    
    var auxRegistro = {
        dataNota: data.value,
        COONota: COO.value,
        CNPJNota: CNPJ.value,
        valorNota: valor.value
    }

    nota.push(auxRegistro);

    localStorage.setItem("dadosNota", JSON.stringify(nota));
    alert("Nota cadastrada com sucesso!")

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


