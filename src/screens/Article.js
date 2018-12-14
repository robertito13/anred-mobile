import React, { Component } from "react";
import { View } from "react-native";

import ArticleItem from '../components/ArticleItem';

export default class ArticleScreen extends Component {
  render() {
    const article = this.props.navigation.getParam('article');

    return (
      <View style={{ flex: 1 }}>
        <ArticleItem id={ article } />
      </View>
    );
  }
}
