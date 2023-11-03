/*
    12.- Hacer un programa que imprima los números del 1 al 100 y que calcule la suma de todos los
    números pares por un lado, y por otro, la de todos los impares
*/

let oddSum = 0;
let evenSum = 0;

for (let i = 1; i <= 100; i++) {
  console.log(i);
  if (i % 2 === 0) oddSum += i;
  if (i % 2 !== 0) evenSum += i;
}

console.log(`Suma de los números pares: ${oddSum}`);
console.log(`Suma de los números impares: ${evenSum}`);
