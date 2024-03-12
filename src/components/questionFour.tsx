import React from 'react';
import {View, Text} from 'react-native';
import {Button} from './button';
import {mainTitle} from '../assets/styles';
import Answer from './answer';

interface Props {
  onNext: () => void;
}

const answers = [
  {id: 1, answer: 'in', isCorrect: true},
  {id: 2, answer: 'is in', isCorrect: false},
  {id: 3, answer: 'exists', isCorrect: false},
  {id: 4, answer: 'lies', isCorrect: false},
];

const QuestionFour: React.FC<Props> = ({onNext}) => {
  return (
    <View>
      <Text style={[mainTitle, {alignSelf: 'center', textAlign: 'center'}]}>
        What keyword is used to check whether a given property is valid or not?
      </Text>
      {answers.map((answer, index) => (
        <Answer answer={answer} key={index} />
      ))}
      <Button onPress={onNext} title="Next" radius={10} />
    </View>
  );
};

export default QuestionFour;
