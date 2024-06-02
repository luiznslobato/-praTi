//15. Fazer um algoritmos para receber um número decimal e o peso de cada número até
//que o usuário digite o número 0. Fazer a média ponderada desses números e pesos respectivos.

let prompt = require('prompt-sync')()

let numero = parseFloat(prompt("Defina o valor: "))
let peso = parseInt(prompt("Defina o peso: "))
let mediaPonderada
let valor = numero * peso
let totalPeso = peso

while (numero !== 0) {
    numero = parseFloat(prompt("Defina o valor: "))
    if (numero !== 0) {
        peso = parseInt(prompt("Defina o peso: "))
        valor += numero * peso
        totalPeso += peso
        mediaPonderada = valor / totalPeso
    }
}
console.log("Média ponderada: " + mediaPonderada.toFixed(2))