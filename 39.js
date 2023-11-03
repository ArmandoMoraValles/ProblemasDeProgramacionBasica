/* 
    39.- Crear una tabla de 3 pages, 4 rows y 5 columns donde 
    el primer elemento valga 1, el segundo 2, el tercero 3 y así sucesivamente. 
*/

const pages = 3;
const rows = 4;
const columns = 5;

const tabla = [];

let value = 1;
for (let page = 0; page < pages; page++) {
    const pageActual = [];
    for (let fila = 0; fila < rows; fila++) {
        const actualPage = [];
        for (let column = 0; column < columns; column++) {
            actualPage.push(value);
            value++;
        }
            pageActual.push(actualPage);
    }
    tabla.push(pageActual);
}

// Imprimir la tabla
for (let page = 0; page < pages; page++) {
    console.log(`Página ${page + 1}:`);
    for (let fila = 0; fila < rows; fila++) {
        console.log(tabla[page][fila].join("\t"));
    }
    console.log("\n");
}
