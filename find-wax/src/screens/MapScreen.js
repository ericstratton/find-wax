import React, { useEffect } from 'react';
import { ActivityIndicator, Button, Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

import Screen from '../components/Screen';
import colors from '../config/colors';
import useLocation from './../hooks/useLocation';
import shopsApi from './../api/shops';
import useApi from './../hooks/useApi';



const MapScreen = ({ navigation }) => {
  const { latitude, longitude } = useLocation();
  const { data: shops, error, loading, request: loadShops } = useApi(shopsApi.getShops(latitude, longitude));


  useEffect(() => {
    loadShops();
  }, []);

  return (
    <Screen style={styles.container}>
      <View style={styles.mapContainer} >
        {error && (<>
          <Text>Couldn't retrieve data.</Text>
          <Button title="Retry" onPress={loadShops}/>
        </>)}
        <ActivityIndicator animating={loading} size='large' />
        <MapView style={styles.map}
          initialRegion={{
            latitude: 45.520421,
            longitude: -122.668319,
            latitudeDelta: 0.07,
            longitudeDelta: 0.15, 
            }}> 
          { shops.businesses  &&
            shops.businesses.map((x, i) => (
              <Marker 
                coordinate={{
                latitude: x.coordinates.latitude, 
                longitude: x.coordinates.longitude
                }}
                image={require('./../../assets/custom-map-marker.png')}
                identifier={x.id}
                key={i} >
                  <Callout tooltip onPress={() => navigation.navigate('Shop Details', x)}>
                      <View>
                        <View style={styles.bubble}>
                          <Text style={styles.bubbleText}>{x.name}</Text>
                          <Text style={styles.bubbleText}>{x.location.address1}</Text>
                        </View>
                      </View>
                  </Callout>
              </Marker>
            )) }
        </MapView>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 10,
  }, 
  bubbleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'center',
    padding: 20,
    width: '80%',
  },
  container: {
    height: Dimensions.get('screen').height,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center', 
    flexWrap: 'wrap'
  },
  map: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  mapContainer: {
    bottom: 40,
  },
})

export default MapScreen;