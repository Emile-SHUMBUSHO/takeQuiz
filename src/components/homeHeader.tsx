import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {homeHeader} from '../assets/styles';
import {menuIcon} from '../assets/svg/menu';
import {notifications} from '../assets/svg/notifications';

interface Props {
  onDrawer?: () => void;
  onNotification?: () => void;
  userName?: string;
}

const HomeHeader: React.FC<Props> = ({onDrawer, onNotification}) => {
  return (
    <View style={homeHeader}>
      <TouchableOpacity activeOpacity={0.8} onPress={onDrawer}>
        <SvgXml height={30} width={34} xml={menuIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onNotification}>
        <SvgXml xml={notifications} height={34} width={24} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;
