import React, { Component } from 'react';
import {
  StackActions,
  NavigationActions,
  createMaterialTopTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import {StatusBar, Text} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import ArticleScreen from './screens/Article';
import HomeScreen from './screens/Home';
import HotestScreen from './screens/Hotest';
import SectionsScreen from './screens/Sections';
import SectionScreen from './screens/Section';

import Logo from './components/Logo';
import TabBarIcon from './components/TabBarIcon';

const SectionsNavigator = createStackNavigator(
  {
    Sections: { screen: SectionsScreen },
    Section: { screen: SectionScreen }
  },
  {
    headerMode: 'none'
  }
);

const BottomNavigator = createMaterialTopTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
            <TabBarIcon icon="home" color={tintColor} />
        ),
        tabBarLabel: 'Inicio'
      }
    },
    Hotest: {
      screen: HotestScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
            <TabBarIcon icon="whatshot" color={tintColor} />
        ),
        tabBarLabel: 'Populares'
      }
    },
    Sections: {
      screen: SectionsNavigator,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
            <TabBarIcon icon="apps" color={tintColor} />
        ),
        tabBarLabel: 'Secciones',
        tabBarOnPress: ({navigation, defaultHandler}) => {
          if (navigation.state.index > 0 ) {
            const resetAction = StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Sections' }),
              ],
            });
            navigation.dispatch(resetAction);
          }

          defaultHandler();
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: '#f58220',
      showIcon: true,
      style: {
        backgroundColor:'#222'
      },
      labelStyle: {
        fontSize: 12,
        marginBottom: 0
      },
      indicatorStyle: {
        backgroundColor: '#f58220'
      }
    },
    tabBarPosition: 'bottom'
  }
);

const TopNavigator = createStackNavigator(
  {
    screen: {
      screen: BottomNavigator,
      navigationOptions: ({navigation}) => {
        let sectionsRoute = navigation.state.routes[2];
        let options = {
          headerLeft: <Logo />,
          headerStyle: {
            backgroundColor:'#222'
          }
        };

        if (sectionsRoute.index > 0) {
          options.headerRight = (
            <Text style={{ marginHorizontal: 12, color: '#eee', fontSize: 16, fontFamily: "LibreFranklin",fontWeight: 'bold' }}>{sectionsRoute.routes[1].params.title}</Text>
          );
        }

        if (navigation.state.index != 2) {
          options.headerRight = null;
        }

        return options;
      }
    },
    Article: {
      screen: ArticleScreen,
      navigationOptions: {
        headerRight: <Logo />,
        headerStyle: {
          backgroundColor:'#222'
        }
      }
    }
  }
);

let AppContainer = createAppContainer(TopNavigator);

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor="#222" />
        <AppContainer />
      </SafeAreaView>
    );
  }
}
