import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View} from 'react-native';
import {QuetionsScreens, RootState} from '../store/types.d';
import {container} from '../assets/styles';
import QuestionOne from '../components/questionOne';
import QuestionTwo from '../components/questionTwo';
import uiAction from '../store/uiaction';
import QuestionThree from '../components/questionThree';
import QuestionFour from '../components/questionFour';
import QuestionFive from '../components/questionFive';
import QuestionSix from '../components/questionSix';
import QuestionSeven from '../components/questionSeven';
import QuestionEight from '../components/questionEight';
import QuestionNine from '../components/questionNine';
import QuestionTen from '../components/questionTen';

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
      case QuetionsScreens.QUESTION_THREE:
        return (
          <QuestionThree onNext={() => onNext(QuetionsScreens.QUESTION_FOUR)} />
        );
      case QuetionsScreens.QUESTION_FOUR:
        return (
          <QuestionFour onNext={() => onNext(QuetionsScreens.QUESTION_FIVE)} />
        );
      case QuetionsScreens.QUESTION_FIVE:
        return (
          <QuestionFive onNext={() => onNext(QuetionsScreens.QUESTION_SIX)} />
        );
      case QuetionsScreens.QUESTION_SIX:
        return (
          <QuestionSix onNext={() => onNext(QuetionsScreens.QUESTION_SEVEN)} />
        );
      case QuetionsScreens.QUESTION_SEVEN:
        return (
          <QuestionSeven
            onNext={() => onNext(QuetionsScreens.QUESTION_EIGHT)}
          />
        );
      case QuetionsScreens.QUESTION_EIGHT:
        return (
          <QuestionEight onNext={() => onNext(QuetionsScreens.QUESTION_NINE)} />
        );
      case QuetionsScreens.QUESTION_NINE:
        return (
          <QuestionNine onNext={() => onNext(QuetionsScreens.QUESTION_TEN)} />
        );
      case QuetionsScreens.QUESTION_NINE:
        return (
          <QuestionNine onNext={() => onNext(QuetionsScreens.QUESTION_TEN)} />
        );
      case QuetionsScreens.QUESTION_TEN:
        return (
          <QuestionTen onNext={() => onNext(QuetionsScreens.QUESTION_ONE)} />
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
