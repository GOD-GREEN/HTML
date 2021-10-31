//################# CLASSES ####################//

class Suco {
    ingredientes;
    preco;
    constructor(ingredientes, preco) {
        this.ingredientes = ingredientes;
        this.preco = preco;
    }

    imprime() {
        let imprimir = '<article class="menu0 sp">' +
            '<div class="aa">' +
            '<h4 class="ab"><span style="text-align: left">' +
            '<span style="font-family: Sacramento;font-size:' +
            '38px;color: #fb1d25; text-aling:center;"> Suco/Vitamina  </span><br>' +
            'Preço</span></h4>' +
            '<h2 class="ac"> R$:' + this.preco + '</h2>' +
            '<ul class="af">' +
            '<li>' + this.ingredientes + '</li>' +
            '</ul>' +
            '<div class="ca">' +
            '<a href="#" class="btn0 btn btn-success">' +
            '<span class="glyphicon glyphicon-shopping-cart">' +
            '</span> Comprar</a>' +
            '</div>' +
            '</div>' +
            '</article>'

        return imprimir;
    }
}

class Lanche extends Suco {
    nome;
    constructor(nome, ingredientes, preco) {
        super(ingredientes, preco);
        this.nome = nome;

    }

    imprime() {
        let imprimir = '<article class="menu0 sp">' +
            '<div class="aa">' +
            '<h4 class="ab"><span style="text-align: left">' +
            '<span style="font-family: Sacramento;font-size:' +
            '38px;color: #fb1d25">' + this.nome + '</span><br>' +
            'Preço</span></h4>' +
            '<h2 class="ac"> R$:' + this.preco + '</h2>' +
            '<ul class="af">' +
            '<li>' + this.ingredientes + '</li>' +
            '</ul>' +
            '<div class="ca">' +
            '<a href="#" class=" btn0 btn btn-success">' +
            '<span class="glyphicon glyphicon-shopping-cart">' +
            '</span> Comprar</a>' +
            '</div>' +
            '</div>' +
            '</article>'

        return imprimir;
    }
}

class Client {
    nome;
    telefone;
    endereco;
    constructor(nome, telefone, endereco) {
        this.nome = nome;
        this.telefone = telefone;
        this.endereco = endereco;
    }
    imprime(){
        let imprimir = "<h6>Cliente Cadastrado</h6>" +
                       "Nome: " + this.nome + "<br />" +
                       "Telefone: " + this.telefone + "<br />" +
                       "Endereço: " + this.endereco

        return imprimir;
    }
}

class Entregad extends Client {
    telefone;
    constructor(nome, telefone) {
        super(nome);
        this.telefone = telefone;
    }
    imprime(){
        let imprimir = "<h6>Entregador Cadastrado</h6>" +
                       "Nome: " + this.nome + "<br />" +
                       "Telefone: " + this.telefone
                       

        return imprimir;
    }
}


//################## VARIAVEIS ###################//

let listaSucos = [];
let listaLanches = [];
let listaClientes = [];
let listaEntregadores = [];
var gambiarra = 0;

//################## FUNCTIONS ###################//

function Home() {
    document.getElementsByClassName('banner0')[0].style.display = "block"
    document.getElementsByClassName('block0')[0].style.display = "none"
    document.getElementById('map').style.display = "none"
}


function Chegar() {
    document.getElementsByClassName('banner0')[0].style.display = "none"
    document.getElementsByClassName('block0')[0].style.display = "none"
    document.getElementById('map').style.display = "block"
}

function Lanches() {
    document.getElementById('form').style.display = 'block';
    document.getElementsByClassName('banner0')[0].style.display = "none"
    document.getElementsByClassName('block0')[0].style.display = "none"
    document.getElementsByClassName('form-group')[0].style.display = 'block';
    document.getElementsByClassName('form-group')[1].style.display = 'none';
    document.getElementsByClassName('form-group')[2].style.display = 'block';
    document.getElementsByClassName('form-group')[3].style.display = 'block';
    document.getElementsByClassName('form-group')[4].style.display = 'none';
    document.getElementsByClassName('form-group')[5].style.display = 'none';
    document.getElementsByClassName('form-group')[6].style.display = 'block';
    document.getElementById('cardapio').style.display = "none";
    gambiarra = 0;
}

