//12. Escreva um algoritmo que gere os números de 1000 a 1999
//e escreva aqueles que, divididos por 11, dão resto igual a 5.

let contador = 1000

while (contador <= 1999) {

    if (contador % 11 === 5) {
        console.log(contador)
    }
    contador++
}
