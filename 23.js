// 23.- Hacer un programa que imprima los números del 0 al 100, controlando las filas y las columnas

const numColumns = parseInt(prompt('Introduce el numero de columnas: '));

if (isNaN(numColumns) || numColumns <= 0) {
  console.log('Ese no es un numero valido');
} else {
  let number = 0;

  for (let row = 1; number <= 100; row++) {
    let rowNumbers = '';
    
    for (let column = 1; column <= numColumns; column++) {
      if (number <= 100) {
        rowNumbers += number.toString().padStart(4, ' ');
        number++;
      }
    }
    
    console.log(rowNumbers);
  }
}
