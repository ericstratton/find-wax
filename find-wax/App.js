import React from 'react';
// import { Provider as PaperProvider } from 'react-native-paper';
// import theme from './src/config/theme';
import MainScreen from './src/screens/MainScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import ShopsScreen from './src/screens/ShopsScreen';

import { NavigationContainer } from '@react-navigation/native';
import SearchNavigator from './src/nav/SearchNavigator';



export default function App() {
  return (
    <NavigationContainer>
      <SearchNavigator />
    </NavigationContainer>
  );
}

