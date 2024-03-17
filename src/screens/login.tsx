import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Button} from '../components/button';
import {Input} from '../components/input';
import {
  informingText,
  mainText,
  mainTitle,
  authRedirect,
  authMainContainer,
} from '../assets/styles';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/types';
import {apis} from '../store/apis';
import {UnknownAction} from '@reduxjs/toolkit';
import loginValidation from '../utils/validation/login';

const Login: React.FC<any> = ({navigation}) => {
  const dispatch = useDispatch();
  const {loading, statusCode, message} = useSelector(
    (state: RootState) => state.login,
  );

  return (
    <View style={authMainContainer}>
      <Text style={mainTitle}>Log In</Text>
      <Formik
        validationSchema={loginValidation}
        initialValues={{email: '', password: ''}}
        onSubmit={values => {
          dispatch(
            apis.login({
              email: values.email,
              password: values.password,
            }) as unknown as UnknownAction,
          );
        }}>
        {({handleChange, errors, handleSubmit}) => (
          <>
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
              secureTextEntry={true}
            />
            <View style={authRedirect}>
              <Text style={informingText}>Don't have account?</Text>
              <TouchableOpacity onPress={() => navigation.push('Register')}>
                <Text style={mainText}>sign up</Text>
              </TouchableOpacity>
            </View>
            <Button
              title="Log In"
              onPress={handleSubmit}
              loading={loading}
              radius={10}
            />
          </>
        )}
      </Formik>
      <TouchableOpacity>
        <Text style={mainText}>Forgot your password?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
