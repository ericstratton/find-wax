import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ListItem from './../components/ListItem';
import { loggingOut } from './../api/auth';
import Screen from './../components/Screen';
import AuthContext from '../auth/context';

function AccountScreen() {
  const { user, setCurrentUser } = useContext(AuthContext);

  const logOut = () => {
    setCurrentUser(null);
    loggingOut();
  }

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem 
        />
        <MaterialCommunityIcons name={'logout'} onPress={() => logOut()} />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {

  }
})

export default AccountScreen;