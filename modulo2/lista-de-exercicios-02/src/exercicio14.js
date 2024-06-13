const prompt = require('prompt-sync')();

function inveterNomes() {

    let nome;
    let nomes = []

    for (let i = 0; i < 7; i++) {
        nome = prompt("Infome sete nomes (um por vez): ");
        nomes.push(nome);
    }
    console.log(nomes.reverse())
}

inveterNomes();