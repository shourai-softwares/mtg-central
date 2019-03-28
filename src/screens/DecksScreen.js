import React from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import ScreenView from '../components/ScreenView';

class DecksScreen extends React.Component {
  static navigationOptions = {
    title: 'Decks',
  };

  static propTypes = {
    navigation: PropTypes.object,
  };

  render() {
    return (
      <ScreenView>
        <Button onPress={() => this.props.navigation.navigate('NewDeck')}>
          New Deck
        </Button>
      </ScreenView>
    );
  }
}

export default DecksScreen;
