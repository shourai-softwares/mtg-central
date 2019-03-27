import axios from 'axios';
import React from 'react';
import { Text } from 'react-native';
import TextInput from '../components/TextInput';
import ScreenView from '../components/ScreenView';

class DBScreen extends React.Component {
  static navigationOptions = {
    title: 'Database',
  };

  constructor(props) {
    super(props);

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    axios.get('cards/')
      .then((res) => {
        this.setState({ cards: res.data });
      })
      // eslint-disable-next-line no-console
      .catch(error => console.log(error));
  }

  render() {
    return (
      <ScreenView>
        <TextInput placeholder="Teste" />
        {this.state.cards.map(card => <Text>{card.name}</Text>)}
      </ScreenView>
    );
  }
}

export default DBScreen;
