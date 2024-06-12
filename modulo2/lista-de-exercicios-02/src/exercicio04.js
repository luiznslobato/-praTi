let prompt = require("prompt-sync")();

function possivelTriangulo() {
    let a = parseInt(prompt("Defina o tamanho do primeiro segmento de reta: "));
    let b = parseInt(prompt("Defina o tamanho do segundo segmento de reta: "));
    let c = parseInt(prompt("Defina o tamanho do terceiro segmento de reta: "));


    if (a < (b + c) & b < (a + c) & c < (a + b)) {
        console.log("É possível formar um triângulo com essas retas!")
    } else {
        console.log("Não é possível formar um triângulo com essas retas!")
    }
}
possivelTriangulo();