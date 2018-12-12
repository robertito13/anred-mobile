import React, { Component } from 'react';
import { Dimensions, FlatList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements'
import { connect } from 'react-redux';
import { getSections, changeSection } from '../actions';

class SectionsList extends Component {

  componentDidMount() {
    this.props.fetchSections();
  }

  render() {
    if (!this.props.sections) return null;

    return(
      <FlatList
        data={ this.props.sections }
        numColumns={2}
        keyExtractor={ item => 'section-' + item.id }
        renderItem={ this.renderItem }
      />
    );
  }

  renderItem = ({ item, index }) => {
    return (
      <ListItem
        containerStyle={[
          style.item,
          { backgroundColor: ((index - 1) % 4 && (index - 2) % 4) ? '#eee': '#fff' }
        ]}
        title={ item.name }
        titleStyle={style.title}
        onPress={()=>this.props.toSection(item.id)}
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

const mapStateToProps = (state) => {
  return {
    sections: state.sections
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      fetchSections: () => dispatch(getSections()),
      toSection: (section) => dispatch(changeSection(section))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionsList);
