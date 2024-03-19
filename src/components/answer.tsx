import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { answerCard, regularText } from '../assets/styles';
import { thumbsdown } from '../assets/svg/ThumbsDown';
import { thumbsUp } from '../assets/svg/ThumbsUp';



interface Props {
  answer:string;
  onPress: () => void;
}

const Answer: React.FC<Props> = ({ answer, onPress}) => {
  return (
    <TouchableOpacity
      style={answerCard}
      onPress={onPress}
      >
      <Text
        style={regularText}>
        {answer}
      </Text>
    </TouchableOpacity>
  );
};

export default Answer;
