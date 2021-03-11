import React, { useState } from 'react';
import firebaseConfig from './src/firebase';
import * as firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/nav/AuthNavigator';
import AppNavigator from './src/nav/AppNavigator';
import navTheme from './src/nav/navTheme';
import AuthContext from './src/auth/context';




export default function App() {
  const [user, setUser] = useState()

  if(!firebase.apps.length) {
    console.log('Connected to Firebase');
    firebase.initializeApp(firebaseConfig);
  }

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      setUser(user);
    } else {
      console.log("Not working!");
    }
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

