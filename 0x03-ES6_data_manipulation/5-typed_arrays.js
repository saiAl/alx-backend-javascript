export default function createInt8TypedArray(length, position, value) {
  const view = new DataView(new ArrayBuffer(length));

  if (position > length) {
    throw new Error('Position outside range');
  }
  view.setInt8(position, value);
  return view;
}