function tipoCadast() {
    switch (0 == 0) {
        case document.getElementById('produto').value == '0':
            document.getElementsByClassName('form-group')[1].style.display = 'none';
            document.getElementsByClassName('form-group')[2].style.display = 'block';
            document.getElementsByClassName('form-group')[3].style.display = 'block';
            document.getElementsByClassName('form-group')[4].style.display = 'none';
            document.getElementsByClassName('form-group')[5].style.display = 'none';
            document.getElementsByClassName('form-group')[6].style.display = 'block'
            gambiarra = 0;
            break;

        case document.getElementById('produto').value == '1':
            document.getElementsByClassName('form-group')[1].style.display = 'block';
            document.getElementsByClassName('form-group')[2].style.display = 'block';
            document.getElementsByClassName('form-group')[3].style.display = 'block';
            document.getElementsByClassName('form-group')[4].style.display = 'none';
            document.getElementsByClassName('form-group')[5].style.display = 'none';
            document.getElementsByClassName('form-group')[6].style.display = 'block';
            gambiarra = 1;
            break;
    }

}

function Entregador() {
    document.getElementById('pessoa').style.display = "none";
    document.getElementById('form').style.display = 'block';
    document.getElementsByClassName('banner0')[0].style.display = "none"
    document.getElementsByClassName('block0')[0].style.display = "none"
    document.getElementsByClassName('form-group')[0].style.display = 'none';
    document.getElementsByClassName('form-group')[1].style.display = 'block';
    document.getElementsByClassName('form-group')[2].style.display = 'none';
    document.getElementsByClassName('form-group')[3].style.display = 'none';
    document.getElementsByClassName('form-group')[4].style.display = 'block';
    document.getElementsByClassName('form-group')[5].style.display = 'none';
    document.getElementsByClassName('form-group')[6].style.display = 'block';
    document.getElementById('cardapio').style.display = "none";
    gambiarra = 4;

}

function Clientes() {
    document.getElementById('pessoa').style.display = "none";
    document.getElementById('form').style.display = 'block';
    document.getElementsByClassName('banner0')[0].style.display = "none"
    document.getElementsByClassName('block0')[0].style.display = "none"
    document.getElementsByClassName('form-group')[0].style.display = 'none';
    document.getElementsByClassName('form-group')[1].style.display = 'block';
    document.getElementsByClassName('form-group')[2].style.display = 'none';
    document.getElementsByClassName('form-group')[3].style.display = 'none';
    document.getElementsByClassName('form-group')[4].style.display = 'block';
    document.getElementsByClassName('form-group')[5].style.display = 'block';
    document.getElementsByClassName('form-group')[6].style.display = 'block';
    document.getElementById('cardapio').style.display = "none";
    gambiarra = 5;
}

function Home() {
    document.getElementById('form').style.display = 'none';
    document.getElementsByClassName('banner0')[0].style.display = "block"
    document.getElementsByClassName('block0')[0].style.display = "none"
    document.getElementById('cardapio').style.display = "none";
}

function cadastra() {
    let Produto = document.getElementById('produto').value;
    switch (gambiarra) {
        case 0:
            listaSucos.push(new Suco(document.getElementById('ingred').value,
                Number(document.getElementById('preco').value).toFixed(2)))
            break;

        case 1:
            listaLanches.push(new Lanche(document.getElementById('nome').value,
                document.getElementById('ingred').value,
                Number(document.getElementById('preco').value).toFixed(2)))
            break;

        case 4:
            listaEntregadores.push(new Entregad(document.getElementById('nome').value,
                document.getElementById('tel').value
            ));
            break;

        case 5:
            listaClientes.push(new Client(document.getElementById('nome').value,
                document.getElementById('tel').value,
                document.getElementById('End').value
            ))
            break;
    }

    document.form.reset();

}

function Cardapio() {

    document.getElementById('cardapio').innerHTML = "";

    for (let i = 0; i < listaLanches.length; i++) {
        document.getElementById('cardapio').innerHTML += '<div>' + listaLanches[i].imprime() + '</div>';

    }

    for (let i = 0; i < listaSucos.length; i++) {
        document.getElementById('cardapio').innerHTML += '<div>' + listaSucos[i].imprime() + '</div>';
        
    }
    document.getElementById('pessoa').style.display = "none";
    document.getElementById('cardapio').style.display = "block";
    document.getElementById('form').style.display = 'none';
    document.getElementsByClassName('banner0')[0].style.display = "none"
    document.getElementsByClassName('block0')[0].style.display = "none"

}

function Pessoas(){

    document.getElementById('pessoa').innerHTML = '';

    for (let i = 0; i < listaClientes.length; i++) {
        document.getElementById('pessoa').innerHTML += '<div class="registro">' + listaClientes[i].imprime() + '</div>';

    }

    for (let i = 0; i < listaEntregadores.length; i++) {
        document.getElementById('pessoa').innerHTML += '<div class="registro">' + listaEntregadores[i].imprime() + '</div>';

    }

    document.getElementById('pessoa').style.display = "block";
    document.getElementById('cardapio').style.display = "none";
    document.getElementById('form').style.display = 'none';
    document.getElementsByClassName('banner0')[0].style.display = "none"
    document.getElementsByClassName('block0')[0].style.display = "none"
}