import React from 'react';
import { StyleSheet } from 'react-native';
import { Marker } from 'react-native-maps';

export default function CustomMarker({ lat, long, key }) {
  return (
    <Marker
          coordinate={{
            latitude: { lat },
            longitude: { long },
          }}
          key={key}
          image={require('./../../assets/custom-map-marker.png')}
          title={'Test'} />
  )
};

const styles = StyleSheet.create({

})