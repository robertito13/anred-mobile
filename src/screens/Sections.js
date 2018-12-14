import React, { Component } from "react";
import { View } from "react-native";

import SectionsList from '../components/SectionsList';

export default class SectionsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <SectionsList />
      </View>
    );
  }
}
