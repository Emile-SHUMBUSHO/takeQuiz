import React, {useState} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {answerCard, regularText} from '../assets/styles';
import {thumbsdown} from '../assets/svg/ThumbsDown';
import {thumbsUp} from '../assets/svg/ThumbsUp';

interface answer {
  isCorrect: boolean;
  optionText: string;
}

interface props {
  answer: answer;
  onPress: () => void;
  index: number;
  selectedIndex: number;
}

const Answer: React.FC<props> = ({
  answer,
  onPress,
  index,
  selectedIndex,
}) => {
  return (
    <TouchableOpacity style={answerCard} onPress={onPress}>
      <Text
        style={[
          regularText,
          {
            color:
              index === selectedIndex && answer?.isCorrect ? 'green' : 'red',
          },
        ]}>
        {answer.optionText}
      </Text>
      <SvgXml
        xml={
          index === selectedIndex && answer?.isCorrect ? thumbsUp : thumbsdown
        }
        width={20}
        height={20}
      />
    </TouchableOpacity>
  );
};

export default Answer;
