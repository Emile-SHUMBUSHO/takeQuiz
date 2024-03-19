/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {mainText} from '../assets/styles';

const EmptyContent: React.FC = () => {
  return (
    <View style={{alignItems: 'center', marginVertical: 25}}>
      <Text style={mainText}>No quizes found</Text>
    </View>
  );
};

export default EmptyContent;
