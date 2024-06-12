
let prompt = require("prompt-sync")();

let limiteDeVelocidade = 80;

function verificarVelocidade() {
    let velocidadeDoCarro = prompt("Qual a velocidade atual do carro? ");
    let velocidade = velocidadeDoCarro > limiteDeVelocidade ? true : false;

    if (velocidade) {
        let multa = (velocidadeDoCarro - limiteDeVelocidade) * 5;

        console.log(`Você ultrapassou a velocidade máxima permitida de 80Km/h e por isso será multado(a) em R$${multa}!`);
    } else {
        console.log('A velocidade atual do carro está dentro do limite permitido de 80Km/h, permaneça assim!');
    }
}

verificarVelocidade(limiteDeVelocidade);