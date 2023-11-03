/* 
    31.- Hacer un programa que nos permita introducir un número por teclado y sobre él se realicen
    las siguientes operaciones: comprobar si es primo, hallar su factorial o imprimir su tabla de
    multiplicar. 
*/

function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
}
  
function fact(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * fact(number - 1);
    }
}
  
function multTable(number) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${number} x ${i} = ${number * i}`);
    }
}
  
const number = parseInt(prompt("Introduce un número:"));
  
if (isNaN(number)) {
    console.log("Eso no es un number");
    window.alert("Eso no es un number");
} else {
    if (isPrime(number)) {
        console.log(`${number} es un number primo`);
        window.alert(`${number} es un number primo`);
    } else {
        console.log(`${number} no es un number primo`);
        window.alert(`${number} no es un number primo`);
    }
  
    const factResult = fact(number);
    console.log(`El factorial de ${number} es ${factResult}`);
    window.alert(`El factorial de ${number} es ${factResult}`)

    console.log(`Tabla de multiplicar de ${number}: `);
    window.alert(`Tabla de multiplicar de ${number}: (Mira los logs pls)`);
    multTable(number);
}
  