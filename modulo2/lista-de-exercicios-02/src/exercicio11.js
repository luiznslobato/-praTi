let prompt = require('prompt-sync')();

function pa() {

    let primeiroTermo = parseInt(prompt("Defina o primeiro termo da PA: "));
    let razao = parseInt(prompt("Defina a razão da PA: "));
    let soma = 0

    for (let i = 0; i < 10; i++) {
        soma += primeiroTermo + (i * razao);
        console.log(`${primeiroTermo + (i * razao)}`);
    }
    console.log(`A soma dos termos da PA é de: ${soma}`);
}

pa()
