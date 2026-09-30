const prompt = require("prompt-sync")();

let num1 = parseInt(prompt("Ingresa un número: "));
let num2 = parseInt(prompt("Ingresa un número: "));
let num3 = parseInt(prompt("Ingresa un número: "));

if (num1 === num2 || num1 === num3 || num2 === num3) {
    console.log("Tienes números iguales");
}

if (num1 > num2 && num1 > num3) {
    if (num2 > num3) {
        console.log(`Números de mayor a menor: ${num1}, ${num2}, ${num3}
        Números de menor a mayor: ${num3}, ${num2}, ${num1}`);
    } else {
        console.log(`Números de mayor a menor: ${num1}, ${num3}, ${num2}
        Números de menor a mayor: ${num2}, ${num3}, ${num1}`);
    }
} else if (num2 > num1 && num2 > num3) {
    if (num1 > num3) {
        console.log(`Números de mayor a menor: ${num2}, ${num1}, ${num3}
        Números de menor a mayor: ${num3}, ${num1}, ${num2}`);
    } else {
        console.log(`Números de mayor a menor: ${num2}, ${num3}, ${num1}
        Números de menor a mayor: ${num1}, ${num3}, ${num2}`);
    }
} else {
    if (num1 > num2) {
        console.log(`Números de mayor a menor: ${num3}, ${num1}, ${num2}
        Números de menor a mayor: ${num2}, ${num1}, ${num3}`);
    } else {
        console.log(`Números de mayor a menor: ${num3}, ${num2}, ${num1}
        Números de menor a mayor: ${num1}, ${num2}, ${num3}`);
    }
}