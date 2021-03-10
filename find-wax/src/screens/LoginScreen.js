import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { signIn } from './../api/auth';
import AppButton from '../components/AppButton';
import Screen from './../components/Screen';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().label("Password")
})

function LoginScreen() {

  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => signIn(values)} 
        validationSchema={validationSchema} >
        { ({ handleChange, handleSubmit, errors }) => (
          <>
            <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='email-address'
            onChangeText={handleChange('email')} 
            placeholder='Email'
            />
            <Text style={{ color: 'red' }}>{errors.email}</Text>
            <TextInput 
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={handleChange('password')}
              placeholder='Password'
              secureTextEntry={true}  
            />
            <Text style={{ color: 'red' }}>{errors.password}</Text>
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