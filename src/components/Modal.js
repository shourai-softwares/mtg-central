import React from 'react';
import PropTypes from 'prop-types';
import { Modal, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,.3)',
    flexGrow: 1,
    justifyContent: 'center',
    padding: 10,
  },
  modal: {
    backgroundColor: '#e3e5e3',
    borderRadius: 5,
    padding: 5,
  },
});

const StyledModal = ({ children, minHeight, ...rest }) => (
  <Modal
    transparent
    {...rest}
  >
    <View style={styles.container}>
      <View style={styles.modal}>
        {children}
      </View>
    </View>
  </Modal>
);
StyledModal.propTypes = {
  children: PropTypes.node,
  minHeight: PropTypes.number,
};

export default StyledModal;
