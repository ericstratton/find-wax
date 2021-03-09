import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';





function Map({ children }) {
  return (
    <>
      <MapView style={styles.map}>
        {children}
      </MapView>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
})

export default Map;

