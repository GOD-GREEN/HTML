
function menuCadastra(){
    
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


