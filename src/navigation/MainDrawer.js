import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import CollectionScreen from '../screens/CollectionScreen';
import MarketScreen from '../screens/MarketScreen';

const drawerNav = createDrawerNavigator({
  Home: HomeScreen,
  Collection: CollectionScreen,
  Market: MarketScreen,
});

export default drawerNav;
