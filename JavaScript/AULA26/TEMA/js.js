///DECLARANDO TIPOS E CLASSES

class Comida{
    ingrediente;
    preco;

    constructor(ingrediente,preco){
        this.ingrediente = ingrediente;
        this.preco = preco;
    }
}

class Pessoa{
    nome;
    telefone;
}

class Lanche extends Comida{
    nome;

    constructor(nome,ingrediente,preco){
        super(ingrediente,preco);//construtor da super classe
        this.nome = nome;
    }

    imprime(){
        let ingredientes ="";

        for(let i = 0 ; i<this.ingrediente.length ; i++){
            ingredientes +=  this.ingrediente[i] + ", ";
        }

        let impressao = "Nome do Lanche: " + this.nome + "<br/>" +
                        "Ingredientes: " + ingredientes + "<br/>" +
                        "Preço: R$" + this.preco.toFixed(2) + "<br/>" ;
        
        return impressao;
    }
}

class Suco extends Comida{
    constructor(ingrediente,preco){
        super(ingrediente,preco);//construtor da super classe
    }

    imprime(){
        let ingredientes ="";

        for(let i = 0 ; i<this.ingrediente.length ; i++){
            ingredientes +=  this.ingrediente[i] + ", ";
        }

        let impressao = "Ingredientes: " + ingredientes + "<br/>" +
                        "Preço: R$" + this.preco.toFixed(2) + "<br/>" ;
        
        return impressao;
    }
}

class Entregador extends Pessoa{
    constructor(n,t){
        super();
        super.nome = n;
        super.telefone = t;
    }

    imprime(){
        let impressao = "Nome do Entregador: " + this.nome + "<br/>" +
                        "Telefone: " + this.telefone + "<br/>";
        
        return impressao;
    }

}

class Cliente extends Pessoa{
    endereco;

    constructor(nome,telefone,endereco){
        super();
        super.nome = nome;
        super.telefone = telefone;
        this.endereco = endereco;
    }

    imprime(){
        let impressao = "Nome do Cliente: " + this.nome + "<br/>" +
                        "Telefone: " + this.telefone + "<br/>" +
                        "Endereço: " + this.endereco + "<br/>";
        
        return impressao;
    }
}

class Pedido{
    cliente;
    entregador;
    suco;
    lanche;

    constructor(cliente,entregador,suco,lanche){
        this.cliente=cliente;
        this.entregador = entregador;
        this.suco = suco;
        this.lanche = lanche;
    }
}

//////////////// DECLARAÇÃO DE VARIÁVEIS GLOBAIS

var listaCliente = [], listaLanche = [], listaSuco = [], listaEntregador = [],
    listapedido = [];

var qtdIngrediente = 1;
var qtdIngredienteSuco =1;

//////////////// FUNCTIONS

function exibeTela(tela){
    let telas = document.getElementsByClassName("esconde");

    for(let i = 0; i < telas.length ; i++){
        telas[i].style.display = "none";
    }

    telas[tela].style.display = "block";
}

function removeIngredienteLanc(){
    if(qtdIngrediente >= 2) {
    document.getElementsByClassName('ing')[qtdIngrediente-1].remove()
    qtdIngrediente--
    }
}

function cadastraCliente(){
    listaCliente.push(new Cliente(
        document.getElementById("inputNomeCli").value,
        document.getElementById("inputTelCli").value,
        document.getElementById("inputEnderecoCli").value
    ));

    document.formCliente.reset();
    console.log(listaCliente);
}



function cadastraLanche(){
    let inputIngredientes = document.getElementsByName("inputIngredienteLanc");
    let ingredientes = [];
    
    for(let i = 0; i<inputIngredientes.length ; i++){
        ingredientes.push(inputIngredientes[i].value);

       
    }

    listaLanche.push(new Lanche(
        document.getElementById("inputNomeLanc").value,
        ingredientes,
        Number(document.getElementById("inputPrecoLanc").value)
    ));

    

    document.formLanche.reset();
}

function cadastraSuco(){
    let inputIngredientes = document.getElementsByName("inputIngredienteSuco");
    let ingredientes = [];
    
    for(let i = 0; i<inputIngredientes.length ; i++){
        ingredientes.push(inputIngredientes[i].value);
    }

    listaSuco.push(new Suco(
        ingredientes,
        Number(document.getElementById("inputPrecoSuco").value)
    ));

    document.formSuco.reset();
}

function cadastraEntregador(){
    listaEntregador.push(new Cliente(
        document.getElementById("inputNomeEntregador").value,
        document.getElementById("inputTelEntregador").value
    ));

    document.formEntregador.reset();
}

