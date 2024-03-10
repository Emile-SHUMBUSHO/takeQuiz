import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {apis} from '../store/apis';
import {useDispatch, useSelector} from 'react-redux';
import {UnknownAction} from '@reduxjs/toolkit';
import {Text, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {mainTitle, userProfileContainer} from '../assets/styles';
import {RootState} from '../store/types';

const UserProfile: React.FC<any> = (props: any) => {
  const dispatch = useDispatch();
  const {ProfileData} = useSelector((state: RootState) => state.profile);
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={userProfileContainer}>
          <Text style={mainTitle}>Take quize</Text>
          <Text style={[mainTitle, {fontSize: 16, marginVertical: 10}]}>
            {ProfileData.firstName} {ProfileData.lastName}
          </Text>
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
