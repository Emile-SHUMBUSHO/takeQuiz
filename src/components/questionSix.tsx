import React from 'react';
import {View, Text} from 'react-native';
import {Button} from './button';
import {mainTitle} from '../assets/styles';
import Answer from './answer';

interface Props {
  onNext: () => void;
}

const answers = [
  {id: 1, answer: 'const', isCorrect: true},
  {id: 2, answer: 'var', isCorrect: false},
  {id: 3, answer: 'let', isCorrect: false},
  {id: 4, answer: 'constant', isCorrect: false},
];

const QuestionSix: React.FC<Props> = ({onNext}) => {
  return (
    <View>
      <Text style={[mainTitle, {alignSelf: 'center', textAlign: 'center'}]}>
        How can a datatype be declared to be a constant type?
      </Text>
      {answers.map((answer, index) => (
        <Answer answer={answer} key={index} />
      ))}
      <Button onPress={onNext} title="Next" radius={10} />
    </View>
  );
};

export default QuestionSix;
