import React, {Component} from 'react';
import {Image, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import ListLatest from './ListLatest';

export default class App extends Component {
  render() {
    return (
      <View style={style.mainContainer}>
        <View style={style.actionBar}>
          <Image style={style.logo} source={require('../assets/logo-invertido.png')} />
          <View style={style.actionToolbar}>
            <TouchableWithoutFeedback>
              <Image style={style.actionButton} source={require('../assets/searchIcon.png')} />
            </TouchableWithoutFeedback>
          </View>
        </View>
        <ListLatest />
        <View style={style.navigationBar}>
          <TouchableWithoutFeedback>
            <Image style={style.navigationButton} source={require('../assets/homeIcon.png')} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Image style={style.navigationButton} source={require('../assets/fireIcon.png')} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Image style={style.navigationButton} source={require('../assets/gridIcon.png')} />
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fefefe'
  },
  newsContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  actionBar: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#111'
  },
  navigationBar: {
    padding: 4,
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderStyle: 'solid',
    backgroundColor: '#fefefe',
    borderTopColor: '#333'

  },
  actionToolbar: {
    padding: 8
  },
  actionButton: {
    height: 24,
    width: 24
  },
  navigationButton: {
    height: 48,
    width: 48,
    opacity: .3
  },
  logo: {
    height: 36,
    width: 108
  }
});