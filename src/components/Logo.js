import React, { Component } from 'react';
import { Image } from "react-native";

export default class Logo extends Component {
  render() {
    return (
      <Image
        style={{ height: 24, width: 72, marginHorizontal: 12 }}
        source={require('../../assets/logo-invertido.png')}
      />
    );
  }
}