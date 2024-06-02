//8. Escreva um algoritmo para ler 2 valores 
//(considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

let prompt = require('prompt-sync')()

let valor1 = Number(prompt("Defina o primeiro valor: "))
let valor2 = Number(prompt("Defina o segundo valor: "))

if (valor1 !== valor2) {

    if (valor1 > valor2) {
        console.log(valor2, ",", valor1)

    } else {
        console.log(valor1, ",", valor2)
    }
}