import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ShopsScreen from '../screens/ShopsScreen';
import ShopDetailsScreen from '../screens/ShopDetailsScreen';

const Stack = createStackNavigator();

const ShopsNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='Shops' component={ShopsScreen} />
    <Stack.Screen name='ShopsDetails' component={ShopDetailsScreen} />
  </Stack.Navigator>
)

export default ShopsNavigator;