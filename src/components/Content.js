import React, { Component } from 'react';
import { connect } from 'react-redux';

import ArticlesList from './ArticlesList';
import SectionsList from './SectionsList';

class Content extends Component {
  render() {
    let screenComponent = null;
    console.log(this.props);
    switch(this.props.screen) {
      case 'hotest':
        screenComponent = <ArticlesList type='hotest' />;
        break;
      case 'sections':
        screenComponent = <SectionsList />;
        break;
      case 'section':
        screenComponent = <ArticlesList type='section' section={this.props.section} />;
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
    screen: state.screen,
    section: state.section
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);