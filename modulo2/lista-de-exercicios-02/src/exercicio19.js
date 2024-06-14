let prompt = require('prompt-sync')();

let horario;
let horarios = [];

function validarHorario(horario) {
    let separador = horario.split('.');
    if (separador.length !== 3) {
        return false;
    }

    let hora = parseInt(separador[0]);
    let minuto = parseInt(separador[1]);
    let segundo = parseInt(separador[2]);

    if (isNaN(hora) || isNaN(minuto) || isNaN(segundo)) {
        return false;
    }
    if (hora < 0 || hora > 23 || minuto < 0 || minuto > 59 || segundo < 0 || segundo > 59) {
        return false;
    }

    return true;
}

console.log("--------- Defina cinco horários (HH.MM.SS) ---------");

for (let i = 0; i < 5; i++) {
    horario = prompt("Horário: ");

    if (validarHorario(horario) === true) {
        horarios.push(horario);
    }

    while (!validarHorario(horario)) {
        console.log("Formato ou valor inválido. ");
        horario = prompt("Horário: ");
    }
}
console.log("--------------- Horários ---------------");
console.log(horarios);
