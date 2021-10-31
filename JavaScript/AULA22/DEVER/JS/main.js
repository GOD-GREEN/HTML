//######################### CLASSES ##############################
now = new Date;

class Pessoa {
    nome;
    nasc;
    peso;
    alt;
    sex;
   
    constructor(nome, nasc, peso, alt, sex) {
        this.nome = nome; 
        this.nasc = nasc;
        this.peso = peso; 
        this.alt = alt; 
        this.sex = sex; 
        
    }

    getNome(){
        return this.nome;
    }
    getNasc(){
        return this.nasc;
    }
    getIdade(){
        let idade = [];

        if(this.nasc.indexOf('-') > -1)
            idade = this.nasc.split('-');

        if(idade[1]-1 >= now.getMonth()){
            idade[0] = now.getFullYear()-1 - idade[0]
        }else{
            idade[0] = now.getFullYear() - idade[0]
        }
        
        return idade[0];
    }

    getPeso(){
        return this.peso;
    }
    getAlt(){
        return this.alt;
    }
    getSex(){
        switch(this.sex){
            case '0':
                return 'Masculino';
                break;
            case '1':
                return 'Feminino';
                break;
            case '2':
                return 'Outros';
                break;
            default:
                return 'Erro no cadastro';
                break;
        }
    }

    getImc(){
        return  this.peso/(this.alt*this.alt);

    }

}

//########################### VARIAVEIS #############################

let Cadastro = [];

//########################### FUNCTIONS #############################



function finalizar(){
    Cadastro.push( new Pessoa(
        document.getElementById('nome').value,
        document.getElementById('nasc').value,
        Number(document.getElementById('peso').value),
        Number(document.getElementById('altura').value)/100,
        document.getElementById('sex').value
    )
);
document.form.reset();
}

function ehDoador(p){
    if( p.getIdade()    >= 18 && 
        p.getIdade()    <= 60 &&
        p.getPeso()     >= 50 &&
        p.getImc()      >= 18 &&
        p.getImc()      <  25
      ){
        return true;
    } else {
        return false;
    }
}

function imprime(p){
    let doador;
    if(ehDoador(p)){
        doador = "Doador";
    }else{
        doador = "Não Doador";
    }

    let peaple = "Nome: "   + p.getNome()           + '<br />' +
                 "Idade: "  + p.getIdade()          + '<br />' +   
                 "Sexo: "   + p.getSex()            + '<br />' +   
                 "IMC: "    + p.getImc().toFixed(1) + '<br />' +   
                 "Doador: " + doador                + "<br />";  

        return peaple;
}

function cadastrar(){
    document.getElementById('formula').style.display = 'block';
    document.getElementById('cadAll').style.display = 'none';
}

function cadastros(){
    let tex = "";
    document.getElementById('formula').style.display = 'none';
    document.getElementById('cadAll').style.display = 'block';

    for (let i = 0; i < Cadastro.length; i++) {
        tex += '<div id="boxCad">' + 
                imprime(Cadastro[i]) + 
                "</div>";
    }

    document.getElementById('pessoaCad').innerHTML = tex;
        
    if(document.getElementById('pessoaCad').innerHTML == ''){
        document.getElementById('pessoaCad').innerHTML = '<div class="none"> Nenhuma Pessoa cadastrada. </div>'
    }
}


