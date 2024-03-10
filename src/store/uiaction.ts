import {createAction} from '@reduxjs/toolkit';
import {QuetionsScreens} from './types.d';

class UiAction {
  changeQuestionsScreen = createAction(
    'changeQuestionsScreen',
    (state: QuetionsScreens) => {
      return {
        payload: {
          currentState: state,
        },
      };
    },
  );
}

const uiAction = new UiAction();
export default uiAction;
