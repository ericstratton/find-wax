import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './../screens/MapScreen';
import ShopDetailsScreen from '../screens/ShopDetailsScreen';
import colors from '../config/colors';

const Stack = createStackNavigator();

const ShopsNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.primary },
      headerTintColor: colors.white
    }}>
    <Stack.Screen 
      name='Map' 
      component={MapScreen} 
      options={{ headerShown: false }}/>
    <Stack.Screen name='Shop Details' component={ShopDetailsScreen} />
  </Stack.Navigator>
)

export default ShopsNavigator;