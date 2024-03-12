import React from 'react';
import {View, Text} from 'react-native';
import {Button} from './button';
import {mainTitle} from '../assets/styles';
import Answer from './answer';

interface Props {
  onNext: () => void;
}

const answers = [
  {id: 1, answer: 'getElementbyId', isCorrect: false},
  {id: 2, answer: 'getElementsByClassName', isCorrect: false},
  {id: 3, answer: 'Both A and B', isCorrect: true},
  {id: 4, answer: 'None of the above', isCorrect: false},
];

const QuestionNine: React.FC<Props> = ({onNext}) => {
  return (
    <View>
      <Text style={[mainTitle, {alignSelf: 'center', textAlign: 'center'}]}>
        Which of the following methods is used to access HTML elements using
        Javascript?
      </Text>
      {answers.map((answer, index) => (
        <Answer answer={answer} key={index} />
      ))}
      <Button onPress={onNext} title="Next" radius={10} />
    </View>
  );
};

export default QuestionNine;