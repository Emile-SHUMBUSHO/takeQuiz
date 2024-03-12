import React from 'react';
import {View, Text} from 'react-native';
import {Button} from './button';
import {mainTitle} from '../assets/styles';
import Answer from './answer';

interface Props {
  onNext: () => void;
}

const answers = [
  {
    id: 1,
    answer: 'Both of datatype and the result of the expression are compared.',
    isCorrect: true,
  },
  {
    id: 2,
    answer: 'Only the datatype of the expression is compared.',
    isCorrect: false,
  },
  {
    id: 3,
    answer: 'Only the value of the expression is compared.',
    isCorrect: false,
  },
  {id: 4, answer: 'None of the above', isCorrect: false},
];

const QuestionFive: React.FC<Props> = ({onNext}) => {
  return (
    <View>
      <Text style={[mainTitle, {alignSelf: 'center', textAlign: 'center'}]}>
        When the switch statement matches the expression with the given labels,
        how is the comparison done?
      </Text>
      {answers.map((answer, index) => (
        <Answer answer={answer} key={index} />
      ))}
      <Button onPress={onNext} title="Next" radius={10} />
    </View>
  );
};

export default QuestionFive;
