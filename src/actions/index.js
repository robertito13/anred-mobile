import * as types from '../constants/ActionTypes';
import { LATEST, HOTEST } from '../constants/API';
import * as api from '../api';

export function getLatestNews() {
  return dispatch => {
    dispatch({ type: types.LATEST_NEWS_REQUEST });

    api.getArticles(LATEST)
      .then( data => dispatch({ type: types.LATEST_NEWS_SUCCESS, articles: data }) )
      .catch( () => dispatch({ type: types.LATEST_NEWS_FAILURE }) )
  }
};

export function getHotestNews() {
  return dispatch => {
    dispatch({ type: types.HOTEST_NEWS_REQUEST });

    api.getArticles(HOTEST)
      .then( data => dispatch({ type: types.HOTEST_NEWS_SUCCESS, articles: data }) )
      .catch( () => dispatch({ type: types.HOTEST_NEWS_FAILURE }) )
  }
};

export function getSections() {
  return dispatch => {
    dispatch({ type: types.SECTIONS_REQUEST });

    api.getSections()
      .then( data => dispatch({ type: types.SECTIONS_SUCCESS, sections: data }) )
      .catch( () => dispatch({ type: types.SECTIONS_FAILURE }) )
  }
};

export function getSection( section ) {
  return dispatch => {
    dispatch({ type: types.SECTION_REQUEST });

    api.getSection( section )
      .then( data => dispatch({ type: types.SECTION_SUCCESS, articles: data }) )
      .catch( (err) => {
        dispatch({ type: types.SECTION_FAILURE })
      })
  }
};

export function changeScreen(screen) {
  return {
    type: types.CHANGE_SCREEN,
    screen
  }
}

export function changeSection(section) {
  return {
    type: types.CHANGE_SECTION,
    screen: 'section',
    section
  }
}