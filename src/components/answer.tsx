import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {answerCard, regularText} from '../assets/styles';
import {thumbsdown} from '../assets/svg/ThumbsDown';
import {thumbsUp} from '../assets/svg/ThumbsUp';

interface answer {
  isCorrect: boolean;
  answer: string;
}

interface props {
  answer: answer;
}

const Answer: React.FC<props> = ({answer}) => {
  return (
    <TouchableOpacity
      style={[
        answerCard,
        {
          backgroundColor: answer.isCorrect
            ? '#DAF4DE'
            : !answer.isCorrect
            ? '#FAEBED'
            : '#F5F3F9',
          borderColor: answer.isCorrect
            ? '#DAF4DE'
            : !answer.isCorrect
            ? '#FAEBED'
            : '#F5F3F9',
        },
      ]}>
      <Text style={regularText}>{answer.answer}</Text>
      <SvgXml
        xml={answer.isCorrect ? thumbsUp : thumbsdown}
        width={20}
        height={20}
      />
    </TouchableOpacity>
  );
};

export default Answer;
