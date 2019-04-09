import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import Axios from 'axios';
import Button from '../components/Button';
import ScreenView from '../components/ScreenView';
import DeckLineView from '../components/DeckLineView';

class DecksScreen extends React.Component {
  static navigationOptions = {
    title: 'Decks',
  };

  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      decks: [],
    };
  }

  componentDidMount() {
    Axios.get('decks/', {
      headers: { Authorization: 'Token myToken' },
    })
      .then((res) => {
        this.setState({ decks: res.data });
      });
  }

  render() {
    return (
      <ScreenView>
        <Button onPress={() => this.props.navigation.navigate('NewDeck')}>
          New Deck
        </Button>
        <View style={{ marginVertical: 5 }} />
        {!this.state.decks.length ?
          <Text>No Decks</Text>
          :
          this.state.decks.map(deck => <DeckLineView key={deck.id} deck={deck} />)
        }
      </ScreenView>
    );
  }
}

export default DecksScreen;
