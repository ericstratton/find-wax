import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import AppButton from '../components/AppButton';
import Screen from './../components/Screen';

function LoginScreen(props) {

  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)} >
        { ({ handleChange, handleSubmit }) => (
          <>
            <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='email-address'
            onChangeText={handleChange('email')} 
            placeholder='Email'
            />
            <TextInput 
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={handleChange('password')}
              placeholder='Password'
              secureTextEntry={true}  
            />
            <AppButton title="Login" onPress={handleSubmit}/>
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  }
});

export default LoginScreen;