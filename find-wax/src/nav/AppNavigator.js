import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from '../screens/MainScreen';
import ShopsScreen from '../screens/ShopsScreen';


const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Shops" component={ShopsScreen} />
    <Tab.Screen name="Home" component={MainScreen} />
  </Tab.Navigator>
)

export default AppNavigator;