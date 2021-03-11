import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppButton from './../components/AppButton';
import ListItem from './../components/ListItem';
import { loggingOut } from './../api/auth';
import Screen from './../components/Screen';
import AuthContext from '../auth/context';

function AccountScreen() {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const logOut = () => {
    setCurrentUser(null);
    loggingOut();
  }

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          image={require('./../../assets/face.png')}
          title={'Eric Stratton'}
          subTitle={'Blerb..'} 
        />
        
        <AppButton style={styles.button} title='logout' onPress={() => logOut()} />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    padding: 10,
  },
  screen: {

  }
})

export default AccountScreen;