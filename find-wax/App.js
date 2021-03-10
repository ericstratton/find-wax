import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/nav/AuthNavigator';
import AppNavigator from './src/nav/AppNavigator';
import navTheme from './src/nav/navTheme';



export default function App() {
  return (
    <NavigationContainer theme={navTheme}>
      {/* <AuthNavigator /> */}
      <AppNavigator />
    </NavigationContainer>
  );
}

