import React from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/types.d';
import {apis} from '../store/apis';
import {UnknownAction} from '@reduxjs/toolkit';
import Toast from 'react-native-toast-message';
import signupValidation from '../utils/validation/signup';

const Register: React.FC<any> = ({navigation}) => {
  const dispatch = useDispatch();
  const {statusCode, loading, message} = useSelector(
    (state: RootState) => state.signup,
  );

  
  React.useEffect(() => {
    if (statusCode !== 201 && statusCode !== 0) {
      Toast.show({
        type: 'error',
        text1: message,
      });
      setTimeout(() => {
        dispatch(apis.resetAll());
        Toast.hide();
      }, 3000);
    }
    
    if(statusCode === 201){
      Toast.show({
        type: 'success',
        text1: message,
      });
      setTimeout(() => {
        dispatch(apis.resetAll());
        Toast.hide();
        navigation.navigate("Login");
      }, 3000);
    }
  }, [statusCode, message]);

  return (
    <View style={authMainContainer}>
      <Text style={mainTitle}>Sign up</Text>
      <Formik
        initialValues={{
          userName: '',
          email: '',
          password: '',
        }}
        validationSchema={signupValidation}
        onSubmit={(values, {resetForm}) => {
          dispatch(
            apis.signup({
              username: values.userName,
              email: values.email,
              password: values.password,
            }) as unknown as UnknownAction,
          );
          resetForm();
        }}>
        {({handleChange, handleSubmit, errors, handleReset}) => (
          <>
            <Input
              placeholder="User name"
              placeholderTextColor="#BDBDBD"
              label="Your user name"
              onChangeText={handleChange('userName')}
              error={errors.userName}
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
            <Button
              title="Register"
              onPress={handleSubmit}
              radius={10}
              loading={loading}
            />
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
