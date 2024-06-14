let prompt = require('prompt-sync')();

function folhaPagamentos() {
    let funcionarios = [];
    let deducaoINSS = 0.12;

    for (let i = 0; i < 80; i++) {
        let funcionario = {
            matricula: parseFloat(prompt("Matrícula: ")),
            nome: prompt("Nome: "),
            salarioBruto: parseFloat(prompt("Salário bruto: R$"))
        };

        let salarioLiquido = funcionario.salarioBruto * (1 - deducaoINSS);
        funcionarios.push(funcionario);

        console.log("---------- Contra Cheque ----------");
        console.log("Matrícula:", funcionario.matricula);
        console.log("Nome:", funcionario.nome);
        console.log("Salário bruto: R$", funcionario.salarioBruto);
        console.log("Dedução INSS: R$", funcionario.salarioBruto * deducaoINSS);
        console.log("Salário líquido: R$", salarioLiquido);
        console.log("   ");
    }
}

folhaPagamentos();