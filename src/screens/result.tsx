import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '../components/button';
import {container, mainTitle} from '../assets/styles';
import { useLocalStorage } from '../constants/config';

const Result: React.FC<any> = ({navigation, route}) => {
  const{counter} = route.params;
  const [data, setData] = useLocalStorage("answer");
  const marks = data?.filter((data:any)=> data.isCorrect === true)
  return (
    <View style={[container, {justifyContent:"center"}]}>
      <Text style={[mainTitle, {alignSelf: 'center', textAlign: 'center'}]}>
        You scored {marks?.length} of of {counter + 1}
      </Text>
      <Button
        onPress={() => navigation.navigate("Home")}
        title="Back to the quizzes"
        radius={10}
      />
    </View>
  );
};

export default Result;
