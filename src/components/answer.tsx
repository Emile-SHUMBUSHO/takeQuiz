import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { answerCard, regularText } from '../assets/styles';
import { thumbsdown } from '../assets/svg/ThumbsDown';
import { thumbsUp } from '../assets/svg/ThumbsUp';

interface Answer {
  isCorrect: boolean;
  optionText: string;
}

interface Props {
  answer: Answer;
  onPress: () => void;
  index: number;
  selectedIndex: number;
}

const Answer: React.FC<Props> = ({ answer, onPress, index, selectedIndex }) => {
  const [defaultColor, setDefaultColor] = useState('#000000');
  const [defaultBackground, setDefaultBackground] = useState('#F5F3F9');

  return (
    <TouchableOpacity
      style={[answerCard, {backgroundColor:index === selectedIndex
        ? answer.isCorrect
          ? '#DAF4DE'
          : '#FAEBED'
        : defaultBackground}]}
      onPress={() => {
        onPress();
        setDefaultColor(answer.isCorrect ? '#47C75D' : '#CF364D');
        setDefaultBackground(answer.isCorrect ? '#DAF4DE' : '#FAEBED');
      }}>
      <Text
        style={[
          regularText,
          {
            color:
              index === selectedIndex
                ? answer.isCorrect
                  ? '#47C75D'
                  : '#CF364D'
                : defaultColor,
          },
        ]}>
        {answer.optionText}
      </Text>
      <SvgXml
        xml={index === selectedIndex ? (answer.isCorrect ? thumbsUp : thumbsdown) : null}
        width={20}
        height={20}
      />
    </TouchableOpacity>
  );
};

export default Answer;
