import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './../screens/WelcomeScreen';
import MainScreen from '../screens/MainScreen';
import colors from '../config/colors';

const Stack = createStackNavigator();

const SearchNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.primary },
      headerTintColor: colors.white
    }}>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Home" component={MainScreen}/>
  </Stack.Navigator>
)

export default SearchNavigator;