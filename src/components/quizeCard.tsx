import React, {memo} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {
  quizeContainer,
  quizeCard,
  mainText,
  quizeTitle,
} from '../assets/styles';
import {SvgXml} from 'react-native-svg';
import {arrowRight} from '../assets/svg/arrow-right';

interface Props {
  onPress?: () => void;
  date?: Date;
  title: string;
  description?: number;
  id?: number;
}

const QuizCard: React.FC<Props> = ({onPress, date, title, description, id}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={quizeCard}>
        <Text style={[quizeTitle, {padding: 0}]}>{title}</Text>
        <SvgXml xml={arrowRight} />
      </View>
    </TouchableOpacity>
  );
};

export default memo(
  QuizCard,
  (prevProps, nextProps) => prevProps.id === nextProps.id,
);
