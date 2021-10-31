let sanduiches = [],
    sucos = [],
    acompanhamentos = [];

let ingredientes, nome, preço;

do {
    let lanches = window.prompt("Lanches: (1)Sanduíches (2)Sucos (3)Acompanhamentos" + "\n" + "ou 'SAIR' para finalizar");

    if (lanches.toLowerCase() == "sair") break;

    if (lanches != '2') {
        nome = window.prompt('Digite o nome do alimento: ')
    }
    if (lanches != '3') {
        ingredientes = window.prompt('Digite quais os ingredientes: ')
    }
    preco = window.prompt('Preço: ');

    if (sanduiches == "") {
        sanduiches.push("Sanduiches",
            "-------------------------"
        )
    }
    if (sucos == "") {
        sucos.push("Sucos",
            "-------------------------")

    }
    if (acompanhamentos == "") {
        acompanhamentos.push("Acompanhamentos",
            "--------------------------"
        )
    }

    switch (lanches) {
        case '1':
            sanduiches.push(

                "Nome: " + nome,
                "Ingredientes: " + ingredientes,
                "Preço: R$ " + preco,
                "---------"
            )
            break;

        case '2':
            sucos.push(

                "Ingredientes: " + ingredientes,
                "Preço: R$ " + preco,
                "---------"
            )
            break;

        case '3':
            acompanhamentos.push(

                "Nome: " + nome,
                "Preço: R$ " + preco,
                "---------"
            )
            break;


        default:
            window.alert('Lanche não encontrado ou invalido');
            window.prompt('Os Lanches são: (1)Sanduíches (2)Sucos (3)Acompanhamentos' + '\n' + 'Digite apenas números!');
            break;

    }

} while (0 == 0);

console.log(sanduiches);
console.log(sucos);
console.log(acompanhamentos);