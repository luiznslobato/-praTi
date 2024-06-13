let prompt = require("prompt-sync")();
let numeroSorteado = Math.floor((Math.random() * 4) + 1);
let palpite = parseInt(prompt("Qual é o seu palpite, de 1 à 5? "));

numerosSorteados(function () {
    console.log("Número escolhido: ", palpite);
    console.log("Número sorteado: ", numeroSorteado);
    return palpite;
});

function numerosSorteados(numero) {

    if (numero() === numeroSorteado) {
        console.log("PARABÉNS, você acertou!");

    } else {
        console.log("Não foi dessa vez, tente novamente!")
    }
}