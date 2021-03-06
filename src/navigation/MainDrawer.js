import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import CollectionTabs from './CollectionTabs';
import DBScreen from '../screens/DBScreen';
import HomeScreen from '../screens/HomeScreen';
import MarketScreen from '../screens/MarketScreen';

const drawerNav = createDrawerNavigator({
  Home: HomeScreen,
  Collection: CollectionTabs,
  Market: MarketScreen,
  DataBase: DBScreen,
}, {
  drawerBackgroundColor: '#697268',
  contentOptions: {
    activeTintColor: '#eed7c5',
    activeBackgroundColor: '#4e5340',
    inactiveTintColor: '#c89f9c',
  },
});

export default drawerNav;
