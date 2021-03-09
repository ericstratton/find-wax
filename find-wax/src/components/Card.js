import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import colors from '../config/colors'

function Card({ imageUrl, title, subTitle }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <View style={styles.cardText}>
        <Text>{title}</Text>
        <Text>{subTitle}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: colors.primary,
    marginVertical: 10,
    overflow: 'hidden',
  },
  cardText: {
    padding: 10,
  },
  image: {
    width: '100%',
    height: 150,
  }
})
export default Card;
