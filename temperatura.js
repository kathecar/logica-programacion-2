const prompt = require("prompt-sync")();  //Se importa el paquete promp-sync

// la temperatura en grados Celsius
const temperatura = Number(prompt("Escriba la temperatura en grados Celsius: ")); 
console.log("La temperatura en grados Fahrenheit es: ", ((temperatura * 9) / 5) + 32); //temperatura en grados Fahrenheit
console.log("La temperatura en grados Kelvin es: ", temperatura + 273.15); //temperatura en grados Kelvin
if (isNaN(temperatura)) {
    console.log("Por favor, ingrese un número que sea valido");
}

