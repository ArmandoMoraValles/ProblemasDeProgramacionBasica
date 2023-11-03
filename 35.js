/* 
    35.- Generar una matriz de 4 filas y 5 columnas con 
    números aleatorios entre 1 y 100, e imprimirla. 
*/

function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}
  
const matrix = [];
for (let i = 0; i < 4; i++) {
    const row = [];
    for (let j = 0; j < 5; j++) {
        row.push(getRandomNumber());
    }
    matrix.push(row);
}
  
for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join("\t"));
}
  