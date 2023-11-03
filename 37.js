/* 
    37.-Cargar las notas de los alumnos de un colegio en función del 
    número de cursos y del número de alumnos por curso
*/

const numCourses = 3;
const numStudentsPerCourse = 5;

const school = [];

for (let course = 1; course <= numCourses; course++) {
  const gradesCourse = [];
  for (let student = 1; student <= numStudentsPerCourse; student++) {
    const grade = parseFloat(prompt(`Ingresa la calificación del estudiante ${student} en el curso ${course}:`));
    gradesCourse.push(grade);
  }
  school.push(gradesCourse);
}

for (let course = 0; course < school.length; course++) {
  for (let student = 0; student < school[course].length; student++) {
    console.log(`Calificación del estudiante ${student + 1} en el curso ${course + 1}: ${school[course][student]}`);
    window.alert(`Calificación del estudiante ${student + 1} en el curso ${course + 1}: ${school[course][student]}`);
  }
}

