import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Button from './../components/Button';

function WelcomeScreen() {
  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('./../../assets/logo.png')} />
        <Text>WELCOME</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Home' />
      </View>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logo: {
    top: 100,
    width: 300,
    height: 450
  },
  logoContainer: {
    alignItems: 'center'
  },
  buttonContainer: {
    color: '#207178',
    alignItems: 'center',
    padding: 20,
    width: '100%'
  }
})

