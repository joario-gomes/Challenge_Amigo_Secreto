//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigoSecreto = [];
let listaAmigoSorteado = [];

function sortearAmigo(){
    let numeroLimite = amigoSecreto.length-1;
    let numeroSorteado = parseInt(Math.random() * (numeroLimite + 1));
    if (amigoSecreto.length === 0) {
        alert('Adicione amigos antes de sortear.');
        return;
    }
    if(listaAmigoSorteado.length == (amigoSecreto.length)){
        alert('Todos os amigos foram sorteados');
        amigoSecreto = [];
        listaAmigoSorteado = [];
        window.location.reload();        
    }else{
        if(listaAmigoSorteado.includes(amigoSecreto[numeroSorteado])){
            sortearAmigo();
        }else{
            let nome = amigoSecreto[numeroSorteado];
            listaAmigoSorteado.push(nome); //Falta colocar os já sorteados para que não seja sorteados novamente.
            let sorteado = document.getElementById('resultado');
            sorteado.innerHTML = amigoSecreto[numeroSorteado];
            ocultarElemento('listaAmigos');
            console.log(nome);
        }

    }
    
}

function adicionarAmigo(){
    let nome = document.querySelector('input').value.trim();//trim() remove os espaços apos o nome
       //Testando se o campo está vazio
    if(nome ===''){
        alert('Por favor, insira um nome válido.');
        return;
    }

    let amigo = nome.toUpperCase(); //convertendo o nome para maiusculo

    //Testando se o nome já esta na lista
    if(amigoSecreto.includes(amigo)){
        alert(`O nome ${amigo} já esta na lista! Insira outro nome..`);
    }else{
        amigoSecreto.push(amigo);
    }
    
    limparCampo();
    atualizarLista();
    console.log(`Nomes amigo secreto ${amigoSecreto} amigos sorteador ${listaAmigoSorteado.length}`);
}

function limparCampo(){
    amigo = document.querySelector('input');
    amigo.value = "";
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = amigoSecreto.map(nome => `<p>${nome}</p>`).join("");
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function ocultarElemento(tag){
    let campo = document.getElementById(tag);
    campo.style.display = "none";
}
