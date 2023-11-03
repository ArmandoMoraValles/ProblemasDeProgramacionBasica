/* 
    14.- Hacer un programa que imprima el mayor y el 
    menor de una serie de cinco números que vamos introduciendo por teclado
*/

let numbers = [];
let quantityOfNumbers = 5;

for (let i = 0; i < quantityOfNumbers; i++) {
    let number = parseFloat(prompt("Introduce un numero:"));
    numbers.push(number);
}

let maxNumber = Math.max(...numbers);
let minNumber = Math.min(...numbers);
window.alert(`El numero mayor es: ${maxNumber}`);
console.log(`El numero mayor es: ${maxNumber}`);
window.alert(`El numero menor es: ${minNumber}`);
console.log(`El numero menor es: ${minNumber}`);
