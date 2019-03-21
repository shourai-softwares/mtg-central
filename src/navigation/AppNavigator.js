import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';

import MainTabNavigator from './MainDrawer';

export default createAppContainer(createStackNavigator({
  Main: MainTabNavigator,
}));
