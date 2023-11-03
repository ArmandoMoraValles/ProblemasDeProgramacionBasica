/*
    15.- Introducir dos números por teclado. Imprimir los números naturales que hay entre ambos
    números empezando por el más pequeño, contar cuántos hay y cuántos de ellos son pares.
    Calcular la suma de los impares
*/

const number1 = parseInt(prompt("Enter the first number:"));
const number2 = parseInt(prompt("Enter the second number:"));

if (isNaN(number1) || isNaN(number2)) {
  console.log("Uno de los numeros no es un numero o ambos");
  window.alert("Uno de los numeros no es un numero o ambos")
} else {
  const smallerNumber = Math.min(number1, number2);
  const largerNumber = Math.max(number1, number2);

  let naturalNumbersCount = 0;
  let evenCount = 0;
  let sumOfOddNumbers = 0;

  for (let i = smallerNumber; i <= largerNumber; i++) {
    console.log(i);
    naturalNumbersCount++;

    if (i % 2 === 0) {
      evenCount++;
    } else {
      sumOfOddNumbers += i;
    }
  }
  console.log(`Total de numeros naturales entre ${smallerNumber} y ${largerNumber}: ${naturalNumbersCount}`);
  console.log(`Numero de pares: ${evenCount}`);
  console.log(`suma de los numeros impares ${sumOfOddNumbers}`);
  window.alert(`Total de numeros naturales entre ${smallerNumber} y ${largerNumber}: ${naturalNumbersCount}`);
  window.alert(`Numero de pares: ${evenCount}`);
  window.alert(`suma de los numeros impares ${sumOfOddNumbers}`);
}
