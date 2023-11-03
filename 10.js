// 10.- Introducir un número por teclado y que nos diga si es par o impar. 

let number = prompt("Introduce un número:");

if(isNaN(number)) {
    console.log('Eso ni si quiera es un numero');
    window.alert('Eso ni si quiera es un numero');
} else {
    number = parseFloat(number);
    switch (true) {
    case number % 2 === 0:
        console.log('Es un número par');
        window.alert('Es un número par');
        break;
    case number % 2 !== 0:
        console.log('Es un número impar');
        window.alert('Es un número impar');
        break;
    }
}