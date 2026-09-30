let num1 = parseInt(prompt("Ingresa el primer número: "));
let num2 = parseInt(prompt("Ingresa el segundo número: "));
let num3 = parseInt(prompt("Ingresa el tercer número: "));


if (num1 === num2 && num2 === num3) {
    console.log("Los números ingresados son iguales");
} else {
    if (num1 >= num2 && num1 >= num3) {
        if (num2 >= num3) {
            console.log(`Números de mayor a menor: ${num1}, ${num2}, ${num3}`);
            console.log(`Números de menor a mayor: ${num3}, ${num2}, ${num1}`);
        } else {
            console.log(`Números de mayor a menor: ${num1}, ${num3}, ${num2}`);
            console.log(`Números de menor a mayor: ${num2}, ${num3}, ${num1}`);
        }
    } 
    else if (num2 >= num1 && num2 >= num3) {
        if (num1 >= num3) {
            console.log(`Números de mayor a menor: ${num2}, ${num1}, ${num3}`);
            console.log(`Números de menor a mayor: ${num3}, ${num1}, ${num2}`);
        } else {
            console.log(`Números de mayor a menor: ${num2}, ${num3}, ${num1}`);
            console.log(`Números de menor a mayor: ${num1}, ${num3}, ${num2}`);
        }
    } 
    else {
        if (num1 >= num2) {
            console.log(`Números de mayor a menor: ${num3}, ${num1}, ${num2}`);
            console.log(`Números de menor a mayor: ${num2}, ${num1}, ${num3}`);
        } else {
            console.log(`Números de mayor a menor: ${num3}, ${num2}, ${num1}`);
            console.log(`Números de menor a mayor: ${num1}, ${num2}, ${num3}`);
        }
    }
}