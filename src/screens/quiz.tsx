import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View} from 'react-native';
import {QuetionsScreens, RootState} from '../store/types.d';
import {container} from '../assets/styles';
import QuestionOne from '../components/questionOne';
import QuestionTwo from '../components/questionTwo';
import uiAction from '../store/uiaction';

const Questions = () => {
  const dispatch = useDispatch();

  const {currentQuestionScreen} = useSelector((state: RootState) => state.ui);

  const onNext = useCallback(
    (state: QuetionsScreens) => {
      dispatch(uiAction.changeQuestionsScreen(state));
    },
    [dispatch],
  );

  const renderScreen = () => {
    switch (currentQuestionScreen) {
      case QuetionsScreens.QUESTION_ONE:
        return (
          <QuestionOne onNext={() => onNext(QuetionsScreens.QUESTION_TWO)} />
        );
      case QuetionsScreens.QUESTION_TWO:
        return (
          <QuestionTwo onNext={() => onNext(QuetionsScreens.QUESTION_THREE)} />
        );
      default:
        return (
          <QuestionOne onNext={() => onNext(QuetionsScreens.QUESTION_ONE)} />
        );
    }
  };

  return (
    <View style={[container, {justifyContent: 'center'}]}>
      {renderScreen()}
    </View>
  );
};

export default Questions;
