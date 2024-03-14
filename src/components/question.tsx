import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Button} from './button';
import {mainTitle} from '../assets/styles';
import Answer from './answer';

interface Props {
  onNext: () => void;
  question: any;
}

const Question: React.FC<Props> = ({onNext, question}) => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <View>
      <Text style={[mainTitle, {alignSelf: 'center', textAlign: 'center'}]}>
        {question?.questionText}
      </Text>
      {question?.options?.map((answer: any, index: number) => (
        <Answer
          answer={answer}
          key={index}
          onPress={() => {
            setIsCorrect(answer?.isCorrect);
            setSelectedIndex(index);
            onNext();
          }}
          index={index}
          selectedIndex={selectedIndex}
        />
      ))}
    </View>
  );
};

export default Question;
