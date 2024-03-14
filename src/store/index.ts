import {configureStore} from '@reduxjs/toolkit';
import login from './reducers/login';
import signup from './reducers/signup';
import ui from './reducers/ui';
import quiz from './reducers/quiz';
import questions from './reducers/questions';

export const store = configureStore({
  reducer: {
    login,
    signup,
    ui,
    quiz,
    questions
  },
});
