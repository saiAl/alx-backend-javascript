export default function cleanSet(set, startString) {
  const arr = [];
  for (const s of set) {
    const sub = s.substring(0, 3);
    if (sub == startString) {
      arr.push(s.substring(3));
    }
  }

  return arr.join('-');
}
