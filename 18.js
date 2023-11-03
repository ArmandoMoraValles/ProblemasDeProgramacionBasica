/* 
    18.- Hacer un programa que cuente las veces que aparece una 
    determinada letra en una frase que introduciremos por teclado.
*/

const frase = prompt("Introduce una frase: ");
const letra = prompt("Introduce la letra que deseas contar: ");

const letraMinuscula = letra.toLowerCase();
const fraseMinuscula = frase.toLowerCase();
let contador = 0;

for (let i = 0; i < fraseMinuscula.length; i++) {
    if (fraseMinuscula[i] === letraMinuscula) {
        contador++;
    }
}

console.log(`La letra "${letra}" aparece ${contador} veces en la frase`);
window.alert(`La letra "${letra}" aparece ${contador} veces en la frase`)
