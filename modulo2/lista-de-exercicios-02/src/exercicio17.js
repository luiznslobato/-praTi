let prompt = require("prompt-sync")();


function menorIdade() {

    let nomes = [];
    let idades = [];

    console.log("---- Informe o nome e a idade de nove pessoas -----");

    for (let i = 0; i < 9; i++) {
        let nome = (prompt("Nome: "));
        let idade = parseInt(prompt("Idade: "));
        nomes.push(nome);
        idades.push(idade);
    }

    console.log("----------------- Menores de idade -----------------");

    for (let i = 0; i < 9; i++) {
        if (idades[i] < 18) {
            console.log(`Nome: ${nomes[i]} - Idade: ${idades[i]} anos`);
        }
    }
}

menorIdade();