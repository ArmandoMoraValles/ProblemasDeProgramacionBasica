/* 
    41. Hacer un programa que nos permita dar altas en el archivo DATOS.DAT, cuyos campos son:
    ID, NOMBRE, APELLIDOS, DIRECCIÓN y ESTADO
*/

const fs = require('fs'); // Módulo para operaciones de archivos

const nuevosRegistros = [
  {
    ID: 33,
    NOMBRE: "Maria3",
    APELLIDOS: "Gonzalez4",
    DIRECCION: "7894 Oak St",
    ESTADO: "Inactivo"
  },
  {
    ID: 44,
    NOMBRE: "Carlos2",
    APELLIDOS: "Rodriguez",
    DIRECCION: "1012 Pine St",
    ESTADO: "Inactivo"
  }
];

fs.readFile('DATOS.DAT', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo DATOS.DATA:', err);
  } else {
    let registrosExistente = JSON.parse(data);
    registrosExistente = registrosExistente.concat(nuevosRegistros);

    fs.writeFile('DATOS.DAT', JSON.stringify(registrosExistente, null, 2), 'utf8', (err) => {
      if (err) console.error('Error al añadir registros al archivo DATOS.DATA:', err);
    });
  }
});
