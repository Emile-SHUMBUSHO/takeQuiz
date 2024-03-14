import React from 'react';
import {View, Text} from 'react-native';
import {Button} from './button';
import {mainTitle} from '../assets/styles';
import Answer from './answer';

interface Props {
  onNext: () => void;
  question: any,
}

const answers = [
  {id: 1, answer: 'Boolean', isCorrect: false},
  {id: 2, answer: 'Undefined', isCorrect: false},
  {id: 3, answer: 'Object', isCorrect: true},
  {id: 4, answer: 'Integer', isCorrect: false},
];

const QuestionOne: React.FC<Props> = ({onNext, question}) => {
  return (
    <View>
      <Text style={[mainTitle, {alignSelf: 'center', textAlign: 'center'}]}>
        {question?.questionText}
      </Text>
      {question?.options?.map((answer:any, index:number) => (
        <Answer answer={answer} key={index} />
      ))}
      <Button onPress={onNext} title="Next" radius={10} />
    </View>
  );
};

export default QuestionOne;
