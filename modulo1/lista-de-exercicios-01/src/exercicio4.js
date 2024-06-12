//4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
//calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
//aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para aprovação).

let prompt = require('prompt-sync')()

let nota1 = Number(prompt("Defina a nota da primera avaliação: "))
let nota2 = Number(prompt("Defina a nota da segunda avaliação: "))
let media = (nota1 + nota2) / 2

console.log(`Média semestral: ${media}`)

if (media >= 6) {
    console.log("PARABÉNS! Você foi aprovado")
}