let prompt = require('prompt-sync')();

function registro() {
    let funcionario = {
        nome: "",
        cargo: "",
        salario: 0
    };

    console.log("------------- Funcionário -------------");

    funcionario.nome = prompt("Nome: ");
    funcionario.cargo = prompt("Cargo: ");
    funcionario.salario = parseInt(prompt("Salário: "));

    console.log("-------------- Registro --------------");
    console.log(`Nome: ${funcionario.nome} - Cargo: ${funcionario.cargo} - Salário: R$${funcionario.salario}`);
}

registro();