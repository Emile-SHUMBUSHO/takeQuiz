import {configureStore} from '@reduxjs/toolkit';
import login from './reducers/login';
import signup from './reducers/signup';
import ui from './reducers/ui';
import quiz from './reducers/quiz';
import questions from './reducers/questions';
import createQuiz from './reducers/createQuiz';
import deleteQuiz from './reducers/deleteQuiz';
import updateQuiz from './reducers/updateQuiz';
import createquestion from './reducers/createquestion';

export const store = configureStore({
  reducer: {
    login,
    signup,
    ui,
    quiz,
    questions,
    createQuiz,
    deleteQuiz,
    updateQuiz,
    createquestion,
  },
});
