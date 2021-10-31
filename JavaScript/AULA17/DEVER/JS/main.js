var sorteados = [];

function sortear() {

    v = [Number(document.getElementById('valor1').value),
         Number(document.getElementById('valor2').value)];

    for (let i = 0; i < Number(document.getElementById('quantS').value); i++) {
        var numero = Math.floor(Math.random() * (v[1] - v[0] + 1)) + v[0];
    
        if (document.getElementsByName('check')[0].checked == true) {
            if (sorteados.indexOf(numero) == -1){
                return sorteados.push(numero);
                
            }
            console.log(numero)
        }
    }
}

function mostrar(){
    sortear()
    console.log(sorteados)
    document.getElementById('sorteio').style.display = 'none';
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('resultado').innerHTML = sorteados[1];
    

    
}