let prompt = require("prompt-sync")();

let tipoCarro = parseInt(prompt("Escolha o seu tipo de carro: [1] Popular - [2] Luxo: "));
let diasDeAluguel = parseInt(prompt("Defina quantos dias ficará com o carro: "));
let kmPercorrido = parseInt(prompt("Defina quantos quilometros serão percorridos: "));;
let aluguelTotal;

switch (tipoCarro) {

    case 1:
        if (kmPercorrido <= 100) {
            aluguelTotal = (diasDeAluguel * 90) + (kmPercorrido * 0.20);
        } else {
            aluguelTotal = (diasDeAluguel * 90) + (100 * 0.20) + ((kmPercorrido - 100) * 0.10);
        }
        break;

    case 2:
        if (kmPercorrido <= 200) {
            aluguelTotal = (diasDeAluguel * 150) + (kmPercorrido * 0.30);
        } else {
            aluguelTotal = (diasDeAluguel * 150) + (200 * 0.30) + ((kmPercorrido - 200) * 0.25);
        }
        break;
}
console.log(`O aluguel do veiculo custará R$${aluguelTotal}!`)
