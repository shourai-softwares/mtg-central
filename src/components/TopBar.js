import React, { PureComponent } from 'react';
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

class TopBar extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object,
  };

  handleIconPress = () => {
    if (this.props.navigation.state.isDrawerOpen) {
      this.props.navigation.closeDrawer();
    } else {
      this.props.navigation.openDrawer();
    }
  };

  render() {
    const icon = this.props.navigation.state.isDrawerOpen ? 'md-close' : 'md-menu';

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.handleIconPress}>
          <Ionicons name={icon} size={30} color="white" />
        </TouchableOpacity>
        <Text>Hey</Text>
      </View>
    );
  }
}

export default TopBar;
