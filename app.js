//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let lista_nomes = []


function adicionarAmigo(){
    let nome = document.getElementById('amigo').value
    if(nome == ''){
        alert('Escreva um nome no campo')
    } else {
    lista_nomes.push(nome)
    console.log(lista_nomes)
    limparCampo()
    exibitTextoNaTela('listaAmigos',lista_nomes)
    }
}

function limparCampo(){
    let campo = document.querySelector('input')
    campo.value = ''
}

function exibitTextoNaTela(tag, texto){
    let campo = document.getElementById(tag)
    campo.innerHTML = texto 
}

function sortearAmigo(){
    if(lista_nomes.length == 0){
        alert('Nao é possivel sortear pois a lista esta vazia')
    } else {
        let tamanhoLista = lista_nomes.length
        let numeroAleatorio = parseInt(Math.random()*tamanhoLista)
        exibitTextoNaTela('resultado', `O seu amigo secreto é o ${lista_nomes[numeroAleatorio]}!`)
    }
}