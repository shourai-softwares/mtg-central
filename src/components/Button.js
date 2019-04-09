import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#697268',
    borderColor: '#4e5340',
    borderRadius: 5,
    borderWidth: 1,
    padding: 7,
  },
  text: {
    color: '#eee2df',
    fontWeight: 'bold',
  },
});

const StyledButton = ({ children, onPress, style }) => (
  <TouchableHighlight
    style={[styles.button, style]}
    underlayColor="#4e5340"
    onPress={onPress}
  >
    <Text style={styles.text}>{children}</Text>
  </TouchableHighlight>
);
StyledButton.propTypes = {
  children: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.any,
};

export default StyledButton;
