import React, { Component } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { ListItem } from 'react-native-elements'
import { withNavigation } from 'react-navigation';

import * as Api from '../api';
import { LATEST, HOTEST } from '../constants/API';

class ArticlesList extends Component {
  constructor(props) {
    super(props);

    this.parseResponse = this.parseResponse.bind(this);
    this.getData = this.getData.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.renderHeader = this.renderHeader.bind(this);

    this.state = {
      articles: [],
      header: {}
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    switch(this.props.type) {
      case 'latest':
        Api.getArticles(LATEST)
          .then( this.parseResponse )
          .catch( error => console.log(error));
      break;
      case 'hotest':
        Api.getArticles(HOTEST)
          .then( this.parseResponse )
          .catch( error => console.log(error));
      break;
      case 'section':
        Api.getSection( this.props.section )
          .then( this.parseResponse )
          .catch( error => console.log(error));
      break;
    }
  }

  parseResponse(data) {
    this.setState({
      header: data.shift(),
      articles: data
    })
  }

  render() {
    if (this.state.articles.length == 0) {
      return(
        <Text>Cargando...</Text>
      );
    }

    return(
      <FlatList
        data={ this.state.articles }
        keyExtractor={ item => 'article-' + item.id }
        ListHeaderComponent = { this.renderHeader }
        renderItem={ this.renderItem }
      />
    );
  }

  renderItem({ item }) {
    let thumbnail = (item.thumbnail != '') ? { uri: item.thumbnail } : require('../../assets/placemark.png')

    return (
      <ListItem
        title={ item.title }
        titleStyle={itemStyle.title}
        rightElement={<Image style={itemStyle.thumbnail} source={ thumbnail } />}
        onPress={() => this.props.navigation.navigate('Article', { article: item.id }) }
      />
    );
  }

  renderHeader() {
    if (!this.state.header) return null;

    let thumbnail = (this.state.header.thumbnail != '') ? { uri: this.state.header.thumbnail } : require('../../assets/placemark.png')

    return(
      <TouchableHighlight
        underlayColor='lightgrey'
        onPress={() => this.props.navigation.navigate('Article', { article: this.state.header.id }) }
      >
        <View>
          <Image style={headerStyle.thumbnail} source={ thumbnail } />
          <Text style={headerStyle.title}>{ this.state.header.title }</Text>
          { (this.state.header.excerpt != '') && <Text style={headerStyle.excerpt} numberOfLines={5}>{ this.state.header.excerpt }</Text> }
        </View>
      </TouchableHighlight>
    );
  }
}

const itemStyle = StyleSheet.create({
  thumbnail: {
    width: Dimensions.get('window').width/4,
    height: Dimensions.get('window').width/4,
    resizeMode: 'cover'
  },
  title: {
    fontWeight: 'bold',
    fontFamily: 'LibreFranklin',
    textAlignVertical: 'top'
  }
});

const headerStyle = StyleSheet.create({
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
  excerpt: {
    fontSize: 15,
    fontFamily: "LibreFranklin",
    width: Dimensions.get('window').width,
    paddingHorizontal: 10
  }
});

export default withNavigation(ArticlesList);