function Pessoa(nome,nascimento,sexo){
    this.nome = nome;
    this.nascimento = nascimento;
    this.sexo = sexo;
}

function Carro(modelo, fabricante, cor, ano){
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.cor = cor;
    this.ano = ano;
}

function Animal(nome, especie, som){
    this.nome = nome;
    this.especie = especie;
    this.som = som;
}

let pessoas = [];
let animais = [];
let carros = [];

  //#########################  PESSOAS  ################################
pessoas.push(new Pessoa('João', '02-08-1999', 'masculino'),
             new Pessoa('Elayne', '05-12-1975', 'feminino'),
             new Pessoa('Joakin', '07-07-2001', 'masculino')
             );

for(let i = 0; i < pessoas.length; i++){             
console.log("Nome: " + pessoas[i].nome + "\n" + 
            "Nascimento: " + pessoas[i].nascimento + "\n" + 
            "Sexo: " + pessoas[i].sexo);
}

//#########################  ANIMAIS  ################################

animais.push(new Animal('Bob', 'Cachorro', 'late'),
             new Animal('Mel', 'Gato', 'mia'),
             new Animal('Robson', 'Porco', 'Gruni')
             );

for(let i = 0; i < animais.length; i++){             
console.log("Nome: " + animais[i].nome + "\n" + 
            "Especie: " + animais[i].especie + "\n" + 
            "Som: " + animais[i].som);
}

//#########################  CARROS  ################################

carros.push(new Carro('A3', 'Audy', 'vermelho', '1997'),
            new Carro('Mustang', 'Ford', 'Preto', '2019'),
            new Carro('Maverick', 'Ford', 'Azul', '1965'),
            new Carro('Opala', 'Chevrolet', 'Verde', '1969')
             );

for(let i = 0; i < carros.length; i++){             
console.log("Modelo: " + carros[i].modelo + "\n" + 
            "Fabricante: " + carros[i].fabricante + "\n" + 
            "Cor: " + carros[i].cor + "\n" + 
            "Ano: " + carros[i].ano);
}