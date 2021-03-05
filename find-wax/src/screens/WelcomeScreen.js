import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function WelcomeScreen() {
  return (
    <View>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('./../../assets/logo.png')} />
        <Text>LOADING: WelcomeScreen</Text>
      </View>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 300
  },
  logoContainer: {
    position: 'relative',
    top: 70,
    alignItems: 'center'
  }
})

