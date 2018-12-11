import React, {Component} from 'react';
import {Dimensions, FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {ListItem} from 'react-native-elements'
import {getLatestArticles} from './API';

export default class ListMore extends Component {
  state = {
    header: {
      id: 0,
      title: '',
      excerpt: '',
      thumbnail: ''
    },
    articles: [
      {
        id: 0,
        title: '',
        thumbnail: ''
      }
    ]
  };

  componentDidMount() {
    getLatestArticles()
      .then(data => {
        try {
          if (data.length > 0) {
            let header = data.shift();
            this.setState({ header: header });
            this.setState({ articles: data });
          }
        } catch {
          this.setState({
            articles: [
              {
                title: 'Error de conexión',
                ...this.state.articles[0]
              }
            ]
          })
        }
      });
  }

  render() {
    return(
      <FlatList
        data={ this.state.articles }
        ListHeaderComponent = { this.renderHeader }
        renderItem={ this.renderItem }
      />
    );
  }

  renderItem = ({ item }) => {
    let thumbnail = (item.thumbnail != '') ? { uri: item.thumbnail } : require('./assets/placemark.png')

    return (
      <ListItem
        key={ item.id }
        title={ item.title }
        titleStyle={itemStyle.title}
        rightElement={<Image style={itemStyle.thumbnail} source={ thumbnail } />}
        containerStyle={{ borderBottomWidth: 0 }}
      />
    );
  }

  renderHeader = () => {
    let thumbnail = (this.state.header.thumbnail != '') ? { uri: this.state.header.thumbnail } : require('./assets/placemark.png')

    return(
      <View>
        <Image style={headerStyle.thumbnail} source={ thumbnail } />
        <Text style={headerStyle.title}>{ this.state.header.title }</Text>
        { (this.state.header.excerpt != '') && <Text style={headerStyle.excerpt} numberOfLines={5}>{ this.state.header.excerpt }</Text> }
      </View>
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