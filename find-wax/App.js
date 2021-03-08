import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { Provider as PaperProvider } from 'react-native-paper';
// import theme from './src/config/theme';
import MainScreen from './src/screens/MainScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import ShopsScreen from './src/screens/ShopsScreen';
import { SafeAreaView } from 'react-native';




export default function App() {
  return (
    <SafeAreaView>
      {/* <WelcomeScreen /> */}
      {/* <MainScreen />  */}
      <ShopsScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

