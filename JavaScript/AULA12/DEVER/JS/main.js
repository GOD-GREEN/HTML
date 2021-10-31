var joine = [];

function calcular(valor1, operador, valor2) {
    let total;

    valor1 = Number(window.prompt("Um valor")),
    operador = String(window.prompt("Um operador")),
    valor2 =  Number(window.prompt("Outro valor"))

    switch (operador) {
        case '+':
            total = valor1 + valor2;
            break;

        case '-':
            total = valor1 - valor2;
            break;

        case '/':
            total = valor1 / valor2;
            break;
        case '*':
            total = valor1 * valor2;
            break;
    }

    console.log(valor1 + operador + valor2 + '=' + total);

}

function cadastrar(nome, idade, altura) {

    while (0 == 0) {

        let join = window.prompt("Digite para: (1)Cadastrar (0)SAIR");

        if (join == '1') {
            nome = window.prompt("Cadastre um nome: ")
            idade = window.prompt("Agora a Idade: ")
            altura = window.prompt("Por fim uma altura: ")
        }
        if (join == '0') {
            break;
        }

        switch (join) {
            case "1":
                joine.push([nome, idade, altura])
                break;

            default:
                window.alert("Opção invalida!")
                window.prompt("Digite para: (1)Cadastrar (0)SAIR");

        }

        

    }

    console.log(joine);


}

function imprimePessoas() {
    console.log("\n\nPessoas\n=======================");
    for (let i = 0; i < joine.length; i++) {
        console.log('Nome: ' + joine[i][0],
            '\n' + 'Idade: ' + joine[i][1],
            '\n' + 'Altura: ' + joine[i][2],
            '\n' + '==========');
    }
    console.log("\n=======================");
}

calcular();
cadastrar();
imprimePessoas();