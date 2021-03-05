import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './../components/Button'
import Map from './../components/Map';

import colors from '../config/colors';

const Screen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Home Screen</Text>
      </View>
      <View style={styles.mapContainer} >
        <Map />
      </View>
      <View>
        <Button />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // alignContent: 'center', 
    // flexWrap: 'wrap'
  },
  mapContainer: {
    top: 150
  }
})

export default Screen;