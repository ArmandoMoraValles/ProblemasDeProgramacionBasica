// 9.- Introducir un número por teclado y que nos diga si es positivo o negativo. let flag = false;

let number = prompt("Introduce un número:");
number = parseFloat(number);

switch (true) {
  case number > 0:
    console.log('Es un número positivo');
    window.alert('Es un número positivo');
    break;
  case number < 0:
    console.log('Es un número negativo');
    window.alert('Es un número negativo');
    break;
  case number === 0:
    console.log('No es positivo ni negativo, es 0');
    window.alert('No es positivo ni negativo, es 0');
    break;
  default:
    console.log('Eso ni siquiera es un número');
    window.alert('Eso ni siquiera es un número');
    break;
}
