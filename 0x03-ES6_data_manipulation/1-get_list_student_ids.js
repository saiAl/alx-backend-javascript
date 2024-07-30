export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  const newArray = array.map((element) => element.id);
  return newArray;
}
