//9. Escreva um algoritmo que leia o código de origem de um produto 
//e imprima a região do mesmo, conforme a tabela abaixo:
//Código de Origem: 1 - Sul, 2 - Norte, 3 - Leste, 4 - Oeste, 5 ou 6 - Nordeste, 7, 8 ou 9 - Sudeste,
// 10 até 20 - Centro-Oeste, 25 até 50 - Nordeste, fora do intervalo - produto importado.

let prompt = require('prompt-sync')()

let codigoDeOrigem = parseInt(prompt("Defina o código de origem do produto: "))

if (codigoDeOrigem === 1) {
    console.log('Sul')
}
else if (codigoDeOrigem === 2) {
    console.log('Norte')
}
else if (codigoDeOrigem === 3) {
    console.log('Leste')
}
else if (codigoDeOrigem === 4) {
    console.log('Oeste')
}
else if (codigoDeOrigem === 5 || codigoDeOrigem === 6 || codigoDeOrigem >= 25 && codigoDeOrigem <= 50) {
    console.log('Nordeste')
}
else if (codigoDeOrigem === 7 || codigoDeOrigem === 8 || codigoDeOrigem === 9) {
    console.log('Sudeste')
}
else if (codigoDeOrigem >= 10 && codigoDeOrigem <= 20) {
    console.log('Centro-Oeste')
}
else {
    console.log('Produto importado')
}