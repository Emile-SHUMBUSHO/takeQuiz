import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {apis} from '../store/apis';
import {useDispatch} from 'react-redux';
import {UnknownAction} from '@reduxjs/toolkit';
import {Text, TouchableOpacity, View} from 'react-native';
import {mainTitle, regularText, userProfileContainer} from '../assets/styles';
import {useLocalStorage} from '../constants/config';

const UserProfile: React.FC<any> = ({navigation, ...props}) => {
  const dispatch = useDispatch();
  const [data, setData] = useLocalStorage('role');
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={userProfileContainer}>
          <Text style={mainTitle}>Take Quize App</Text>
          {data === 'admin' && (
            <TouchableOpacity onPress={() => navigation.navigate('ManageQuiz')}>
              <Text style={[regularText, {marginVertical: 5}]}>All Quiz</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={[regularText, {marginVertical: 5}]}>Home</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          marginBottom: 15,
          borderTopColor: '#dedede',
          borderTopWidth: 1,
        }}>
        <DrawerItem
          label="log out"
          onPress={() => dispatch(apis.logout() as unknown as UnknownAction)}
        />
      </View>
    </View>
  );
};

export default UserProfile;
