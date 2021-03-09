import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import MainScreen from '../screens/MainScreen';
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
    <Tab.Screen name="Shops" component={ShopsScreen} 
      options={{
        tabBarIcon: ({ color, size }) => 
          <MaterialCommunityIcons name="shopping" color={color} size={size} />
      }}/>
    <Tab.Screen name="Home" component={MainScreen} 
      options={{
        tabBarIcon: ({ color, size }) => 
          <MaterialCommunityIcons name="home" color={color} size={size} />
      }}/>
  </Tab.Navigator>
)

export default AppNavigator;