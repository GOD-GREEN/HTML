/*######### VARIAVEIS DO SISTEMA ############*/

var loged = Boolean;

var i = 1;

/*###########################################*/
/*##### FUNÇOES PARA CONTROLE DE PAGINA #####*/
/*###########################################*/

function cadNote() {
    window.location.href = '../CadastraNota/cadNota.html';
}

function limpar() {

    document.getElementById('contato').style = "display: none;"
    document.getElementById('back').style = "display: none;"
    document.getElementById('dadosPessoais').style = "display: none;"
    document.getElementById('endereco').style = "display: none;"
    document.getElementById('senha').style = "display: none;"
    document.getElementById('finalizar').style = "display: none;"
}

function next() {
    limpar()
    i++;
    if (i >= 4) {
        i = 4;
        document.getElementById('submitButton').style = "display: none;"
    }

    let element = document.getElementById(`mody${i}`);
    let element0 = document.getElementById(`mod${i}`);
    element.classList.add("active");
    element0.classList.remove("dont");
    nextStat()
}

function back() {
    limpar()
    i--;
    if (i <= 1) {
        document.getElementById('back').style = "display: none;"
        i = 1;
    }
    document.getElementById('submitButton').style = "display: block;"
    let element = document.getElementById(`mody${i+1}`);
    let element0 = document.getElementById(`mod${i+1}`);
    element.classList.remove("active");
    element0.classList.add("dont");
    nextStat()
}

function nextStat() {

    console.log(i)
    switch (i) {
        case 1:
            document.getElementById('dadosPessoais').style = "display: block;"
            document.getElementById('back').style = "display: none;"

            break;
        case 2:
            document.getElementById('contato').style = "display: block;"
            document.getElementById('back').style = "display: block;"
            break;

        case 3:
            document.getElementById('endereco').style = "display: block;"
            document.getElementById('back').style = "display: block;"
            break;

        case 4:
            document.getElementById('senha').style = "display: block;"
            document.getElementById('back').style = "display: block;"
            document.getElementById('finalizar').style = "display: block;"
            break;


    }

}

/*########### ENVIO DE EMAIL ##############*/


function sendEmail() {
    let email = document.getElementById('Mails').value;

    Email.send({
        "Host": "smtp.elasticemail.com",
        "Key": "<YOURKEYMAIL>",
        "Username": "<user.sososo@gogg.com>",
        "Password": "YOURPASSWORD",
        "Server": "smtp.elasticemail.com",
        "Port": "2525",
        "To": `< ${email} >`,
        "From": `<user.sososo@gogg.com>`,
        "Subject": "<Olá {{usuário}}, para recuperar ou alterar sua senha clique AQUI e informe o código: 00AE-556",
        "Message": "<Lorem ipsum nam ultrices nostra ut id justo nostra nulla porta sociosqu eleifend," +
            "pharetra himenaeos ipsum inceptos porta primis donec consequat ultrices fusce.congue dolor hendrerit pellentesque odio vestibulum arcu volutpat libero suscipit curabitur iaculis vel bibendum taciti est," +
            "tortor augue sodales vel elit hendrerit accumsan aliquam curabitur purus sociosqu nulla lorem et.taciti lacus in ultricies a ad venenatis curabitur turpis," +
            "ligula lorem feugiat in purus justo lacinia. >",
        "Body": "<img src='../IMG/logo.png'>",
    }).then(
        message => alert("mail sent successfully")
    );


    window.location.href = "../RedefinirSenha/EmailEnviado.html"
}

/*############# PDF VIEW ######################*/

function view(){
    window.open("../IMG/8.pdf", "_blank");
    window.location.href = "../RedefinirSenha/Sucesso.html";
}


/*########## FUNÇOES PARA BUSCAR CEP ############*/

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
    return true;
}

function buscaCEP(cep_informado) {
    var CEP = document.getElementById("CEP");
    var Logradouro = document.getElementById("Logradouro");
    var UF = document.getElementById("UF");
    var Cidade = document.getElementById("Cidade");
    var Bairro = document.getElementById("Bairro");
    $.ajax({
        type: "GET",
        url: "http://cep.republicavirtual.com.br/web_cep.php?cep=" + cep_informado + "&formato=json",
        dataType: "json",
        error: function () {
            alert('Houve um problema de comunicacao');
        }
    }).done(function (dados) {
        var CEP = "";
        CEP = cep_informado;
        UF.value = dados.uf;
        Cidade.value = dados.cidade;
        Bairro.value = dados.bairro;
        Logradouro.value = dados.logradouro;

        console.log(resultado);
    });
}



