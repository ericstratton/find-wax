import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { registration } from './../api/auth';
import AppButton from '../components/AppButton';
import Screen from './../components/Screen';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().label("First Name"),
  lastName: Yup.string().required().label("Last Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password")
})

function RegisterScreen() {

  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
        onSubmit={values => registration(values)} 
        validationSchema={validationSchema} >
        { ({ handleChange, handleSubmit, errors }) => (
          <>
            <TextInput
            autoCorrect={false}
            onChangeText={handleChange('firstName')} 
            placeholder='First Name'
            />
            <Text style={{ color: 'red' }}>{errors.firstName}</Text>
            <TextInput
            autoCorrect={false}
            onChangeText={handleChange('lastName')} 
            placeholder='Last Name'
            />
            <Text style={{ color: 'red' }}>{errors.lastName}</Text>
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
            <AppButton title="Register" onPress={handleSubmit}/>
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

export default RegisterScreen;