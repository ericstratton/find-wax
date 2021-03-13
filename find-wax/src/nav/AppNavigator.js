import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import AccountScreen from './../screens/AccountScreen';
import MapScreen from '../screens/MapScreen';
import MapNavigator from './MapNavigator';
import colors from '../config/colors';
import ShopsNavigator from './ShopsNavigator';



const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: colors.primary,
      activeTintColor: colors.white,
      inactiveTintColor: colors.secondary
    }} >
      <Tab.Screen 
        name="Map" 
        component={MapNavigator} 
        options={{
          tabBarIcon: ({ color, size }) => 
            <MaterialCommunityIcons name="map" color={color} size={size} />
        }}/>
      <Tab.Screen 
        name="Account" 
        component={AccountScreen} 
        options={{
          tabBarIcon: ({ color, size }) => 
            <MaterialCommunityIcons name="account" color={color} size={size} />
        }}/>
      <Tab.Screen 
        name="Shops" 
        component={ShopsNavigator} 
        options={{
          tabBarIcon: ({ color, size }) => 
            <MaterialCommunityIcons name="shopping" color={color} size={size} />
        }}/>
  </Tab.Navigator>
)

export default AppNavigator;