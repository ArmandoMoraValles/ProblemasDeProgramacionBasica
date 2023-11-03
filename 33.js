/* 
    33.- Hacer un programa que lea las calificaciones de un alumno en 10 
    asignaturas, las almacene en y calcule e imprima su media. 
*/

const numSubjects = 10;
const grades = [];

for (let i = 1; i <= numSubjects; i++) {
  const subjectName = prompt(`Ingresa el nombre de la materia ${i}:`);
  const grade = parseFloat(prompt(`Ingresa la calificación de la materia ${subjectName}:`));

  if (isNaN(grade)) {
    console.log("Eso no es un número");
    window.alert("Eso no es un número");
    i--; // Evitar uso de do while
  } else {
    const subjectData = {
      materia: subjectName,
      calificacion: grade
    };
    grades.push(subjectData);
  }
}

const sumOfGrades = grades.reduce((accumulator, subjectData) => accumulator + subjectData.calificacion, 0);
const average = sumOfGrades / numSubjects;

console.log(`El promedio de las calificaciones es: ${average}`);
window.alert(`El promedio de las calificaciones es: ${average}`);