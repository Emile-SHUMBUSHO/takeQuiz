import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Button} from '../components/button';
import {Input} from '../components/input';
import {
  alreadyHaveAccount,
  authMainContainer,
  informingText,
  mainText,
  mainTitle,
} from '../assets/styles';
import {Formik} from 'formik';
import signupValidation from '../utils/validation/signup';

const Register: React.FC<any> = ({navigation}) => {
  return (
    <View style={authMainContainer}>
      <Text style={mainTitle}>Sign up</Text>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        }}
        validationSchema={signupValidation}
        onSubmit={(values, {resetForm}) => {
          navigation.navigate('Setpin', {
            user: {
              phoneNumber: values.email,
              firstName: values.firstName,
              lastName: values.lastName,
            },
          });
          resetForm();
        }}>
        {({handleChange, handleSubmit, errors, handleReset}) => (
          <>
            <Input
              placeholder="First name"
              placeholderTextColor="#BDBDBD"
              label="Your first name"
              onChangeText={handleChange('firstName')}
              error={errors.firstName}
            />
            <Input
              placeholder="Last name"
              placeholderTextColor="#BDBDBD"
              label="Your last name"
              onChangeText={handleChange('lastName')}
              error={errors.lastName}
            />
            <Input
              placeholder="Email"
              placeholderTextColor="#BDBDBD"
              label="Your email"
              onChangeText={handleChange('email')}
              error={errors.email}
            />
            <Input
              placeholder="Password"
              placeholderTextColor="#BDBDBD"
              label="Your password"
              onChangeText={handleChange('password')}
              error={errors.password}
            />
            <Input
              placeholder="Confirm password"
              placeholderTextColor="#BDBDBD"
              label="Your password"
              onChangeText={handleChange('password')}
              error={errors.password}
            />
            <Button title="Register" onPress={handleSubmit} radius={10} />
          </>
        )}
      </Formik>
      <View style={alreadyHaveAccount}>
        <Text style={informingText}>Already have account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={mainText}> login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
