import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import { loaderContainer } from '../assets/styles/common';

interface Props {
  color?: string;
}
export const Loader: React.FC<Props> = ({color}) => {
  return (
    <View style={loaderContainer}>
      <ActivityIndicator size={70} color={color ? color : '#5DB075'} />
    </View>
  );
};
