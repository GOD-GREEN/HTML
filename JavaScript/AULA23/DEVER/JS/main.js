//######################## CLASSES ##################

class Veiculo{
    modelo;
    fabricante;
    ano;
    cor;

}

class Car extends Veiculo{
    cambio;
    motor;
    arCond;
    direcao;

    constructor(modelo,fabricante,ano,cor,cambio,motor,arCond,direcao){
        super();

        super.modelo = modelo;
        super.fabricante = fabricante;
        super.ano = ano;
        super.cor = cor;

        this.cambio = cambio;
        this.motor = motor;
        this.arCond = arCond;
        this.direcao = direcao;
    }
    getModelo(){
        return this.modelo;
    }
    getFabricante(){
        return this.fabricante;
    }
    getAno(){
        return this.ano;
    }
    getCor(){
        return this.cor;
    }

    getCambio(){
        return this.cambio;
    }
    getMotor(){
        return this.motor;
    }
    getArCond(){
        return this.arCond;
    }
    getDirecao(){
        return this.direcao;
    }
}

class Bikes extends Veiculo{
    cilindrada;
    cilindros;
    categoria;

    constructor(modelo,fabricante,ano,cor,cilindrada,cilindros,categoria){
        super();

        super.modelo = modelo;
        super.fabricante = fabricante;
        super.ano = ano;
        super.cor = cor;

        this.cilindrada = cilindrada;
        this.cilindros = cilindros;
        this.categoria = categoria;
    }

    getModelo(){
        return this.modelo;
    }
    getFabricante(){
        return this.fabricante;
    }
    getAno(){
        return this.ano;
    }
    getCor(){
        return this.cor;
    }

    getCilindrada(){
        return this.cilindrada;
    }
    getCilindros(){
        return this.cilindros;
    }
    getCategoria(){
        return this.categoria;
    }
}

//#################### VARIAVEIS ####################

let Carros = [];

let Motos = [];

//#################### FUNCTIONS ####################

function SelectCar(){

    document.getElementById('cadAll').style.display = 'none';

    document.getElementsByName('Bikes')[0].style.display = "none";
    document.getElementsByName('Carros')[0].style.display = "block";
 
    document.getElementsByClassName('insertBikes')[0].style.display = 'none'
    document.getElementsByClassName('insertCar')[0].style.display = 'block'

    document.getElementById('selectForm').style.display = 'none'

    document.getElementById('formula').style.display = "block"

    document.getElementsByClassName('insertCar')[0].innerHTML = 
    //#########CAMBIO

    '<div class="form-group row">' +
    '<label for="cor" class="col-3 col-form-label">Câmbio</label>' +
    '<div class="col-9">' +
    '<input id="cambio" name="cambio" placeholder="Manual ou Automatico" type="text"' +
    'class="form-control">' +
    '</div>' + '</div>' +

    //##########MOTOR
    '<div class="form-group row">' +
    '<label for="cor" class="col-3 col-form-label">Potencia</label>' +
    '<div class="col-9">' +
    '<input id="motor" name="motor" placeholder=" 1.8, 2.0 etc" type="number"' +
    'class="form-control">' +
    '</div>' + '</div>' +

    //##########AR-COND
    '<div class="form-group row">' +
    '<label for="cor" class="col-3 col-form-label">Ar Condicio</label>' +
    '<div class="col-9">' +
    '<input id="arCond" name="arCond" placeholder="Apenas Sim ou Não" type="text"' +
    'class="form-control">' +
    '</div>' + '</div>' +

    //###########DIREÇÃO
    '<div class="form-group row">' +
    '<label for="cor" class="col-3 col-form-label">Direção</label>' +
    '<div class="col-9">' +
    '<input id="direcao" name="direcao" placeholder="Mecanica, Hidraulica ou Elétrica" type="text"' +
    'class="form-control">' +
    '</div>' + '</div>'
}

