import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#eed7c5',
    flexGrow: 1,
    padding: 10,
  },
});

const ScreenView = ({ children }) => (
  <View style={styles.background}>
    {children}
  </View>
);
ScreenView.propTypes = {
  children: PropTypes.node,
};

export default ScreenView;
