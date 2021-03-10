import React from 'react';
// import { Provider as PaperProvider } from 'react-native-paper';
// import theme from './src/config/theme';
import MapScreen from './src/screens/MapScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import ShopsScreen from './src/screens/ShopsScreen';

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

