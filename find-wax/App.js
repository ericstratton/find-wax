import React from 'react';
import firebaseConfig from './src/firebase';
import * as firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/nav/AuthNavigator';
import AppNavigator from './src/nav/AppNavigator';
import navTheme from './src/nav/navTheme';




export default function App() {
  if(!firebase.apps.length) {
    console.log('Connected to Firebase');
    firebase.initializeApp(firebaseConfig);
  }

  return (
    <NavigationContainer theme={navTheme}>
      <AuthNavigator />
      {/* <AppNavigator /> */}
    </NavigationContainer>
  );
}

