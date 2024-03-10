import React from 'react';
import {View, Text} from 'react-native';
import {Button} from './button';
import {mainCard, mainTitle, regularText} from '../assets/styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
  onNext: () => void;
}

const answers = [
  {id: 1, answer: 'React js is a library', isCorrect: true},
  {id: 2, answer: 'React js is a framework', isCorrect: false},
  {id: 3, answer: 'All of them are true', isCorrect: false},
  {id: 4, answer: 'React js is not a programming language', isCorrect: false},
];

const QuestionOne: React.FC<Props> = ({onNext}) => {
  return (
    <View>
      <Text style={[mainTitle, {alignSelf: 'center', textAlign: 'center'}]}>
        Is react js a javaScript framework?
      </Text>
      {answers.map((answer, index) => (
        <TouchableOpacity style={mainCard}>
          <Text style={regularText}>{answer.answer}</Text>
        </TouchableOpacity>
      ))}
      <Button onPress={onNext} title="Next" radius={10} />
    </View>
  );
};

export default QuestionOne;
