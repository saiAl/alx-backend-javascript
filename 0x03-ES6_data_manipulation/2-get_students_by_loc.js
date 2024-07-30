export default function getStudentsByLocation(students, city) {
  const arr = students.filter((element) => element.location === city);
  return arr;
}
