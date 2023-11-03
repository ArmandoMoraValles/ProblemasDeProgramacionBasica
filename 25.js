// 25.- Introducir un número menor de 5000 y pasarlo a numero romano. 

let number = parseInt(prompt('Introduce un número menor de 5000: '));

if (isNaN(number) || number < 1 || number >= 5000) {
  console.log('Por favor, introduce un número válido menor de 5000.');
} else {
  const romanNumerals = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }
  ];

  let romanNumber = '';

  for (let i = 0; i < romanNumerals.length; i++) {
    while (number >= romanNumerals[i].value) {
      romanNumber += romanNumerals[i].symbol;
      number -= romanNumerals[i].value;
    }
  }

  console.log(`El numero ${number} en romano es: ${romanNumber}`);
}
