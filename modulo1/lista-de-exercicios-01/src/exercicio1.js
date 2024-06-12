//1. Escreva um algoritmo para ler uma temperatura em graus Celsius,
//calcular e escrever o valor correspondente em graus Fahrenheit.

let prompt = require('prompt-sync')();

let temperaturaCelsius = Number(prompt("Defina a temperatura em graus Celsius: "));
let temperaturaFahrenheit = (1.8 * temperaturaCelsius) + 32;
console.log(`${temperaturaFahrenheit}°F`)
