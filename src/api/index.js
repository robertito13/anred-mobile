import axios from 'axios';
import { URL, LATEST } from '../constants/API';

export function getArticles(type = LATEST, page = 1) {
  let response = axios.get(`${URL}${type}/?page=${page}&header=true`);

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