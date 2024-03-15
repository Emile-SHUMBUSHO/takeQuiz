import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '../components/button';
import {mainTitle} from '../assets/styles';

const Result: React.FC<any> = ({navigation, route}) => {
  const{ answer, counter} = route.params;
  return (
    <View>
      <Text style={[mainTitle, {alignSelf: 'center', textAlign: 'center'}]}>
        What is the use of the {`<noscript>`} tag in Javascript?
      </Text>
      <Button
        onPress={() => navigation.navigate("Home")}
        title="Back to the quizes"
        radius={10}
      />
    </View>
  );
};

export default Result;
