import React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, Text, View } from 'react-native';
import { primaryDarkColor } from '../constants/Colors';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: primaryDarkColor,
    borderRadius: 5,
    flexDirection: 'row',
    padding: 5,
  },
  body: {
    marginLeft: 10,
  },
  deckName: {
    color: primaryDarkColor,
    fontSize: 17,
    fontWeight: 'bold',
  },
});

const DeckLineView = ({ deck }) => (
  <View style={styles.container}>
    <Image
      source={{ uri: 'https://www.mtgpics.com/pics/big/dgm/104.jpg' }}
      style={{ width: 100, height: 150, resizeMode: 'contain' }}
    />
    <View style={styles.body}>
      <Text style={styles.deckName}>{deck.name}</Text>
      <Text>{deck.description}</Text>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: 'darkgray', alignItems: 'center' }}>
          <Text>4</Text>
        </View>
        <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: 'gray' }} />
        <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: 'red' }} />
      </View>
    </View>
  </View>
);
DeckLineView.propTypes = {
  deck: PropTypes.object,
};

export default DeckLineView;
