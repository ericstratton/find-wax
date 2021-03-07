import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Platform } from 'react-native';
// import { Provider as PaperProvider } from 'react-native-paper';
// import theme from './src/config/theme';
import Screen from './src/components/Screen';
import MainScreen from './src/screens/MainScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';




export default function App() {
  return (
    <Screen>
      <WelcomeScreen />
      {/* <MainScreen />  */}
      <StatusBar style="auto" />
    </Screen>
  );
}

