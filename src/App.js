import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

import ActionBar from './components/ActionBar';
import Content from './components/Content';
import NavigationBar from './components/NavigationBar';

import configureStore from './configureStore'

let store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={style.mainContainer}>
          <ActionBar />
          <Content />
          <NavigationBar />
        </View>
      </Provider>
    );
  }
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fefefe'
  }
});