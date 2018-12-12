import * as type from '../constants/ActionTypes'
import { LATEST } from '../constants/API';

const initialState = {
  screen: LATEST,
  header: {
    id: 0,
    title: '',
    excerpt: '',
    thumbnail: ''
  },
  articles: [
    {
      id: 0,
      title: '',
      thumbnail: ''
    }
  ]
};

const reducers = (state = initialState, action) => {
  console.log('REDUCER', action);
  switch(action.type) {
    case type.LATEST_NEWS_SUCCESS:
    case type.HOTEST_NEWS_SUCCESS:
      let header = action.articles.shift();
      let articles = action.articles;

      return {
        ...state,
        header,
        articles
      };
    case type.CHANGE_SCREEN:
      let screen = action.screen;
      return {
        ...state,
        screen
      };
    default:
      return state;
  }
}

export default reducers;