const prompt = require("prompt-sync")();  //Se importa el paquete promp-sync

// la temperatura en grados Celsius

function convertirTemperatura() {
const temperatura = Number(prompt("Escriba la temperatura en grados Celsius: ")); 
document.querySelector('#fahrenheit input').value =("La temperatura en grados Fahrenheit es: ", ((temperatura * 9) / 5) + 32); //temperatura en grados Fahrenheit
document.querySelector('#Kelvin input').value =("La temperatura en grados Kelvin es: ", temperatura + 273.15); //temperatura en grados Kelvin
if (isNaN(temperatura)) {
    console.log("Por favor, ingrese un número que sea valido");
}
}

function limpiarCampos() {
    document.querySelector('#celsius input').value = '';
    document.querySelector('#fahrenheit input').value = '';
    document.querySelector('#Kelvin input').value = '';
}

document.getElementById("convertir").addEventListener("click", convertirTemperatura);
document.getElementById("limpiar").addEventListener("click", limpiarCampos);