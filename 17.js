/*
    17.- Imprimir, contar y sumar los múltiplos de 2 que hay entre una serie de números, 
    tal que el segundo sea mayor o igual que el primero. 
*/

const number1 = parseInt(prompt("Introduce el primer numero:"));
const number2 = parseInt(prompt("Introduce el segundo numero (mayor o igual que el primero):"));

if (isNaN(number1) || isNaN(number2) || number1 >= number2) {
  console.log("Por favor, introduce numeros y asegurate de que el segundo numero sea mayor o igual al primero");
  window.alert("Por favor, introduce numeros y asegurate de que el segundo numero sea mayor o igual al primero");
} else {
  let count = 0;
  let sum = 0;

  console.log(`Multiplos de 2 entre ${number1} y ${number2}`);
  window.alert(`Multiplos de 2 entre ${number1} y ${number2}`)
  for (let i = number1; i <= number2; i++) {
    if (i % 2 === 0) {
      console.log(i);
      count++;
      sum += i;
    }
  }

  console.log(`Total de múltiplos de 2: ${count}`);
  window.alert(`Total de múltiplos de 2: ${count}`)
  console.log(`Suma de múltiplos de 2: ${sum}`);
  window.alert(`Suma de múltiplos de 2: ${sum}`)
}
