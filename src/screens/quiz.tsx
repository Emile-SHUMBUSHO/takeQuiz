import React, {useState, useCallback, useEffect, ReactNode} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ActivityIndicator, Text, View} from 'react-native';
import {RootState} from '../store/types.d';
import {container, mainTitle} from '../assets/styles';
import {apis} from '../store/apis';
import {UnknownAction} from '@reduxjs/toolkit';
import Header from '../components/header';
import Answer from '../components/answer';
import { storeData } from '../constants/config';

interface Answer {
  id: string | number;
  isCorrect: boolean;
  optionText: string;
}

const Questions: React.FC<any> = ({route, navigation}) => {
  const dispatch = useDispatch();
  const {quizId} = route.params;
  const {loading, statusCode, payload} = useSelector(
    (state: RootState) => state.questions,
  );

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<Answer[]>([]);
  storeData({key: "answer", value:selectedOption});

  const saveAnswer = (answer: Answer) => {
    setSelectedOption(prevData => {
      return [...prevData, answer];
    });
    onNext();
  };

  const onNext = useCallback(() => {
    if (currentQuestionIndex < payload.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      }, 1000);
    } else {
      navigation.navigate('Result', {
        counter: currentQuestionIndex,
      });
    }
  }, [currentQuestionIndex, navigation, payload.length]);

  useEffect(() => {
    dispatch(apis.questionsForAquiz({id: quizId}) as unknown as UnknownAction);
  }, [dispatch]);

  const renderScreen = () => {
    if (loading) {
      return <ActivityIndicator size="large" />;
    } else {
      return (
        <View style={container}>
          <Header title="Go back" onPress={() => navigation.goBack()} />
          <View style={[container, {justifyContent: 'center'}]}>
            {payload.length !== 0 ? (
              <Text
                style={[mainTitle, {alignSelf: 'center', textAlign: 'center'}]}>
                {currentQuestionIndex + 1} / {payload.length}
              </Text>
            ) : (
              <Text
                style={[mainTitle, {alignSelf: 'center', textAlign: 'center'}]}>
                Opps, no questions found
              </Text>
            )}
            <Text
              style={[mainTitle, {alignSelf: 'center', textAlign: 'center'}]}>
              {payload[currentQuestionIndex]?.questionText}
            </Text>
            {payload &&
              payload[currentQuestionIndex]?.options.map(
                (answer: Answer, index: number) => (
                  <Answer
                    key={index}
                    answer={answer.optionText}
                    onPress={() => saveAnswer(answer)}
                  />
                ),
              )}
          </View>
        </View>
      );
    }
  };

  return <>{renderScreen()}</>;
};

export default Questions;
