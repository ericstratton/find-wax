import React, { useEffect } from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, Text, View  } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Screen from '../components/Screen';
import AppButton from '../components/AppButton'
import Map from '../components/Map';
import CustomMarker from '../components/CustomMarker';
import shopsApi from './../api/shops';
import useApi from './../hooks/useApi';
import colors from '../config/colors';


const MapScreen = () => {
  const { data: shops, error, loading, request: loadShops } = useApi(shopsApi.getShops);


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
        
        <MapView style={styles.map}> 
          { (shops.businesses != undefined) ?
            shops.businesses.map((x, i) => (
              <Marker 
                  coordinate={{
                  latitude: x.coordinates.latitude, 
                  longitude: x.coordinates.longitude
                  }}
                  image={require('./../../assets/custom-map-marker.png')}
                  key={i} />
              // <Text>{x.coordinates.latitude}</Text>
              // <Text>{x.coordinates.longitude}</Text>
            ))
          : <ActivityIndicator animating={loading} size='large' /> }
        </MapView>
      
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
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
    bottom: 30,
  },
})

export default MapScreen;