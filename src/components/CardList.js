import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CardLineView from './CardLineView';

const styles = StyleSheet.create({
  container: {
    borderColor: '#4e5340',
    borderRadius: 2,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
  },
});

class CardList extends PureComponent {
  static propTypes = {
    cards: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    extraComponent: PropTypes.func,
    style: PropTypes.any,
  };

  static defaultProps = {
    cards: [],
  };

  getEntries = () => {
    const { cards } = this.props;

    if (Array.isArray(cards)) {
      return cards.map(card => ({ card }));
    }

    return Object.values(cards);
  };

  render() {
    const { extraComponent, style } = this.props;
    const cardEntries = this.getEntries();

    if (cardEntries.length === 0) {
      return (
        <View style={[styles.container, style]}>
          <Text style={{ color: '#4e5340' }}>No Results</Text>
        </View>
      );
    }

    return (
      <ScrollView style={style} contentContainerStyle={styles.container}>
        {cardEntries.map(cardEntry => (
          <CardLineView key={cardEntry.card.id} card={cardEntry.card}>
            {extraComponent ? extraComponent(cardEntry) : null}
          </CardLineView>
        ))}
      </ScrollView>
    );
  }
}

export default CardList;
