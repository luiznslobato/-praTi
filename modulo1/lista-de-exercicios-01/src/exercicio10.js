//10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

let prompt = require('prompt-sync')()

let numero = parseInt(prompt("Digite o número: "))

for (let i = 0; i < 10; i++) {
    console.log(numero)
}
