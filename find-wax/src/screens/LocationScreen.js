import React from 'react';
import { View, StyleSheet } from 'react-native';

import Screen from './../components/Screen';
import AppButton from '../components/AppButton';
import useLocation from '../hooks/useLocation';

function LocationScreen() {
  const location = useLocation();

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
        <AppButton title="Get Location" onPress={() => console.log(location)} />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 20,
  },
  container: {}
});

export default LocationScreen;