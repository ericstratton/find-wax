import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ShopsScreen from '../screens/ShopsScreen';
import ShopDetailsScreen from '../screens/ShopDetailsScreen';
import colors from '../config/colors';

const Stack = createStackNavigator();

const ShopsNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.primary },
      headerTintColor: colors.white
    }}>
    <Stack.Screen name='Shops' component={ShopsScreen} />
    <Stack.Screen name='Shop Details' component={ShopDetailsScreen} />
  </Stack.Navigator>
)

export default ShopsNavigator;