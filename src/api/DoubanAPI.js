import 'es6-promise';
import 'isomorphic-fetch';

const API_SERVER = 'http://localhost:3001/';

const BookAPI = {
  get: (data, resolve, reject) => {
    fetch(API_SERVER + data)
      .then((response) => {
        if (response.status !== 200) {
          resolve({notFound: true});
        }
        resolve(response.json());
      })
      .catch(reject);
  },


  getOriginInfo: () => new Promise((resolve, reject) => {
    BookAPI.get('data.json', resolve, reject);
  })
};

export default BookAPI;