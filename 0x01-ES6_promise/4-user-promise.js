export default function signUpUser(firstName, lastName) {
  return new Promise((resolved) => {
    resolved({ firstName, lastName });
  });
}
