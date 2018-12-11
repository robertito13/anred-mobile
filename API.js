import axios from 'axios';

const API_URL = 'http://anred.dev.cc/wp-json/mobile/v1/';

export function getArticles(page = 1) {
  let response = axios.get(`${API_URL}latest/?page=${page}`);

  return response
  .then(result => {
    console.log('[getArticles] Data received', result.data);
    return result.data;
  })
  .catch(error => {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }

    console.log(error.config);
  });
};