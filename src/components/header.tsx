import React from 'react';
import { Text, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {arrowLeft} from '../assets/svg/arrow-left';
import {
  header,
  regularText,
} from '../assets/styles';

interface Props {
  onPress?: () => void;
  title?: string;
}

const Header: React.FC<Props> = ({onPress, title}) => {
  return (
    <TouchableOpacity style={header} onPress={onPress}>
      <SvgXml xml={arrowLeft} />
      <Text style={regularText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Header;
