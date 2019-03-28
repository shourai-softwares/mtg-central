import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainDrawer from './MainDrawer';
import TopBar from '../components/TopBar';
import NewDeckScreen from '../screens/NewDeckScreen';

const mainStack = createStackNavigator({
  Main: {
    screen: MainDrawer,
    navigationOptions: ({ navigation }) => ({
      header: <TopBar navigation={navigation} />,
    }),
  },
  NewDeck: NewDeckScreen,
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#697268',
    },
    headerTintColor: '#eee2df',
    headerTitleStyle: {
      color: '#eee2df',
    },
  },
});

export default createAppContainer(mainStack);
