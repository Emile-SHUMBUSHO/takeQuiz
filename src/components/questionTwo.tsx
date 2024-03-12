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
    answer: 'The contents are displayed by non-JS-Based browsers',
    isCorrect: true,
  },
  {id: 2, answer: 'Clears all the cookies ans cache', isCorrect: false},
  {id: 3, answer: 'Both A and B.', isCorrect: false},
  {id: 4, answer: 'None of the above.', isCorrect: false},
];

const QuestionTwo: React.FC<Props> = ({onNext}) => {
  return (
    <View>
      <Text style={[mainTitle, {alignSelf: 'center', textAlign: 'center'}]}>
        What is the use of the {`<noscript>`} tag in Javascript?
      </Text>
      {answers.map((answer, index) => (
        <Answer answer={answer} key={index} />
      ))}
      <Button onPress={onNext} title="Next" radius={10} />
    </View>
  );
};

export default QuestionTwo;
