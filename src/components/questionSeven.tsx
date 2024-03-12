import React from 'react';
import {View, Text} from 'react-native';
import {Button} from './button';
import {mainTitle} from '../assets/styles';
import Answer from './answer';

interface Props {
  onNext: () => void;
}

const answers = [
  {id: 1, answer: 'document.write()', isCorrect: false},
  {id: 2, answer: 'console.log()', isCorrect: false},
  {id: 3, answer: 'window.alert()', isCorrect: false},
  {id: 4, answer: 'All of the above', isCorrect: true},
];

const QuestionSeven: React.FC<Props> = ({onNext}) => {
  return (
    <View>
      <Text style={[mainTitle, {alignSelf: 'center', textAlign: 'center'}]}>
        Which of the following methods can be used to display data in some form
        using Javascript?
      </Text>
      {answers.map((answer, index) => (
        <Answer answer={answer} key={index} />
      ))}
      <Button onPress={onNext} title="Next" radius={10} />
    </View>
  );
};

export default QuestionSeven;
