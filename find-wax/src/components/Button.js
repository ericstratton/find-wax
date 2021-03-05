import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';

function AppButton() {
  return (
    <Button style={styles.button}>
      <Text style={styles.Text}>Button</Text>
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 70,
    marginVertical: 700
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default AppButton;