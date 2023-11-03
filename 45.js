/*
    45.- Tenemos el archivo DATOS.DAT con la misma estructura anterior, que esta indexado por el
    campo ID. Crear un programa que nos permita consultar un registro siempre que queramos.
*/

const fs = require('fs');
const readline = require('readline');

// Poder leer datos por teclado con node sin necesidad de usar el navegador
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce el id a buscar: ', (estadoABuscar) => {
    fs.readFile('DATOS.DAT', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo DATOS.DATA:', err);
        } else {
            const registros = JSON.parse(data);
            console.log('Registro con id', estadoABuscar, ':');
            for (const registro of registros) {
                if (registro.ID === estadoABuscar) {
                    console.log(registro);
                }
            }
    
            rl.close();
        }
    });
});
