import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { loggingOut } from './../api/auth';

import Screen from './../components/Screen';
import AuthContext from '../auth/context';

function AccountScreen() {
  const { user, setUser } = useContext(AuthContext);

  const logOut = () => {
    setUser(null);
    loggingOut();
  }

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <View>
          <Text>{user.firstName}</Text>
          <Text>{user.lastName}</Text>
        </View>
        <MaterialCommunityIcons name={'logout'} onPress={() => logOut()} />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  screen: {

  }
})

export default AccountScreen;