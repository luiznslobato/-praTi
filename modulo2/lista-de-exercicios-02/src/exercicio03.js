let prompt = require("prompt-sync")();

function passagem() {
    let distancia = parseInt(prompt("Qual a distância em Km, que você deseja percorrer? "));
    let preco = distancia <= 200 ? 0.5 * distancia : 0.45 * distancia;

    console.log(`O preço da sua passagem será de R$${preco}`);
}
passagem();