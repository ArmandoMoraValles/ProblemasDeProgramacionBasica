/* 
    11.- Imprimir y contar los múltiplos de 3 desde el 
    uno hasta un número que introducimos por teclado.
*/

let number = prompt("Introduce un número:");
let countMult3 = 0;

if (isNaN(number)) {
  console.log("El dato introducido no es un numero");
  window.alert("El dato introducido no es un numero");
} else {
    number = parseInt(number);
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0) {
            countMult3++;
            console.log(i);
        }
    }
  console.log(`Total de múltiplos de 3 entre los numeros 1 y ${number}: ${countMult3}`);
  window.alert(`Total de múltiplos de 3 entre los numeros 1 y ${number}: ${countMult3}`);
}