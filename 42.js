// 42.- Hacer un programa que nos permita dar bajas en el fichero DATOS.DAT.

const fs = require('fs');

const idToSearch = 3;
fs.readFile('DATOS.DAT', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo DATOS.DATA:', err);
    } else {
        const records = JSON.parse(data);

        for (const record of records) {
            if (record.ID === idToSearch) {
                record.ESTADO = "Inactivo";
                break; // Terminar la búsqueda una vez encontrado el registro
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

