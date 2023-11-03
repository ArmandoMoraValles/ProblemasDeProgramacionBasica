// 7.- Introducir tantas frases como queramos y contarlas.
let flag = false;
let countSentence = 0

do {
    let sentence = prompt("Introduce una frase");
    countSentence++;
    let option = prompt("quieres introducir otra frase? teclea 'no' cuando quieras dejar de colocar frases");
    if(option === "no") flag = true;
} while (!flag)

console.log(`Introduciste un total de ${countSentence} frases`);