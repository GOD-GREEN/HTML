function FunctionClass(){}

class Pessoa{
    nome;
    nascimento;
    sexo;
}

let p1 = new Pessoa();

p1.nascimento = '07-04-1999';
p1.nome = 'Jucca';
p1.sexo = 'Masculino';

console.log(p1);

class Animal{
    nome;
    especie;
    som;

    constructor(nome, especie, som){
        this.nome = nome;
        this.especie = especie;
        this.som = som;
    }
}

let doguinho = new Animal('Rex','Cachorro','Late');

console.log(doguinho);

class Professor{
    nome;
    anoNascimento;
    sexo;
        
    getNome() {
        return this.nome;
    }

    getSexo(){
        if(this.sexo == 'm')
            return 'masculino';
        else
            return 'feminino';
    }

    getIdade(){
        return 2021-this.anoNascimento;
    }
}

let prof = new Professor();
prof.nome = 'Carlino';
prof.sexo = 'm';
prof.anoNascimento = '1985';

console.log(prof.getNome())
console.log(prof.getSexo())
console.log(prof.getIdade())

class Aluno{
    nome;
    dataNacimento;
    sexo;

    constructor(nome, dataNacimento, sexo){
        this.nome = nome;
        this.dataNacimento = dataNacimento;
        this.sexo = sexo;
    }

    getNome(){
        return this.nome;
    }

    getSexo(){
        if(this.sexo == 1)
            return 'masculino';
        else
            return 'feminino';
    }

    getIdade(){
        data = this.dataNacimento.split('/')
    }
}