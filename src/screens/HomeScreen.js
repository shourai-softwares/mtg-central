import React from 'react';
import ScreenView from '../components/ScreenView';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ScreenView />
    );
  }
}

export default HomeScreen;
