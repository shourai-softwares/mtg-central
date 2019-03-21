import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
});

class CollectionScreen extends React.Component {
  static navigationOptions = {
    title: 'Collection',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
      </ScrollView>
    );
  }
}

export default CollectionScreen;
