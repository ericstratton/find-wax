import React, { useState } from 'react';
import firebaseConfig from './src/firebase';
import * as firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/nav/AuthNavigator';
import AppNavigator from './src/nav/AppNavigator';
import navTheme from './src/nav/navTheme';
import AuthContext from './src/auth/context';




export default function App() {
  const [currentUser, setCurrentUser] = useState(AuthContext)

  if(!firebase.apps.length) {
    console.log('Connected to Firebase');
    firebase.initializeApp(firebaseConfig);
  }

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      setCurrentUser(user);
    } else {
      console.log("Not working!");
    }
  });

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      <NavigationContainer theme={navTheme}>
        {currentUser ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

