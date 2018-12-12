import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { changeScreen } from '../actions';

class NavigationBar extends Component {
  render() {
    return(
      <View style={style.container}>
        <TouchableOpacity onPress={()=>this.props.toLatest()}>
          <Image style={style.button} source={require('../../assets/homeIcon.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.toHotest()}>
          <Image style={style.button} source={require('../../assets/fireIcon.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.toSections()}>
          <Image style={style.button} source={require('../../assets/gridIcon.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    padding: 4,
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderStyle: 'solid',
    backgroundColor: '#fefefe',
    borderTopColor: '#333'

  },
  button: {
    height: 48,
    width: 48,
    opacity: .3
  }
});

const mapStateToProps = (state) => {
  return {
    screen: state.screen
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      toHotest: () => dispatch(changeScreen('hotest')),
      toLatest: () => dispatch(changeScreen('latest')),
      toSections: () => dispatch(changeScreen('sections')),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);