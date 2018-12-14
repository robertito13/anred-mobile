import React, { Component } from "react";
import { View } from "react-native";

import ArticlesList from '../components/ArticlesList';

export default class HotestScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ArticlesList type="hotest" />
      </View>
    );
  }
}

