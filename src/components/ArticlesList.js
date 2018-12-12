import React, { Component } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements'
import { connect } from 'react-redux';
import { getLatestNews, getHotestNews, getSection } from '../actions';

class ArticlesList extends Component {

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.type !== this.props.type) {
      this.getData();
    }
  }

  getData() {
    switch(this.props.type) {
      case 'latest':
        this.props.fetchLatest();
        break;
      case 'hotest':
        this.props.fetchHotest();
        break;
      case 'section':
        this.props.fetchSection(this.props.section);
        break;
    }
  }

  render() {
    if (!this.props.articles) return null;

    return(
      <FlatList
        data={ this.props.articles }
        keyExtractor={ item => 'article-' + item.id }
        ListHeaderComponent = { this.renderHeader }
        renderItem={ this.renderItem }
      />
    );
  }

  renderItem = ({ item }) => {
    let thumbnail = (item.thumbnail != '') ? { uri: item.thumbnail } : require('../../assets/placemark.png')

    return (
      <ListItem
        title={ item.title }
        titleStyle={itemStyle.title}
        rightElement={<Image style={itemStyle.thumbnail} source={ thumbnail } />}
        containerStyle={{ borderBottomWidth: 0 }}
      />
    );
  }

  renderHeader = () => {
    if (!this.props.header) return null;

    let thumbnail = (this.props.header.thumbnail != '') ? { uri: this.props.header.thumbnail } : require('../../assets/placemark.png')

    return(
      <View>
        <Image style={headerStyle.thumbnail} source={ thumbnail } />
        <Text style={headerStyle.title}>{ this.props.header.title }</Text>
        { (this.props.header.excerpt != '') && <Text style={headerStyle.excerpt} numberOfLines={5}>{ this.props.header.excerpt }</Text> }
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

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
    header: state.header
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      fetchLatest: () => dispatch(getLatestNews()),
      fetchHotest: () => dispatch(getHotestNews()),
      fetchSection: (section) => dispatch(getSection(section))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);
