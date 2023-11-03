/* 
    21.- Hacer un programa que calcule independientemente la suma de los 
    pares y los impares de los números entre 1 y 1000. 
*/

let sumEven = 0;
let sumOdd = 0;
  
for (let i = 1; i <= 1000; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    } else {
        sumOdd += i;
    }
}
  
console.log(`Suma de números pares: ${sumEven}`);
console.log(`Suma de números impares: ${sumOdd}`);
  