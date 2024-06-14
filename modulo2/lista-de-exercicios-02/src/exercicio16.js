function numerosAleatorios() {
    let numero;
    let numeros = [];

    for (let i = 0; i < 20; i++) {
        numero = Math.floor(Math.random() * (99 - 0) + 0);
        numeros.push(numero);
    }
    console.log(`Números gerados aleatoriamente: ${numeros}`);
    console.log(`Números aleatórios em ordem crescente: ${numeros.sort((a, b) => a - b)}`);
}

numerosAleatorios();