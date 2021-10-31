let funcio = []

function cadastrar() {
    document.getElementById('formula').style.display = 'block';
    document.getElementById('resul').style.display = 'none';
}

let varial = [
    document.getElementById('name').value,
    document.getElementById('nasc').value,
    document.getElementById('tel').value,
    document.getElementById('email').value
]

function cadastra() {
    if (varial == '') {
        alert('Todos os compos com "*" precisam estar preenchidos')
    } else {
        funcio.push({
            nome: document.getElementById('name').value,
            nasc: document.getElementById('nasc').value,
            tel: document.getElementById('tel').value,
            email: document.getElementById('email').value
        })
        alert('Cadastro Realizado com Sucesso')
    }

    document.getElementById('funcioCadast').innerHTML = '';

    for (let i = 0; i < funcio.length; i++) {
        console.log(i)
        document.getElementById('funcioCadast').innerHTML += '<div id="boxCad"> Nome: ' + funcio[i].nome + '<br />' +
            'Nacimento: ' + funcio[i].nasc + '<br />' +
            'Telefone: ' + funcio[i].tel + '<br />' +
            'E-Mail: ' + funcio[i].email + '</div>';
    }
}

function cadastrados() {
    document.getElementById('formula').style.display = 'none';
    document.getElementById('resul').style.display = 'table';
}