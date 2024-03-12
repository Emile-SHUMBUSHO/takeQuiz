import React from 'react';
import {View, Text} from 'react-native';
import {Button} from './button';
import {mainTitle} from '../assets/styles';
import Answer from './answer';

interface Props {
  onNext: () => void;
}

const answers = [
  {id: 1, answer: 'Throws an error', isCorrect: false},
  {id: 2, answer: 'Ignores the statements', isCorrect: true},
  {id: 3, answer: 'Gives a warning', isCorrect: false},
  {id: 4, answer: 'None of the above', isCorrect: false},
];

const QuestionEight: React.FC<Props> = ({onNext}) => {
  return (
    <View>
      <Text style={[mainTitle, {alignSelf: 'center', textAlign: 'center'}]}>
        Upon encountering empty statements, what does the Javascript Interpreter
        do?
      </Text>
      {answers.map((answer, index) => (
        <Answer answer={answer} key={index} />
      ))}
      <Button onPress={onNext} title="Next" radius={10} />
    </View>
  );
};

export default QuestionEight;
