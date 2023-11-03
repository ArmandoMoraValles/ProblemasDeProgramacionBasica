// 43.- Dado el archivo DATOS.DAT, realizar un programa que nos permita realizar modificaciones cuantas veces deseemos

const fs = require('fs');

const idToSearch = 3;
const numOfRepeats = 3; // Las veces que quieres modificar
count = 0;

do {
    fs.readFile('DATOS.DAT', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo DATOS.DATA:', err);
        } else {
            const records = JSON.parse(data);
    
            for (const record of records) {
                if (record.ID === idToSearch) {
                    record.NOMBRE = "Armando";
                    record.APELLIDOS = "Mora";
                    record.DIRECCION = "Calle primera";
                    break;
                }
            }
    
            fs.writeFile('DATOS.DAT', JSON.stringify(records, null, 2), 'utf8', (err) => {
                if (err) {
                    console.error('Error al actualizar el archivo DATOS.DATA:', err);
                } else {
                    console.log(`Registro con ID ${idToSearch} dado de baja en el archivo DATOS.DATA.`);
                }
            });
        }
    });
} while (count < numOfRepeats)