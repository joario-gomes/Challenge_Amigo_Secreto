//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigoSecreto = [];
let listaAmigoSorteado = [];

function sortearAmigo(){
    ///amigoSecreto = parseInt(Math.random() * numeroLimite + 1);

}

function adicionarAmigo(){
    let nome = document.querySelector('input').value.trim();//trim() remove os espaços apos o nome
    
    //Testando se o campo esta vazio
    if(nome ===''){
        alert('Por favor, insira um nome valido.');
        return;
    }

    let amigo = nome.toUpperCase(); //convertendo o nome para maiusculo

    //Testando se o nome já esta na lista
    if(amigoSecreto.includes(amigo)){
        alert(`O nome ${amigo} já esta na lista! Ensira outro nome.`);
    }else{
        amigoSecreto.push(amigo);
    }
    
    limparCampo();
    atualizarLista();
}

function limparCampo(){
    amigo = document.querySelector('input');
    amigo.value = "";
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

//Apagar essa função
function converteMaiuscula(nome) {
    let nomeMaiusculo = nome.toUpperCase();
    return nomeMaiusculo;
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = amigoSecreto.map(nome => `<p>${nome}</p>`).join("");
}