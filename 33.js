/* 
    33.- Hacer un programa que lea las calificaciones de un alumno en 10 
    asignaturas, las almacene en y calcule e imprima su media. 
*/

const numSubjects = 10;
const grades = [];

for (let i = 1; i <= numSubjects; i++) {
  const grade = parseFloat(prompt(`Ingresa la calificacion de la materia ${i}:`));
  if (isNaN(grade)) {
    console.log("Eso no es un numero");
    window.alert("Eso no es un numero");
    i--;
  } else {
    grades.push(grade);
  }
}

const sumOfGrades = grades.reduce((accumulator, grade) => accumulator + grade, 0);
const average = sumOfGrades / numSubjects;

console.log(`El promedio de las calificaciones es: ${average}`);
window.alert(`El promedio de las calificaciones es: ${average}`);