function validaCliente(){
    if(document.getElementById("inputIdCli").value!= "" ){
        let achou = false;
        let ondeAchou = 0;
        let cliente;
        for(let i = 0 ; i < listaCliente.length ; i++){
            if(listaCliente[i].nome.toLowerCase().startsWith(document.getElementById("inputIdCli").value.toLowerCase())){
                achou = true;
                ondeAchou = i;
            }
        }
        if(achou){
            cliente =  "<div class='container valida'>"+
                            listaCliente[ondeAchou].imprime() +
                            "</div>";
        } else {
            cliente = "<h3 class='erroValida'>Cliente nao encontrado</h3>";
        }

        document.getElementById("validaCliente").innerHTML = cliente;
    }
}

function validaLanche(){
    if(document.getElementById("inputIdLanche").value!= "" ){
        let achou = false;
        let ondeAchou = 0;
        let lanche;
        for(let i = 0 ; i < listaLanche.length ; i++){
            if(listaLanche[i].nome.toLowerCase().startsWith(document.getElementById("inputIdLanche").value.toLowerCase())){
                achou = true;
                ondeAchou = i;
            }
        }
        if(achou){
            lanche =  "<div class='container valida'>"+
                            listaLanche[ondeAchou].imprime() +
                            "</div>";
        } else {
            lanche = "<h3 class='erroValida'>Lanche nao encontrado</h3>";
        }

        document.getElementById("validaLanche").innerHTML = lanche;
    }
}

function validaSuco(){
    if(document.getElementById("inputIdSuco").value!= "" ){
        let achou = false;
        let ondeAchou = 0;
        let suco;
        for(let i = 0 ; i < listaSuco.length ; i++){
            if(listaSuco[i].ingrediente[0].toLowerCase().startsWith(document.getElementById("inputIdSuco").value.toLowerCase())){
                achou = true;
                ondeAchou = i;
            }
        }
        if(achou){
            suco =  "<div class='container valida'>"+
                            listaSuco[ondeAchou].imprime() +
                            "</div>";
        } else {
            suco = "<h3 class='erroValida'>Suco nao encontrado</h3>";
        }

        document.getElementById("validaSuco").innerHTML = suco;
    }
}

function validaEntregador(){
    if(document.getElementById("inputIdEntregador").value!= "" ){
        let achou = false;
        let ondeAchou = 0;
        let entregador;
        for(let i = 0 ; i < listaEntregador.length ; i++){
            if(listaEntregador[i].nome.toLowerCase().startsWith(document.getElementById("inputIdEntregador").value.toLowerCase())){
                achou = true;
                ondeAchou = i;
            }
        }
        if(achou){
            entregador =  "<div class='container valida'>"+
                            listaEntregador[ondeAchou].imprime() +
                            "</div>";
        } else {
            entregador = "<h3 class='erroValida'>Entregador nao encontrado</h3>";
        }

        document.getElementById("validaEntregador").innerHTML = entregador;
    }
}

function cadastraPedido(){
    let cliente = document.getElementById("validaCliente");
    let lanche = document.getElementById("validaLanche");
    let suco = document.getElementById("validaSuco");
    let entregador = document.getElementById("validaEntregador");

    if(
        cliente.innerHTML != "" &&
        lanche.innerHTML != "" &&
        suco.innerHTML != "" &&
        entregador.innerHTML != ""
    ){
        listaPedido.push(new Pedido(cliente.innerHTML,
                                    entregador.innerHTML,
                                    suco.innerHTML,
                                    lanche.innerHTML));
    } else {
        window.alert("TODOS OS CAMPOS SÃO OBRIGATÓRIOS");
    }
}

function addIngredienteLanc(){
    qtdIngrediente++;
    let add = '<div class="form-group ing">' +
                    '<label class="col-md-4 control-label" for="inputIngredienteLanc">Ingrediente '+qtdIngrediente+'</label>'+
                    '<div class="col-md-4">'+
                        '<input name="inputIngredienteLanc" type="text"'+
                            'class="form-control input-md">'+

                    '</div>'+
                    '<div class="col-md-1">'+
                    '<span class="material-icons red" onclick="removeIngredienteLanc()">' +
                            'remove_circle' +
                            '</span>' +
                        '<span class="material-icons green" onclick="addIngredienteLanc()">'+
                            'control_point'+
                        '</span></div></div>';
    
    document.getElementById("addIngrediente").innerHTML += add;
}


function addIngredienteSuco(){
    qtdIngredienteSuco++;
    let add = '<div class="form-group">' +
                    '<label class="col-md-4 control-label" for="inputIngredienteSuco">Ingrediente '+qtdIngredienteSuco+'</label>'+
                    '<div class="col-md-4">'+
                        '<input name="inputIngredienteSuco" type="text"'+
                            'class="form-control input-md">'+

                    '</div>'+
                    '<div class="col-md-1">'+
                        '<span class="material-icons green" onclick="addIngredienteSuco()">'+
                    '        control_point'+
                        '</span></div></div>';
    
    document.getElementById("addIngredienteSuco").innerHTML += add;
}