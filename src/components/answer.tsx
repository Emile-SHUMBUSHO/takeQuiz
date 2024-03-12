import React, {useState} from 'react';
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
  const [isCorrect, setIsCorrect] = useState(false);
  return (
    <TouchableOpacity style={answerCard}>
      <Text style={regularText}>{answer.answer}</Text>
      {isCorrect && (
        <SvgXml
          xml={isCorrect ? thumbsUp : thumbsdown}
          width={20}
          height={20}
        />
      )}
    </TouchableOpacity>
  );
};

export default Answer;
