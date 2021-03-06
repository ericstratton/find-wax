import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from './../config/colors'

function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  text: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }});

export default AppButton;