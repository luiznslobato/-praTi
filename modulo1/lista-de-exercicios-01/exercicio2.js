//2. Escreva um algoritmo para ler o número de eleitores de um município, o número de
//votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
//em relação ao total de eleitores.

let prompt = require('prompt-sync')()

let eleitores = parseInt(prompt("Defina o número de eleitores: "))
let votosBrancos = parseInt(prompt("Defina o número de votos brancos: "))
let votosNulos = parseInt(prompt("Defina o número de votos nulos: "))
let votosValidos = parseInt(prompt("Defina o número de votos válidos: "))

let percentualBrancos = (votosBrancos / eleitores) * 100
let percentualNulos = (votosNulos / eleitores) * 100;
let percentualValidos = (votosValidos / eleitores) * 100

console.log(`Percentual de votos brancos: ${percentualBrancos}%`)
console.log(`Percentual de votos nulos: ${percentualNulos}%`)
console.log(`Percentual de votos válidos: ${percentualValidos}%`)
