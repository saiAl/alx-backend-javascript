export default function getStudentIdsSum(students) {
  let value = 0;

  const sum = students.reduce((prev, next) => {
    value += next.id;
    return value;
  }, 0);

  return sum;
}