function SelectBike(){

    document.getElementById('cadAll').style.display = 'none';
    
    document.getElementsByClassName('insertCar')[0].style.display = 'none'
    document.getElementsByName('Carros')[0].style.display = "none";
    document.getElementsByName('Bikes')[0].style.display = "block";
    document.getElementsByClassName('insertBikes')[0].style.display = 'block'
    document.getElementById('selectForm').style.display = 'none'
    document.getElementById('formula').style.display = "block"
    document.getElementsByClassName('insertBikes')[0].innerHTML = 

    //######### CILINDRADA

    '<div class="form-group row">' +
    '<label for="cc" class="col-3 col-form-label">Cilindrada</label>' +
    '<div class="col-9">' +
    '<input id="cc" name="cc" placeholder="Cilindrada" type="text"' +
    'class="form-control">' +
    '</div>' + '</div>' +

    //########## CILINDROS
    '<div class="form-group row">' +
    '<label for="cilindros" class="col-3 col-form-label">Q. Cilindros</label>' +
    '<div class="col-9">' +
    '<input id="cilindros" name="cilindros" placeholder=" 1.8, 2.0 etc" type="number"' +
    'class="form-control">' +
    '</div>' + '</div>' +

    //########## CATEGORIA
    '<div class="form-group row">' +
    '<label for="categoria" class="col-3 col-form-label">Categoria</label>' +
    '<div class="col-9">' +
    '<input id="categoria" name="categoria" placeholder="Naked, Carenada, etc" type="text"' +
    'class="form-control">' +
    '</div>' + '</div>' 
}

function imprimeCar(c){
    let carro =  "<h5>Carro</h5>"+ "<hr />" +
                 "Modelo: "      + c.getModelo()     + '<br />' +
                 "Fabricante: "  + c.getFabricante() + '<br />' +   
                 "Ano: "         + c.getAno()        + '<br />' +   
                 "Cor: "         + c.getCor()        + '<br />' +   
                 "Câmbio: "      + c.getCambio()     + "<br />" +
                 "Potencia: "    + c.getMotor()      + "<br />" +
                 "Ar Cond: "     + c.getArCond()     + "<br />" +
                 "Direção: "     + c.getCambio()     + "<br />" ;  

        return carro;
}

function imprimeBike(c){
    let moto =  "<h5>Moto</h5>" + "<hr />" +
                "Modelo: "      + c.getModelo()     + '<br />' +
                "Fabricante: "  + c.getFabricante() + '<br />' +   
                "Ano: "         + c.getAno()        + '<br />' +   
                "Cor: "         + c.getCor()        + '<br />' +   
                "Cilindrada: "  + c.getCilindrada() + "<br />" +
                "Cilindros: "   + c.getCilindros()  + "<br />" +
                "Categoria: "   + c.getCategoria()  + "<br />" ;

        return moto;
}

function cadastraCar(){

    Carros.push(new Car(
                        document.getElementById('model').value,
                        document.getElementById('fab').value,
                        document.getElementById('ano').value,
                        document.getElementById('cor').value,
                        document.getElementById('cambio').value,
                        document.getElementById('motor').value,
                        document.getElementById('arCond').value,
                        document.getElementById('direcao').value

    ))
    document.form.reset()
}

function cadastraBike(){

    Motos.push(new Bikes(
                        document.getElementById('model').value,
                        document.getElementById('fab').value,
                        document.getElementById('ano').value,
                        document.getElementById('cor').value,
                        document.getElementById('cc').value,
                        document.getElementById('cilindros').value,
                        document.getElementById('categoria').value
    ))
    document.form.reset()
}

function cadCar(){
    let tex = "";
    document.getElementById('formula').style.display = 'none';
    document.getElementById('cadAll').style.display = 'block';

    for (let i = 0; i < Carros.length; i++) {
        tex += '<div id="boxCad">' + 
                imprimeCar(Carros[i]) + 
                "</div>";
    }

    document.getElementById('carroCad').innerHTML = tex;
        
    if(document.getElementById('carroCad').innerHTML == ''){
        document.getElementById('carroCad').innerHTML = '<div class="none"> Nenhum Veiculo cadastrado. </div>'
    }
}

function cadBike(){
    let tex = "";
    document.getElementById('formula').style.display = 'none';
    document.getElementById('cadAll').style.display = 'block';

    for (let i = 0; i < Motos.length; i++) {
        tex += '<div id="boxCad0">' + 
                imprimeBike(Motos[i]) + 
                "</div>";
    }

    document.getElementById('motoCad').innerHTML = tex;
        
    if(document.getElementById('motoCad').innerHTML == ''){
        document.getElementById('motoCad').innerHTML = '<div class="none"> Nenhum Veiculo cadastrado. </div>'
    }
}
