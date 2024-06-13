let prompt = require("prompt-sync")();

let numeros = [];
console.log("Descubra os 10 primeiros números da Sequência de Fibonacci")
let numeroUm = parseInt(prompt("Defina o primeiro número: "));
let numeroDois = parseInt(prompt("Defina o segundo número: "));
numeros.push(numeroUm); numeros.push(numeroDois);

function fibonacci(numeros) {
    console.log(numeros);

    for (let i = 2; i < 10; i++) {
        numeros.push(numeros[i - 1] + numeros[i - 2]);
    }
    return numeros;
}
let sequenciaDeFibonacci = fibonacci(numeros).join(", ");

console.log(sequenciaDeFibonacci);