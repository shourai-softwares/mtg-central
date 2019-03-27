/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './src/navigation/AppNavigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

class App extends React.Component {
  static propTypes = {
    skipLoadingScreen: PropTypes.bool,
  };

  constructor(props) {
    super(props);

    axios.defaults.baseURL = 'https://mtg-central-backend.herokuapp.com/';

    this.state = {
      isLoadingComplete: false,
    };
  }

  _loadResourcesAsync = async () => Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Icon.Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free
      // to remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);

  _handleLoadingError = (error) => {
    // eslint-disable-next-line no-console
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }

    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
}

export default App;
