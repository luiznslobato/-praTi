let prompt = require('prompt-sync')();

function vidaSaudavel() {
    let pontos;

    let horas = parseInt(prompt("Defina quantas horas de atividades físicas você fez no mês: "));

    if (horas <= 10) {
        pontos = horas * 2;

    } else if (hours > 10 && hours <= 20) {
        pontos = horas * 5;

    } else {
        pontos = horas * 10;
    }
    let dinheiro = pontos * 0.05;
    return `Você conseguiu ${pontos} pontos e ganhou R$${dinheiro.toFixed(2)}`
}

console.log(vidaSaudavel());