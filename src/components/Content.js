import React, { Component } from 'react';
import { connect } from 'react-redux';

import ArticlesList from './ArticlesList';

class Content extends Component {
  render() {
    let screenComponent = null;
    switch(this.props.screen) {
      case 'hotest':
      screenComponent = <ArticlesList type='hotest' />;
      break;
    default:
      screenComponent = <ArticlesList type='latest' />;
      break;
    }

    return(screenComponent);
  }
}

const mapStateToProps = (state) => {
  return {
    screen: state.screen
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);