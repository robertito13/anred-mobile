import React, { Component } from "react";
import { View } from "react-native";

import ArticlesList from '../components/ArticlesList';

export default class HomeScreen extends Component {
  render() {
    const section = this.props.navigation.getParam('section');

    return (
      <View style={{ flex: 1 }}>
        <ArticlesList type="section" section={section} />
      </View>
    );
  }
}