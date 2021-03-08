import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import AppButton from '../components/AppButton';
import Screen from './../components/Screen';

function LoginScreen(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Screen style={styles.container}>
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType='email-address'
        onChangeText={text => setEmail(text)} 
        placeholder='Email'
      />
      <TextInput 
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={text => setPassword(text)}
        placeholder='Password'
        secureTextEntry={true}  
      />
      <AppButton title="Login" onPress={() => console.log(email, password)}/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  }
});

export default LoginScreen;