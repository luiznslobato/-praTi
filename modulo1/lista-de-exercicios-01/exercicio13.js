//13. Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
//calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma: 1 x N = N; 2 x N = 2N; 3 x N = 3N

let prompt = require('prompt-sync')()
let contador = 1

while (contador <= 5) {

    let n = parseInt(prompt("Defina o valor: "))
    let contador2 = 1

    while (contador2 <= n) {
        console.log(n + " x " + contador2 + " = " + (n * contador2))
        contador2++
    }
    contador++
}
