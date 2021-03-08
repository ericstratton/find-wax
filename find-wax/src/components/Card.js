import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '../config/colors'

function Card({ title, subTitle }) {
  return (
    <View style={styles.card}>
      <Text>{title}</Text>
      <Text>{subTitle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: colors.white,
  }
})
export default Card;
