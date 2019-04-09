import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

const CardLineView = ({ card, children }) => (
  <View style={{ flexDirection: 'row', padding: 2 }}>
    <Text>{card.name} - {card.type}</Text>
    {children}
  </View>
);
CardLineView.propTypes = {
  card: PropTypes.object.isRequired,
  children: PropTypes.node,
};

export default CardLineView;
