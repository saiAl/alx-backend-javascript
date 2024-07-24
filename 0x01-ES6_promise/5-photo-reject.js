export default function uploadPhoto(filename) {
  return new Promise((resolved, rejected) => {
    rejected(Error(`${filename} cannot be processed`));
  });
}
