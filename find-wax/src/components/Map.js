import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';



function Map() {
  return (
    
    <MapView style={styles.map} />

  );
}

const styles = StyleSheet.create({
  map: {
    width: 300,
    height: 6000
  }
})

export default Map;

