import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Button} from './button';
import {mainTitle, mainCard, regularText} from '../assets/styles';

interface Props {
  onNext: () => void;
}

const answers = [
  {id: 1, answer: 'Facebook', isCorrect: true},
  {id: 2, answer: 'What app group', isCorrect: false},
  {id: 3, answer: 'Google ink', isCorrect: false},
  {id: 4, answer: 'Microsoft developer', isCorrect: false},
];

const QuestionTwo: React.FC<Props> = ({onNext}) => {
  return (
    <View>
      <Text style={[mainTitle, {alignSelf: 'center', textAlign: 'center'}]}>
        Who mantains react js?
      </Text>
      {answers.map((answer, index) => (
        <TouchableOpacity style={mainCard}>
          <Text style={regularText}>{answer.answer}</Text>
        </TouchableOpacity>
      ))}
      <Button onPress={onNext} title="Next" radius={10} disabled={true} />
    </View>
  );
};

export default QuestionTwo;
