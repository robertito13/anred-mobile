import React, { Component } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import HTMLView from 'react-native-render-html';

import * as Api from '../api';

export default class Logo extends Component {
  constructor(props) {
    super(props);

    this.getData = this.getData.bind(this);
    this.parseResponse = this.parseResponse.bind(this);

    this.state = {
      thumbnail: '',
      title: '',
      content: ''
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    Api.getArticle(this.props.id)
      .then( this.parseResponse )
      .catch( error => console.log(error));
  }

  parseResponse(data) {
    this.setState({
      ...data
    })
  }

  render() {
    if (this.state.title == '') {
      return(
        <Text>Cargando...</Text>
      );
    }

    let thumbnail = (this.state.thumbnail != '') ? { uri: this.state.thumbnail } : require('../../assets/placemark.png')

    return(
      <ScrollView style={ style.container }>
        <Image style={style.thumbnail} source={ thumbnail } />
        <Text style={style.title}>{ this.state.title }</Text>
        <View style={style.content}>
          <HTMLView
            html={ this.state.content }
            imagesMaxWidth={ Dimensions.get('window').width }
            tagsStyles={{
              p: {
                fontSize: 15,
                paddingVertical: 10,
                lineHeight: 20
              },
              img: {
                maxWidth: Dimensions.get('window').width-20,
                height: '100%',
                marginVertical: 5
              },
              iframe:{
                maxWidth: Dimensions.get('window').width-20,
                height: '100%'
              }
            }}
          />
        </View>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  thumbnail: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/3,
    resizeMode: 'cover'
  },
  title: {
    fontSize: 20,
    fontFamily: "LibreFranklin",
    width: Dimensions.get('window').width,
    padding: 10,
    fontWeight: 'bold'
  },
  content: {
    width: Dimensions.get('window').width,
    paddingHorizontal: 10
  }
});