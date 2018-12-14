import React, { Component } from "react";
import { View } from "react-native";

import ArticlesList from '../components/ArticlesList';

export default class HomeScreen extends Component {
  componentWillMount() {
    this.props.navigation.setParams({
      scrollToTop: this._scrollToTop,
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ArticlesList type="latest" />
      </View>
    );
  }
}
