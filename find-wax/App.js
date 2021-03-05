import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import theme from './src/custom-properties/Theme';
import MainScreen from './src/screens/MainScreen';
import WelcomeScreen from './src/screens/WelcomeScreen'; 


export default function App() {


  return (
    <PaperProvider theme={theme}>
      <SafeAreaView>
        <WelcomeScreen />
        {/* <MainScreen />  */}
        <StatusBar style="auto" />
      </SafeAreaView>
    </PaperProvider>
  );
}
