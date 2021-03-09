import React from 'react';
import { StyleSheet } from 'react-native';
import { Marker } from 'react-native-maps';

export default function CustomMarker() {
  return (
    <Marker
          style={styles.marker} 
          coordinate={{
            latitude: 45.513114,
            longitude: -122.670843,
          }}
          image={require('./../../assets/custom-map-marker.png')}
          title={'Test'} />
  )
};

const styles = StyleSheet.create({
  marker: {
    width: '100%',
    height: 50,
  }
})