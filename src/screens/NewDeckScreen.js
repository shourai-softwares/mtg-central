import React from 'react';
import Button from '../components/Button';
import ScreenView from '../components/ScreenView';

class DecksScreen extends React.Component {
  static navigationOptions = {
    title: 'New Deck',
  };

  render() {
    return (
      <ScreenView>
        <Button onPress={() => null}>yess</Button>
      </ScreenView>
    );
  }
}

export default DecksScreen;
