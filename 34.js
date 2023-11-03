/* 
    34.- Usando el segundo ejemplo, hacer un programa que busque una nota en la lista. (asumo que el ejercicio anterior)
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

const subjectToSearch = prompt("Ingresa la materia de la que quieres saber la calificacion");

let found = false;
for (let i = 0; i < grades.length; i++) {
    if (grades[i].materia === subjectToSearch) {
        console.log(`La calificación de ${subjectToSearch} es: ${grades[i].calificacion}`);
        window.alert(`La calificación de ${subjectToSearch} es: ${grades[i].calificacion}`);
        found = true;
        break;
    }
}

if (!found) {
    console.log(`La materia ${subjectToSearch} no fue encontrada.`);
    window.alert(`La materia ${subjectToSearch} no fue encontrada.`);
}