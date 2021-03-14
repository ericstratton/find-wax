import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import LocationScreen from '../screens/LocationScreen';
import AppNavigator from './AppNavigator';
import colors from '../config/colors';




const Stack = createStackNavigator();

const SearchNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.primary },
      headerTintColor: colors.white
    }}>
    <Stack.Screen
      name="Location"
      component={LocationScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="App" component={AppNavigator}/>
  </Stack.Navigator>
)

export default SearchNavigator;