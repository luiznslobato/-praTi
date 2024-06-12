let prompt = require("prompt-sync")();

function diasDeVidaPerdidos() {
    let tempoPerdidoPorCigarro = 10;
    let diaEmMinutos = 1440;

    let cigarrosPorDia = parseInt(prompt("Quantos cigarros você fuma por dia? "));
    let anosFumando = parseInt(prompt("Quantos anos você já fumou? "));

    let totalDeCigarros = cigarrosPorDia * 365 * anosFumando
    let perdaDeVida = parseInt((tempoPerdidoPorCigarro * totalDeCigarros) / diaEmMinutos);

    console.log("Voce já perdeu cerca de", perdaDeVida, "dias de vida.");
}

diasDeVidaPerdidos();