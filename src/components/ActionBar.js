import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';

export default class ActionBar extends Component {
  render() {
    return(
      <View style={style.container}>
        <Image style={style.logo} source={require('../../assets/logo-invertido.png')} />
        <View style={style.toolbar}>
          <Image style={style.button} source={require('../../assets/searchIcon.png')} />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#111'
  },
  toolbar: {
    padding: 8
  },
  button: {
    height: 24,
    width: 24
  },
  logo: {
    height: 36,
    width: 108
  }
});