//############## CADASTRAR NOTA ####################//

function cadastraNota() {
    let dataNota = document.getElementById('dataNota');
    let COONota = document.getElementById('COONota');
    let CNPJNota = document.getElementById('CNPJNota');
    let valorNota = document.getElementById('valorNota');

    localStorage.setItem('data', `${dataNota.value}`);
    localStorage.setItem('COONota', `${COONota.value}`);
    localStorage.setItem('CNPJNota', `${CNPJNota.value}`);
    localStorage.setItem('valorNota', `${valorNota.value}`);

    dataNota.value = "";
    COONota.value = "";
    CNPJNota.value = "";
    valorNota.value = "";

    alert("Nota cadastrada com sucesso!!");
}

function carregaCPF() {
    let CPF = localStorage.getItem('CPFuser');
    console.log(CPF)
    document.getElementById('cadCPF').value = CPF;
}


//############# CADASTRAR/LOGIN #####################//

function menuCadastrar() {
    let CPF = document.getElementById('SeuCPF');

    localStorage.setItem("CPFuser", `${CPF.value}`);

    window.location.href = "../CadastroUsuario/cadastroUsuario.html"

    CPF = localStorage.getItem("CPFuser")

    console.log(CPF)

    document.getElementById('cadCPF') = CPF.value;

}

function carregarDados() {

    console.log("Rodou")

    cadUser = document.getElementById('cadasUser');

    cadUser.value = JSON.parse(localStorage.getItem("dadosUsuario"));

}


/*################## FINALIZAR ######################*/


function finalizar() {
    let verify = true;
    let Pass = document.getElementById('pass');
    let Comfirm = document.getElementById('confirmarSenha');

    if (Pass.value != Comfirm.value) {
        verify = false;
        alert("As senhas não são iguais");
    }else{

    function dadosPessoais () {
        let CPF = document.getElementById('cadCPF');
        let Nasc = document.getElementById('cadNasc');
        let RG = document.getElementById('cadRG');
        let Nome = document.getElementById('cadNome');

            localStorage.setItem('CPF', `${CPF.value}`);
            localStorage.setItem('Nasc', `${Nasc.value}`);
            localStorage.setItem('RG', `${RG.value}`);
            localStorage.setItem('Nome', `${Nome.value}`);

    }

    class contato {
        Email = document.getElementById('cadEmail');
        Tell_0 = document.getElementById('cadTell');
        Tell_1 = document.getElementById('cadTell0');

        constructor(Email, Tell_0, Tell_1) {
            this.Email = Email;
            this.Tell_0 = Tell_0;
            this.Tell_1 = Tell_1;
        }
        contatoUser() {
            localStorage.setItem('Email', `${this.Email.value}`);
            localStorage.setItem('Tell_0', `${this.Tell_0.value}`);
            localStorage.setItem('Tell_1', `${this.Tell_1.value}`);
        }
    }

    class endereco {
        CEP = document.getElementById('CEP');
        Logra = document.getElementById('Logradouro');
        Num = document.getElementById('Numero');
        Comp = document.getElementById('Complemento');
        Bairro = document.getElementById('Bairro');
        Cidade = document.getElementById('Cidade');
        UF = document.getElementById('UF');

        constructor(CEP, Logra, Num, Comp, Bairro, Cidade, UF) {
            this.CEP = CEP;
            this.Logra = Logra;
            this.Num = Num;
            this.Comp = Comp;
            this.Bairro = Bairro;
            this.Cidade = Cidade;
            this.UF = UF;

        }
        End_User() {
            localStorage.setItem('CEP', `${this.CEP.value}`);
            localStorage.setItem('Logra', `${this.Logra.value}`);
            localStorage.setItem('Num', `${this.Num.value}`);
            localStorage.setItem('Comp', `${this.Comp.value}`);
            localStorage.setItem('Bairro', `${this.Bairro.value}`);
            localStorage.setItem('Cidade', `${this.Cidade.value}`);
            localStorage.setItem('UF', `${this.UF.value}`);
        }
    }


    function Senha() {
        
        Password = Pass;

            localStorage.setItem('Pass', `${Pass.value}`);        
        
    }

Senha()
dadosPessoais()

    //localStorage.setItem()

        window.location.href = '../CadastroConcluido/cadConcluido.html';
    }
}

/*######### GET USERNAME ##################*/

function getUsername(){
    document.getElementById('.User').innerText = localStorage.getItem('Nome');
}


/*########### FUNÇOES DE LOGIN ############*/
/*
var logon = function (){}

class user extends contato extends endereco{
    constructor(nome, CPF, nascimento, RG)
    
}
*/