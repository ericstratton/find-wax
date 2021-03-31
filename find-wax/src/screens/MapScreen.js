import React, { useEffect } from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

import AppButton from'./../components/AppButton';
import Screen from '../components/Screen';
import colors from '../config/colors';
import useLocation from './../hooks/useLocation';
import shopsApi from './../api/shops';
import useApi from './../hooks/useApi';



const MapScreen = ({ navigation }) => {
  const location = useLocation();
  const { data: shops, error, loading, request: loadShops } = useApi(shopsApi.getShops);

  const resolveLocation = async (location) => {
    const resolvedLocation = await location;
    console.log(resolvedLocation); // loadShops still being called when resolvedLocation is undefined.. why?
    loadShops(resolvedLocation);
  }
  
  useEffect(() => {
    resolveLocation(location);
  }, [location]);

  return (
    <Screen style={styles.container}>
      { location ?
      <View style={styles.mapContainer} >
        <View style={styles.errorContainer}>
          {error && (<>
            <Text>Couldn't retrieve data.</Text>
            <AppButton title="Retry" onPress={handleLoadingMarkers}/>
          </>)}
        </View>
          {/* <View style={styles.errorContainer}>
            <AppButton title='Load Shops' onPress={handleLoadingMarkers} />
          </View>  */}
        <ActivityIndicator animating={loading} size='large' />
        <MapView style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.07,
            longitudeDelta: 0.15, 
            }}> 
            <Marker 
              coordinate={{
              latitude: location.latitude,
              longitude: location.longitude
              }} />
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
      :
        <View style={styles.locationContainer}>
          <Text style={styles.locationLoadingText}>Getting Location</Text>
        </View>  } 
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
  errorContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: '50%',
  },
  locationLoadingText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  map: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    zIndex: -1,
  },
  mapContainer: {
    bottom: 40,
  },
})

export default MapScreen;