import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import AccountScreen from './../screens/AccountScreen';
import MapScreen from '../screens/MapScreen';
import ShopsScreen from '../screens/ShopsScreen';
import colors from '../config/colors';



const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: colors.primary,
      activeTintColor: colors.white,
      // inactiveBackgroundColor: colors.primary,
      inactiveTintColor: colors.secondary
    }} >
      <Tab.Screen 
        name="Map" 
        component={MapScreen} 
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
        component={ShopsScreen} 
        options={{
          tabBarIcon: ({ color, size }) => 
            <MaterialCommunityIcons name="shopping" color={color} size={size} />
        }}/>
  </Tab.Navigator>
)

export default AppNavigator;