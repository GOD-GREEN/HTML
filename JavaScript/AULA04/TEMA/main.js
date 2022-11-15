// ESCOPO -> tempo de vida da variavel

let valor1 = 20;
let valor2 = 30;
let total;

if (valor1<valor2)
    total = valor2 - valor1;
    
else
    total = valor1 - valor2;

    console.log(total)

    /* 
    let -> cria variavel no escopo atual;
    var -> atribui valor à uma variavel que ainda não foi declarada. VARIÁVEL GLOBAL.
            Variavel Global, ou seja pertence ao escopo global (arquivo);
            const -> valor CONSTANTE
    */

            const pi = 3.14;
            let raio = 12;

            let circunferencia = 2*pi*raio;

            const pedidominimo = 200;

            Raio = 32; // Se não declarar escopo, escopo é global. Entende-se: var Raio = 32;
            /*^^^^^^^^^^^ -> má pratica ao declarar variavel global. */