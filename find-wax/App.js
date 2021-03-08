import React from 'react';
// import { Provider as PaperProvider } from 'react-native-paper';
// import theme from './src/config/theme';
import MainScreen from './src/screens/MainScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import ShopsScreen from './src/screens/ShopsScreen';

import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/nav/AuthNavigator';
import AppNavigator from './src/nav/AppNavigator';



export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

