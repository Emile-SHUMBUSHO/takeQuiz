import React from 'react';
import {View, Text} from 'react-native';
import {Button} from './button';
import {mainTitle} from '../assets/styles';

interface Props {
  onNext: () => void;
}

const Result: React.FC<Props> = ({onNext}) => {
  return (
    <View>
      <Text style={[mainTitle, {alignSelf: 'center', textAlign: 'center'}]}>
        What is the use of the {`<noscript>`} tag in Javascript?
      </Text>
      <Button onPress={onNext} title="Back to the quizes" radius={10} />
    </View>
  );
};

export default Result;
