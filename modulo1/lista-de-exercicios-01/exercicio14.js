//14. Fazer um algoritmo para receber números decimais 
//até que o usuário digite 0 e fazer a média aritmética desses números.

let prompt = require('prompt-sync')()
let numero = Number(prompt("Defina o numero: "))
let soma = numero
let media = 0
let contador = 1

while (numero !== 0) {
    numero = Number(prompt("Defina o numero: "));
    soma += numero;
    media = soma / contador
    contador++
}

console.log("Média aritmética: " + media.toFixed(2));

