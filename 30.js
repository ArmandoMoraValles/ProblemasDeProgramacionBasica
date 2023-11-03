/*
    30.- Introducir dos números por teclado y mediante un menú, 
    calcule su suma, su resta, su multiplicación o su división
*/
const number1 = parseFloat(prompt('Introduce el primer numero: '));
const number2 = parseFloat(prompt('Introduce el segundo numero: '));

if (isNaN(number1) || isNaN(number2)) {
  console.log('porfavor introduce numeros');
} else {
  console.log('Elige una operación:');
  console.log('1. Suma');
  console.log('2. Resta');
  console.log('3. Multiplicacion');
  console.log('4. División');
  window.alert('Elige una operacion: 1. suma, 2. Resta, 3. Multiplicacion, 4. Division')

  const opcion = prompt('Opción: ');

  switch (opcion) {
    case '1':
      console.log(`La suma es: ${number1 + number2}`);
      break;
    case '2':
      console.log(`La resta es: ${number1 - number2}`);
      break;
    case '3':
      console.log(`La multiplicacion es: ${number1 * number2}`);
      break;
    case '4':
      if (number2 !== 0) {
        console.log(`La division es: ${number1 / number2}`);
      } else {
        console.log('No se puede dividir por cero');
      }
      break;
    default:
      console.log('Opcion no valida.');
  }
}
