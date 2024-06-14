let prompt = require('prompt-sync')();

function salarios() {

    let salarioTotalHomens = 0;
    let salarioTotalMulheres = 0;
    let continuar = true;

    while (continuar) {
        let salario = parseFloat(prompt("Quanto é o seu salário: "));
        let genero = prompt("Qual é o seu sexo: [H] Homem - [M] Mulher: ").toUpperCase();
        continuar = prompt("Continuar adicionando mais salários? [S] Sim - [N] Não: ").toUpperCase() === "N"
            ? false : true;

        if (genero === "H") {
            salarioTotalHomens += salario;
        } else if (genero === "M") {
            salarioTotalMulheres += salario;
        } else {
            console.log("Opção inválida");
            continue;
        }

        console.log(`Salário total: Homens R$${salarioTotalHomens}; Mulheres R$${salarioTotalMulheres}.`)
    }
}
salarios();
