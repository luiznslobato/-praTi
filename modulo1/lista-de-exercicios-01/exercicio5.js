//5. Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ 
//caso a média calculada seja menor que 6,0

let prompt = require('prompt-sync')()

let nota1 = Number(prompt("Defina a nota da primera avaliação: "))
let nota2 = Number(prompt("Defina a nota da segunda avaliação: "))
let media = (nota1 + nota2) / 2

console.log(`Média semestral: ${media}`)

if (media >= 6) {
    console.log("PARABÉNS! Você foi aprovado")

} else {
    console.log("Você foi REPROVADO! Estude mais")
}