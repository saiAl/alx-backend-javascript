import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => {
      const obj = values.map((item) => {
        if (item.status === 'fulfilled') {
          return item;
        }
        return { status: item.status, value: String(item.reason) };
      });
      return obj;
    });
}
