import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Platform } from 'react-native';
// import { Provider as PaperProvider } from 'react-native-paper';
// import theme from './src/config/theme';
import MainScreen from './src/screens/MainScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import Constants from 'expo-constants';



export default function App() {
  return (
    <SafeAreaView style={styles.screen} >
      {/* <WelcomeScreen /> */}
      <MainScreen /> 
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  }
})
