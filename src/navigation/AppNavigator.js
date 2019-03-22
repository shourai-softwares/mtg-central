import React from 'react';
import { View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainDrawer';

export default createAppContainer(createStackNavigator({
  Main: {
    screen: MainTabNavigator,
    navigationOptions: {
      header: <View style={{ backgroundColor: '#697268', height: 75 }} />,
    },
  },
}));
