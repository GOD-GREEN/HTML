
function trocatitulo(objeto){
    let titulo = document.getElementById(objeto);

    if (titulo.style.fontSize === "10pt")
    titulo.style = "font-size: 18pt; color: red;";
    else{
        titulo.style.fontSize = "10pt";
        titulo.style.color = "black";
    }
}

function trocacor(elemento){
    let objeto = document.getElementById(elemento)

    if(objeto.style.color === "red"){
        objeto.style.color = "black";
    } else {
        objeto.style.color = "red";
    }
}

function mudatema(){
    let span = document.getElementById("tema");
    
    if (document.body.style.backgroundColor === "black"){
        document.body.style = "background-color: white; color: black;";
        span.innerHTML = "Modo Claro"
    } else {
        document.body.style = "background-color: black; color: white;";
        span.innerHTML = "Modo Escuro"
    }
}

function tiraObjeto(objeto,btn){
    let elemento = document.getElementById(objeto);
    let botao = document.getElementById(btn);

    if (elemento.style.display === "none"){
    elemento.style.display = "block";
    botao.value = "Tira Titulo";
}
    else
    elemento.style.display = "none";
    botao.value = "Coloca Titulo";
}