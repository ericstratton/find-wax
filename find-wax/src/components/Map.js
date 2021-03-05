import React from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';



function Map() {
  return (
    <MapView style={styles.map} />
  );
}

const styles = StyleSheet.create({
  map: {
    width: 350,
    height: 350
  }
})

export default Map;

