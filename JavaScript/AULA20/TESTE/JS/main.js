let funcio = [];

function home() {
    document.getElementById('home').style.display = 'block';
    document.getElementById('formulaF').style.display = 'none';
    document.getElementById('resulF').style.display = 'none';
    document.getElementById('formulaP').style.display = 'none';
    document.getElementById('resulP').style.display = 'none';
    document.getElementById('formulaC').style.display = 'none';
    document.getElementById('resulC').style.display = 'none';
}

//Funçoes Cadastro Funcionarios VVVV
function cadastrarF() {
    document.getElementById('formulaF').style.display = 'block';
    document.getElementById('resulF').style.display = 'none';
    document.getElementById('formulaP').style.display = 'none';
    document.getElementById('resulP').style.display = 'none';
    document.getElementById('formulaC').style.display = 'none';
    document.getElementById('resulC').style.display = 'none';
    document.getElementById('home').style.display = 'none';
}

function cadastraF() {

    funcio.push({
        nome: document.getElementById('name').value,
        nasc: document.getElementById('nasc').value,
        tel: document.getElementById('tel').value,
        email: document.getElementById('email').value
    })
    alert('Cadastro Realizado com Sucesso')

    document.FormFunc.reset()

    document.getElementById('funcioCadastF').innerHTML = '';

    for (let i = 0; i < funcio.length; i++) {
        document.getElementById('funcioCadastF').innerHTML += '<div id="boxCad"> Nome: ' + funcio[i].nome + '<br />' +
            'Nacimento: ' + funcio[i].nasc + '<br />' +
            'Telefone: ' + funcio[i].tel + '<br />' +
            'E-Mail: ' + funcio[i].email + '</div>';
    }
}

function cadastradosF() {
    document.getElementById('formulaF').style.display = 'none';
    document.getElementById('resulF').style.display = 'table';
    document.getElementById('formulaP').style.display = 'none';
    document.getElementById('resulP').style.display = 'none';
    document.getElementById('formulaC').style.display = 'none';
    document.getElementById('resulC').style.display = 'none';
    document.getElementById('home').style.display = 'none';

    if(document.getElementById('funcioCadastF').innerHTML == ''){
        document.getElementById('funcioCadastF').innerHTML += '<div class="none"> Nenhum Funcionário dadastrado. </div>'
    }
}

//Funçoes Cadastros Clientes VVVV

let cliente = [];

function cadastrarC() {

    document.getElementById('formulaF').style.display = 'none';
    document.getElementById('resulF').style.display = 'none';
    document.getElementById('formulaP').style.display = 'none';
    document.getElementById('resulP').style.display = 'none';
    document.getElementById('home').style.display = 'none';
    document.getElementById('formulaC').style.display = 'block';
    document.getElementById('resulC').style.display = 'none';
}

function cadastraC() {

    cliente.push({
        nome: document.getElementById('nameC').value,
        tel: document.getElementById('telC').value
    })

    alert('Cadastro Realizado com Sucesso')


    document.getElementById('funcioCadastC').innerHTML = '';

    for (let i = 0; i < cliente.length; i++) {
        document.getElementById('funcioCadastC').innerHTML += '<div id="boxCad"> Nome: ' + cliente[i].nome + '<br />' +
            'Telefone: ' + cliente[i].tel + '<br />';
    }
}

function cadastradosC() {
    document.getElementById('formulaC').style.display = 'none';
    document.getElementById('resulC').style.display = 'table';
    document.getElementById('formulaF').style.display = 'none';
    document.getElementById('resulF').style.display = 'none';
    document.getElementById('formulaP').style.display = 'none';
    document.getElementById('resulP').style.display = 'none';
    document.getElementById('home').style.display = 'none';

    if(document.getElementById('funcioCadastC').innerHTML == ''){
        document.getElementById('funcioCadastC').innerHTML += '<div class="none"> Nenhum Cliente dadastrado. </div>'
    }
}

//Funçoes Cadsastros Produdos VVVV

let produtos = [];

function cadastrarP() {
    document.getElementById('formulaP').style.display = 'block';
    document.getElementById('resulP').style.display = 'none';
    document.getElementById('formulaF').style.display = 'none';
    document.getElementById('resulF').style.display = 'none';
    document.getElementById('formulaC').style.display = 'none';
    document.getElementById('resulC').style.display = 'none';
    document.getElementById('home').style.display = 'none';
}

function cadastraP() {

    produtos.push({
        nomeProd: document.getElementById('nomeProd').value,
        fab: document.getElementById('fab').value,
        preco: Number(document.getElementById('preco').value).toFixed(2)
    })
    alert('Cadastro Realizado com Sucesso')
    
    document.getElementById('funcioCadastP').innerHTML = '';

    for (let i = 0; i < produtos.length; i++) {
        document.getElementById('funcioCadastP').innerHTML += '<div id="boxCad"> Nome: ' + produtos[i].nomeProd + '<br />' +
            'Fabricação: ' + produtos[i].fab + '<br />' +
            'Preço: R$' + produtos[i].preco + '</div>';
    }
    
}

function cadastradosP() {
    document.getElementById('formulaP').style.display = 'none';
    document.getElementById('resulP').style.display = 'table';
    document.getElementById('formulaF').style.display = 'none';
    document.getElementById('resulF').style.display = 'none';
    document.getElementById('formulaC').style.display = 'none';
    document.getElementById('resulC').style.display = 'none';
    document.getElementById('home').style.display = 'none';

    if(document.getElementById('funcioCadastP').innerHTML == ''){
        document.getElementById('funcioCadastP').innerHTML += '<div class="none"> Nenhum Produto dadastrado. </div>'
    }
}