import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#eee2df',
    borderColor: '#c89f9c',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  text: {
    color: '#697268',
  },
});

const StyledTextInput = ({ ...rest }) => (
  <View style={styles.box}>
    <TextInput style={styles.text} {...rest} />
  </View>
);

export default StyledTextInput;
