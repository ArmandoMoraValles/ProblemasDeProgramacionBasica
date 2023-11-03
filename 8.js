// 8.- Hacer un programa que solo nos permita introducir S o N. 

let flag = false;
const message = "No es una opcion valida"

do {
    let option = prompt("Introduce S/N");
    if(option === "S" || option === "N") {
        flag = true;
    } else {
        window.alert(message)
        console.log(message);
    }
} while (!flag);