import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainDrawer from './MainDrawer';
import TopBar from '../components/TopBar';

export default createAppContainer(createStackNavigator({
  Main: {
    screen: MainDrawer,
    navigationOptions: ({ navigation }) => ({
      header: <TopBar navigation={navigation} />,
    }),
  },
}));
