/*
    44.- Con el archivo DATOS.DAT listar todos los registros cuyo 
    estado sea uno determinado que introduciremos por teclado
*/

const fs = require('fs');
const readline = require('readline');

// Poder leer datos por teclado con node sin necesidad de usar el navegador
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce el estado a buscar: ', (stateToSearch) => {
    fs.readFile('DATOS.DAT', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo DATOS.DATA:', err);
        } else {
            const registros = JSON.parse(data);

            console.log(`Registros con estado, ${stateToSearch}, :`);
        for (const registro of registros) {
            if (registro.ESTADO === stateToSearch) {
                console.log(registro);
            }
        }

        rl.close();
        }
    });
});
