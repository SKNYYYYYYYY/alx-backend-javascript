export default function getFullResponseFromAPI(success) {
  const myPromise2 = new Promise((res, rej) => {
    if (success === true) {
      res({ status: 200, body: 'Sucess' });
    } else {
      rej(Error('The fake API is not working currently'));
    }
  });
  return myPromise2;
}
