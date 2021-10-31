/*
sintaxe do if

if(booleano){concdição atendida} else {condição não atendida}.
id(1<0){
    console.log("verdade");
} else {
    console.log("mentira");
}
*/

// exercicio do IMC (INDICE DE MASSA CORPORAL)
/*
crie variaveis com nome peso e altura de uma pessoa.
e dê as seguintes situações.
sabendo que IMC é peso /(altura*altura)
IMC menos que 18.5 -> abaixo do normal
entre 18,5 e 24.99 -> normal.
acima de 24.99 -> acima do normal.

ex:
Nome: Juca Bala
IMC: 19.95 - Normal
*/

let nota1
let nota2
let nota3

nota1 = 4
nota2 = 7
nota3 = 2

let media = (nota1+nota2+nota3)/3

if (media < 4)
    console.log("Aluno Reprovado")
 else if (media <= 7)
            console.log("Recuperação");

   else  (media >=7) 
    console.log("Aprovado");

