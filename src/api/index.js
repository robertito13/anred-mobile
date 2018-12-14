import axios from 'axios';
import { URL, LATEST } from '../constants/API';

export function getArticle(id) {
  let response = axios.get(`${URL}article/${id}`);

  return response
  .then(result => {
    console.log(`[getArticle ${id}] Data received`, result.data);
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

export function getSections() {
  let response = axios.get(`${URL}sections`);

  return response
  .then(result => {
    console.log('[getSections] Data received', result.data);
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

export function getSection( section, page = 1 ) {
  let response = axios.get(`${URL}section/${section}/?page=${page}&header=true`);

  return response
  .then(result => {
    console.log('[getSection] Data received', result.data);
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