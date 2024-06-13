let prompt = require("prompt-sync")();

let soma = 0;
let numeros = [];
let pares;
let continuar = true;

while (continuar) {
    let entrada = parseInt(prompt("Digite um numero: "));

    if (!isNaN(entrada) && Number.isSafeInteger(entrada)) {
        numeros.push(entrada);
        soma += entrada;
    } else {
        console.log("Digito inválido");
    }
    console.log(numeros);
    ((continuar = prompt("Continuar? [S] Sim - [N] Não: ").toUpperCase() === "N" ? false : true));

    continue;
}
pares = numeros.filter((pares) => pares % 2 === 0).length;

console.log(`Somatório entre todos os valores: ${soma}`);
console.log("Menor valor digitado: ", Math.min(...numeros));
console.log("Média entre todos os valores:", (soma / numeros.length).toFixed(2));
console.log(`Valores pares: ${pares}`);