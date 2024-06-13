let prompt = require("prompt-sync")();

function jokenPo() {
    let jogadaDoUsuario = parseInt(prompt("Faça a sua jogada: [1] Pedra - [2] Papel - [3] Tesoura: "));
    let jogadaDoComputador = Math.floor(Math.random() * 3)

    if (jogadaDoComputador === jogadaDoUsuario) {
        console.log("EMPATE, o computador jogou o mesmo que você!")

    } else if (jogadaDoComputador === 1) {
        if (jogadaDoUsuario === 2) {
            console.log("GANHOU, o computador jogou pedra!");

        } else {
            console.log("PERDEU, o computador jogou pedra!");
        }
    } else if (jogadaDoComputador === 2) {
        if (jogadaDoUsuario === 1) {
            console.log("PERDEU, o computador jogou papel!");

        } else {
            console.log("GANHOU, o computador jogou papel!");
        }
    } else {
        if (jogadaDoUsuario === 1) {
            console.log("GANHOU, o computador jogou tesoura!");
        } else {
            console.log("PERDEU, o computador jogou tesoura!");
        }
    }
}
jokenPo();