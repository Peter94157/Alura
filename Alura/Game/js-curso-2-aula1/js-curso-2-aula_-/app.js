let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numerSecreto = gerarNumeroAleatorio();
let tentativas = 1; 

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML=texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2})
}
mensagemInicial()
function mensagemInicial(){
    exibirTextoNaTela('h1','Jogo do número Secreto')   
    exibirTextoNaTela('p','Escolha um número de um 1 a 100')    
}


function verificarChute(){
    let chute = document.querySelector('input').value;
    if (numerSecreto==chute){
        palavraTentativa = tentativas>1 ? 'tentativas' : 'tentativa'
        menssagem= `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela('h1','Você Acertou!!')
        exibirTextoNaTela('p',menssagem)
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        if (chute < numerSecreto){
            exibirTextoNaTela('p','O número é maior!')
        }else{
            exibirTextoNaTela('p','O número é menor!')
        }
    }tentativas++;
    limpar();
}

function reiniciar(){
    numerSecreto=gerarNumeroAleatorio();
    limpar();
    tentativas=1;
    document.getElementById('reiniciar').setAttribute('disabled',true);
    mensagemInicial();
}
function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = listaDeNumerosSorteados.length;
    if(quantidadeElementosLista== numeroEscolhido ){
        listaDeNumerosSorteados=[];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }

}

function limpar(){
    let clear = document.querySelector('input')
    clear.value=''
}