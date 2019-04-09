import React from 'react';
import { Text, View } from 'react-native';
import Axios from 'axios';
import Button from '../components/Button';
import Modal from '../components/Modal';
import ScreenView from '../components/ScreenView';
import TextInput from '../components/TextInput';
import CardList from '../components/CardList';

class DecksScreen extends React.Component {
  static navigationOptions = {
    title: 'New Deck',
  };

  constructor(props) {
    super(props);

    this.state = {
      cardSearch: '',
      deck: {
        name: '',
        description: '',
      },
      deckCards: {},
      isQuickAddOpen: false,
      searchResults: [],
    };
  }

  handleSave = () => {
    Axios.post('decks', this.state.deck, {
      headers: { Authorization: 'Token myToken' },
    })
      // eslint-disable-next-line no-console
      .then(res => console.log(res));
  };

  handleSearch = () => {
    Axios.get('cards/', {
      headers: { Authorization: 'Token myToken' },
    })
      .then((res) => {
        this.setState(curState => ({ searchResults: curState.searchResults.concat(res.data) }));
      })
      // eslint-disable-next-line no-console
      .catch(err => console.log('err', err));
  };

  addCardToDeck = ({ card }) => {
    this.setState((prevState) => {
      const deckCards = Object.assign({}, prevState.deckCards);
      const cardId = card.id;

      if (!deckCards[cardId]) {
        deckCards[cardId] = { card, quantity: 1 };
      } else {
        deckCards[cardId].quantity += 1;
      }

      return { deckCards };
    });
  };

  render() {
    return (
      <ScreenView>
        <Modal
          visible={this.state.isQuickAddOpen}
          onRequestClose={() => this.setState({ isQuickAddOpen: false })}
        >
          <TextInput
            placeholder="Card Name"
            value={this.state.cardSearch}
            onChangeText={text => this.setState({ cardSearch: text })}
          />
          <Button style={{ marginTop: 5 }} onPress={this.handleSearch}>Search</Button>
          <CardList
            cards={this.state.searchResults}
            extraComponent={card => (
              <Button onPress={() => this.addCardToDeck(card)}>Add</Button>
            )}
            style={{ marginTop: 5 }}
          />
        </Modal>
        <TextInput
          placeholder="Title"
          value={this.state.deck.name}
          onChangeText={text => this.setState(
            prevState => ({ deck: { ...prevState.deck, name: text } }))}
        />
        <TextInput
          placeholder="Description"
          value={this.state.deck.description}
          onChangeText={text => this.setState(
            prevState => ({ deck: { ...prevState.deck, description: text } }))}
        />
        <Text>Cards</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <Button onPress={() => this.setState({ isQuickAddOpen: true })}>Quick Add</Button>
          <Button onPress={() => null}>Advanced Search</Button>
        </View>
        <CardList cards={this.state.deckCards} />
        <Button onPress={this.handleSave}>Save</Button>
      </ScreenView>
    );
  }
}

export default DecksScreen;
