import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {QuetionsScreens, UiState} from '../types.d';
import uiAction from '../uiaction';

const uiSlice = createSlice({
  name: 'uiStore',
  initialState: {
    currentQuestionScreen: QuetionsScreens.QUESTION_ONE,
  } as UiState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      uiAction.changeQuestionsScreen,
      (state, action: PayloadAction<any>) => {
        state.currentQuestionScreen = action.payload.currentState;
      },
    );
  },
});

export default uiSlice.reducer;
