export default function updateUniqueItems(arg) {
  for (const entity of arg) {
    const key = arg.get(entity[0]);
    if (key === 1) {
      arg.set(entity[0], 100);
    }
  }
}
