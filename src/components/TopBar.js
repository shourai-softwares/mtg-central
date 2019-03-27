import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 7,
    paddingVertical: 6,
  },
  container: {
    backgroundColor: '#697268',
    flexDirection: 'row',
    paddingTop: 24,
  },
});

const TopBar = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={() => navigation.openDrawer()}>
      <Ionicons name="md-menu" size={30} color="white" />
    </TouchableOpacity>
    <Text>Hey</Text>
  </View>
);
TopBar.propTypes = {
  navigation: PropTypes.object,
};

export default TopBar;
