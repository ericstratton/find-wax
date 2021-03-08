import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Screen from './../components/Screen';
import AppButton from '../components/AppButton'
import Map from './../components/Map';

import colors from '../config/colors';

const MainScreen = () => {
  return (
    <Screen style={styles.container}>
      <View style={styles.textContainer}>
        <Text>Home Screen</Text>
      </View>
      <View style={styles.mapContainer} >
        <Map />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title='search' />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    bottom: -100,
    alignItems: 'center',
    padding: 20,
    width: '80%',
  },
  container: {
    backgroundColor: colors.primary,
    height: Dimensions.get('screen').height,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center', 
    flexWrap: 'wrap'
  },
  mapContainer: {
    bottom: 50,
    borderWidth: 5,
    borderRadius: 10,
    shadowColor: 'grey',
    shadowOffset: { width: 5, heigth: 5 },
    shadowOpacity: 0.5,
    elevation: 20
  },
  textContainer: {
    bottom: 170,
  }
})

export default MainScreen;