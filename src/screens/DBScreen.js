import React from 'react';
import TextInput from '../components/TextInput';
import ScreenView from '../components/ScreenView';

class DBScreen extends React.Component {
  static navigationOptions = {
    title: 'Database',
  };

  render() {
    return (
      <ScreenView>
        <TextInput placeholder="Teste" />
      </ScreenView>
    );
  }
}

export default DBScreen;
