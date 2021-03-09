import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import colors from '../config/colors'

function Card({ imageUrl, title, subTitle }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <Text>{title}</Text>
      <Text>{subTitle}</Text>
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
  image: {
    width: '100%',
    height: 150,
  }
})
export default Card;
