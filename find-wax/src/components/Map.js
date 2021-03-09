import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';




function Map() {
  return (
    <>
      <MapView style={styles.map}>
        <Marker
          style={styles.marker} 
          coordinate={{
            latitude: 45.513114,
            longitude: -122.670843,
          }}
          image={require('./../../assets/custom-map-marker.png')}
          title={'Test'} />
      </MapView>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    width: 350,
    height: 350
  },
  marker: {
    width: '100%',
    height: 50,
  }
})

export default Map;

