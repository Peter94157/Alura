alert('Bem vindo ao Jogo de adivinha qual o numero');
let numeroMaximo = 100;
let chute;
let NumeroSecreto = parseInt(Math.random()*numeroMaximo+1);
let tentativa=1;



while (NumeroSecreto != chute) {
    chute = prompt(`Escolha um numero e 0 a ${numeroMaximo}`);
    if (chute == NumeroSecreto) {
        break
    } else {
        ;
        if (NumeroSecreto < chute) {
            alert(`Errou, é menor que ${chute}`)
        } else {
            alert(`Errou, é maior que ${chute}`)

        }
    }
    tentativa++
}
palabraTentativa=tentativa>1 ?'tentativas' : 'tentativa';    
alert(`Acertoouuu o numero secreto - ${NumeroSecreto} , voce acertou com ${tentativa} ${palabraTentativa}`)