import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';

function AppButton() {
  return (
    <Button style={styles.button}>
      <Text style={styles.Text}>{buttonText}</Text>
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    marginVertical: 10
  },
  text: {
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
});

export default AppButton;