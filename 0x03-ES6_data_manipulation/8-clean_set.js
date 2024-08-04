export default function cleanSet(set, startString) {
  const arr = [];
  let sub;
  for (const s of set) {
    if (startString && typeof startString === 'string') {
      sub = s.substring(0, startString.length);
      if (sub === startString) {
        arr.push(s.substring(startString.length));
      }
    }
  }

  return arr.join('-');
}
