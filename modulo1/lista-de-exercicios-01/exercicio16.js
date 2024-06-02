//16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
//Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.

let numero = 100
let contador = 0
let primo

while (contador <= 50) {
    let divisores = 0
    let contarDivisores = 1

    while (contarDivisores <= numero) {
        if (numero % contarDivisores === 0) {
            divisores++
        }
        contarDivisores++
    }
    if (divisores === 2) {
        console.log(numero)
        contador++
    }
    numero++
}


