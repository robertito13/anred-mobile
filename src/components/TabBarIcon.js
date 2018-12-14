import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class TabBarIcon extends Component {
  render() {
    return (
      <Icon
        name={this.props.icon}
        color={this.props.color}
        size={24}
      />
    );
  }
}