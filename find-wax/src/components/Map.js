import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';



function Map() {
  return (
    <>
      <View style={styles.container}>
        <MapView style={styles.map} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignContent: 'center',
  },
  map: {
    flex: 0.5,
    width: 300,
    height: 100
  }
})

export default Map;

