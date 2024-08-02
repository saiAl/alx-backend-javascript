export default function updateStudentGradeByCity(students, city, newGrades) {
  const filtered = students.filter((element) => element.location === city);
  filtered.map((student) => {
    for (let idx = 0; idx < newGrades.length; idx += 1) {
      if (student.id === newGrades[idx].studentId) {
        student.grade = newGrades[idx].grade;
      } else if (
        student.id !== newGrades[idx].studentId &&
        !student.hasOwnProperty('grade')
      ) {
        student.grade = 'N/A';
      }
    }
    return student;
  });

  return filtered;
}
