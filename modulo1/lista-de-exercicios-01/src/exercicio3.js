//3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
//Some 25 ao primeiro inteiro;
//Triplique o valor do segundo inteiro;
//Modifique o valor do terceiro inteiro para 12% do valor original;
//Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou) dos primeiros três inteiros.

let prompt = require('prompt-sync')()

let numero1 = parseInt(prompt("Defina o primeiro número: "))
let numero2 = parseInt(prompt("Defina o segundo número: "))
let numero3 = parseInt(prompt("Defina o terceiro número: "))
let numero4 = parseInt(prompt("Defina o quarto número: "))

let novoNumero1 = numero1 + 25
let novoNumero2 = numero2 * 3
let novoNumero3 = numero3 * (12 / 100)
let novoNumero4 = numero1 + numero2 + numero3

console.log(`O primeiro passa a valer: ${novoNumero1}`)
console.log(`O segundo passa a valer: ${novoNumero2}`)
console.log(`O terceiro passa a valer: ${novoNumero3}`)
console.log(`O quarto passa a valer: ${novoNumero4}`)