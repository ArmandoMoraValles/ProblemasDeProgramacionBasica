/* 
    5.-Hacer un programa que imprima los números impares 
    hasta el 100 y que imprima cuantos impares hay. 
*/
let evenCount = 0;

for (let index = 0; index <= 100; index++) {
    if(index % 2 !== 0) {
        console.log(index);
        evenCount++;
    }
}

console.log(`Tenemos ${evenCount} numeros imapres del 0 al 100`);