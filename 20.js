// 20.- Calcular el factorial de un número, mediante funciones

function calculateFactorial(number) {
    if (number < 0) {
        return "Es un numero negativo";
    } else if (number === 0) {
        return 1;
    } else {
        let factorial = 1;
        for (let i = 1; i <= number; i++) {
            factorial *= i;
        }
        return factorial;
    }
}

const userNumber = parseInt(prompt("Introduce un numero para calcular su factorial:"));
const factorial = calculateFactorial(userNumber);
  
if (typeof factorial === 'string') {
    console.log(factorial);
    window.alert(factorial);
} else {
    console.log(`El factorial de ${userNumber} es ${factorial}`);
    window.alert(`El factorial de ${userNumber} es ${factorial}`);
}
  