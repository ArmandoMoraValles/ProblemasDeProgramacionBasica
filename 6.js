/*
    6.- Hacer un programa que imprima todos los números naturales que hay desde el uno hasta un
    número que introducimos por teclado
*/
let flag;

do {
    let number = prompt("Introduce un numero y te dire los numeros naturales desde el 1 a ese numero");
    number = parseInt(number);
    if(!isNaN(number) && number !== 0 && number > 0) {
        for (let index = 1; index <= number; index++) console.log(index);
        flag = true;
    } else {
        flag = false;
        window.alert("No es un numero valido intentalo otra vez")
    }
} while (!flag);

// Nota: ejecuta este codigo en el navegador