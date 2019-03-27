import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';

import CollectionScreen from '../screens/CollectionScreen';
import DecksScreen from '../screens/DecksScreen';

const tabNav = createMaterialTopTabNavigator({
  Decks: DecksScreen,
  AllCards: CollectionScreen,
}, {
  tabBarOptions: {
    style: {
      backgroundColor: '#697268',
    },
    indicatorStyle: {
      backgroundColor: '#c89f9c',
    },
  },
});

export default tabNav;
