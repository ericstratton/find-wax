import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function WelcomeScreen() {
  return (
    <View style={styles.page}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('./../../assets/logo.png')} />
        <Text>LOADING</Text>
      </View>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  logo: {
    top: 100,
    width: 300,
    height: 450
  },
  logoContainer: {
    position: 'relative',
    bottom: 250,
    alignItems: 'center'
  }
})

