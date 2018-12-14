import React, { Component } from 'react';
import { Dimensions, FlatList, StyleSheet, Text } from 'react-native';
import { ListItem } from 'react-native-elements'
import { withNavigation } from 'react-navigation';

import * as Api from '../api';

class SectionsList extends Component {
  constructor(props) {
    super(props);

    this.getData = this.getData.bind(this);
    this.parseResponse = this.parseResponse.bind(this);
    this.renderItem = this.renderItem.bind(this);

    this.state = {
      sections: []
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    Api.getSections()
      .then( this.parseResponse )
      .catch( error => console.log(error));
  }

  parseResponse(data) {
    this.setState({
      sections: data
    })
  }

  render() {
    if (this.state.sections.length == 0) {
      return(
        <Text>Cargando...</Text>
      );
    }

    return(
      <FlatList
        data={ this.state.sections }
        numColumns={2}
        keyExtractor={ item => 'section-' + item.id }
        renderItem={ this.renderItem }
      />
    );
  }

  renderItem({ item, index }) {
    return (
      <ListItem
        containerStyle={[
          style.item,
          { backgroundColor: ((index - 1) % 4 && (index - 2) % 4) ? '#eee': '#fff' }
        ]}
        title={ item.name }
        titleStyle={style.title}
        onPress={() => this.props.navigation.navigate('Section', { section: item.id }) }
      />
    );
  }
}

const style = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontFamily: 'LibreFranklin',
    textAlign: 'center'
  },
  item: {
    width: Dimensions.get('window').width/2,
    height: Dimensions.get('window').height/8,
  }
});

export default withNavigation(SectionsList);