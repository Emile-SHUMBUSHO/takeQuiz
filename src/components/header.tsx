import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {arrowLeft} from '../assets/svg/arrow-left';
import {header, headerTitle, headerTitleContainer} from '../assets/styles';

interface Props {
  onPress?: () => void;
  title?: string;
}

const Header: React.FC<Props> = ({onPress, title}) => {
  return (
    <View style={header}>
      <TouchableOpacity onPress={onPress} style={{width: '10%'}}>
        <SvgXml xml={arrowLeft} />
      </TouchableOpacity>
      <View style={headerTitleContainer}>
        <Text style={headerTitle}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;
