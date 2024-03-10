import {configureStore} from '@reduxjs/toolkit';
import login from './reducers/login';
import signup from './reducers/signup';
import profile from './reducers/profile';
import ui from './reducers/ui';

export const store = configureStore({
  reducer: {
    login,
    signup,
    profile,
    ui,
  },
});
