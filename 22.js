/* 
    22.- Introducir una frase por teclado. Imprimirla cinco veces en filas consecutivas, pero cada
    impresión ir desplazada cuatro columnas hacia la derecha. 
*/

const sentence = prompt('Introduce una frase: ');

for (let i = 0; i < 5; i++) {
  const spaces = ' '.repeat(4 * i);
  console.log(spaces + sentence);
}
