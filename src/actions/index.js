import * as types from '../constants/ActionTypes';
import { LATEST, HOTEST } from '../constants/API';
import { getArticles } from '../api';

export function getLatestNews() {
  return dispatch => {
    dispatch({ type: types.LATEST_NEWS_REQUEST });

    getArticles(LATEST)
      .then( data => dispatch({ type: types.LATEST_NEWS_SUCCESS, articles: data }) )
      .catch( () => dispatch({ type: types.LATEST_NEWS_FAILURE }) )
  }
};

export function getHotestNews() {
  return dispatch => {
    dispatch({ type: types.HOTEST_NEWS_REQUEST });

    getArticles(HOTEST)
      .then( data => dispatch({ type: types.HOTEST_NEWS_SUCCESS, articles: data }) )
      .catch( () => dispatch({ type: types.HOTEST_NEWS_FAILURE }) )
  }
};

export function changeScreen(screen) {
  return {
    type: types.CHANGE_SCREEN,
    screen
  }
}