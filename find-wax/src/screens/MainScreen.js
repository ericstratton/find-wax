import React, { useState } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import Map from './../components/Map';

const Screen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Home Screen</Text>
      </View>
      <View style={styles.mapContainer} >
        <Map />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // alignContent: 'center', 
    // flexWrap: 'wrap'
  },
  mapContainer: {
    flex: 1,
    top: 150
  }
})

export default Screen;