// import React, {useCallback, useEffect} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import {View} from 'react-native';
// import {QuetionsScreens, RootState} from '../store/types.d';
// import {container} from '../assets/styles';
// import QuestionOne from '../components/questionOne';
// import QuestionTwo from '../components/questionTwo';
// import uiAction from '../store/uiaction';
// import QuestionThree from '../components/questionThree';
// import QuestionFour from '../components/questionFour';
// import QuestionFive from '../components/questionFive';
// import QuestionSix from '../components/questionSix';
// import QuestionSeven from '../components/questionSeven';
// import QuestionEight from '../components/questionEight';
// import QuestionNine from '../components/questionNine';
// import QuestionTen from '../components/questionTen';
// import Result from '../components/result';
// import {apis} from '../store/apis';
// import {UnknownAction} from '@reduxjs/toolkit';

// interface Props {
//   route: any;
// }

// const Questions: React.FC<Props> = ({route}) => {
//   const dispatch = useDispatch();
//   const {quizId} = route.params;
//   const {currentQuestionScreen} = useSelector((state: RootState) => state.ui);
//   const {loading, statusCode, payload} = useSelector((state:RootState)=> state.questions);

//   const onNext = useCallback(
//     (state: QuetionsScreens) => {
//       dispatch(uiAction.changeQuestionsScreen(state));
//     },
//     [dispatch],
//   );

//   useEffect(() => {
//     dispatch(apis.questionsForAquiz() as unknown as UnknownAction);
//   }, [dispatch]);

//   const renderScreen = () => {
//     switch (currentQuestionScreen) {
//       case QuetionsScreens.QUESTION_ONE:
//         return (
//           <QuestionOne onNext={() => onNext(QuetionsScreens.QUESTION_TWO)} />
//         );
//       case QuetionsScreens.QUESTION_TWO:
//         return (
//           <QuestionTwo onNext={() => onNext(QuetionsScreens.QUESTION_THREE)} />
//         );
//       case QuetionsScreens.QUESTION_THREE:
//         return (
//           <QuestionThree onNext={() => onNext(QuetionsScreens.QUESTION_FOUR)} />
//         );
//       case QuetionsScreens.QUESTION_FOUR:
//         return (
//           <QuestionFour onNext={() => onNext(QuetionsScreens.QUESTION_FIVE)} />
//         );
//       case QuetionsScreens.QUESTION_FIVE:
//         return (
//           <QuestionFive onNext={() => onNext(QuetionsScreens.QUESTION_SIX)} />
//         );
//       case QuetionsScreens.QUESTION_SIX:
//         return (
//           <QuestionSix onNext={() => onNext(QuetionsScreens.QUESTION_SEVEN)} />
//         );
//       case QuetionsScreens.QUESTION_SEVEN:
//         return (
//           <QuestionSeven
//             onNext={() => onNext(QuetionsScreens.QUESTION_EIGHT)}
//           />
//         );
//       case QuetionsScreens.QUESTION_EIGHT:
//         return (
//           <QuestionEight onNext={() => onNext(QuetionsScreens.QUESTION_NINE)} />
//         );
//       case QuetionsScreens.QUESTION_NINE:
//         return (
//           <QuestionNine onNext={() => onNext(QuetionsScreens.QUESTION_TEN)} />
//         );
//       case QuetionsScreens.QUESTION_NINE:
//         return (
//           <QuestionNine onNext={() => onNext(QuetionsScreens.QUESTION_TEN)} />
//         );
//       case QuetionsScreens.QUESTION_TEN:
//         return <QuestionTen onNext={() => onNext(QuetionsScreens.RESULT)} />;
//       case QuetionsScreens.RESULT:
//         return <Result onNext={() => onNext(QuetionsScreens.QUESTION_ONE)} />;
//       default:
//         return (
//           <QuestionOne onNext={() => onNext(QuetionsScreens.QUESTION_ONE)} />
//         );
//     }
//   };

//   return (
//     <View style={[container, {justifyContent: 'center'}]}>
//       {renderScreen()}
//     </View>
//   );
// };

// export default Questions;

import React, { useState, useCallback, useEffect, ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActivityIndicator, View } from 'react-native';
import { RootState, QuetionsScreens } from '../store/types.d';
import uiAction from '../store/uiaction';
import { container } from '../assets/styles';
import QuestionOne from '../components/questionOne';
import Result from '../components/result';
import { apis } from '../store/apis';
import { UnknownAction } from '@reduxjs/toolkit';

interface Props {
  route: any;
}

const Questions: React.FC<Props> = ({ route }) => {
  const dispatch = useDispatch();
  const { quizId } = route.params;
  const { currentQuestionScreen } = useSelector((state: RootState) => state.ui);
  const { loading, statusCode, payload } = useSelector((state: RootState) => state.questions);
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  
  const onNext = useCallback(
    () => {
      if (currentQuestionIndex < payload.length - 1) {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      } else {
        dispatch(uiAction.changeQuestionsScreen(QuetionsScreens.RESULT));
      }
    },
    [currentQuestionIndex, dispatch, payload.length],
  );

  useEffect(() => {
    dispatch(apis.questionsForAquiz() as unknown as UnknownAction);
  }, [dispatch]);

  const renderScreen = () => {
    if (loading) {
      return <ActivityIndicator size="large" />;
    } else {
      if (currentQuestionScreen === QuetionsScreens.RESULT) {
        return <Result onNext={() => setCurrentQuestionIndex(0)} />;
      } else {
        return (
          <View style={[container, { justifyContent: 'center' }]}>
            <QuestionOne
              question={payload[currentQuestionIndex]}
              onNext={onNext}
            />
          </View>
        );
      }
    }
  };

  return <>{renderScreen()}</>;
};

export default Questions;

