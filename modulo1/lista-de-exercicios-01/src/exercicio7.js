//7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
//forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
//compradas, calcule e escreva o valor total da compra.

let prompt = require('prompt-sync')()

let macas = parseInt(prompt("Defina a quantidade de maças compradas: "))
let preco = 0

if (macas >= 12) {

    preco = macas * 0.25

} else {
    preco = macas * 0.30
}
preco = preco.toFixed(2)

console.log(`Quantidade de maças compradas: ${macas}. Valor total da compra: R$${preco}`)
