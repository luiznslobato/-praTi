let prompt = require("prompt-sync")();

function numerosPares() {

    let numeros = [];
    let posicaoPares = [];

    for (let i = 0; i < 10; i++) {
        let n = parseInt(prompt("Defina dez números, um por vez: "));
        numeros.push(n);

        if (n % 2 === 0) {
            posicaoPares.push(i);
        }
    }
    let pares = numeros.filter((e) => e % 2 === 0);
    console.log(`Números pares: ${pares}`);
    console.log(`Posições dos pares: ${posicaoPares}`);
}

numerosPares();
