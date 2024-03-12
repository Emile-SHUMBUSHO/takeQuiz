import React from 'react';
import {View, Text} from 'react-native';
import {Button} from './button';
import {mainTitle} from '../assets/styles';
import Answer from './answer';

interface Props {
  onNext: () => void;
}

const answers = [
  {id: 1, answer: 'Object-Oriented', isCorrect: true},
  {id: 2, answer: 'Object-Based', isCorrect: false},
  {id: 3, answer: 'Procedural', isCorrect: false},
  {id: 4, answer: 'None of the above', isCorrect: false},
];

const QuestionThree: React.FC<Props> = ({onNext}) => {
  return (
    <View>
      <Text style={[mainTitle, {alignSelf: 'center', textAlign: 'center'}]}>
        Javascript is an _______ language?
      </Text>
      {answers.map((answer, index) => (
        <Answer answer={answer} key={index} />
      ))}
      <Button onPress={onNext} title="Next" radius={10} />
    </View>
  );
};

export default QuestionThree;
