import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';
// import { Button } from 'react-native';

function AppButton() {
  return (
    <Button style={styles.button}
    title="button">
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    color: 'blue',
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