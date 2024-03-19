import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {apis} from '../apis';
import {UpdateQuizState} from '../types';

const updateQuizSlice = createSlice({
  name: 'updateQuiz',
  initialState: {
    updateQuizLoading: false,
    updateQuizStatusCode: 0,
    updateQuizMessage: '',
  } as UpdateQuizState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(apis.updateQuiz.pending, state => {
      state.updateQuizLoading = true;
    });
    builder.addCase(
      apis.updateQuiz.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.updateQuizLoading = false;
        state.updateQuizStatusCode = action?.payload?.statusCode;
        state.updateQuizMessage = action?.payload?.message;
      },
    );
    builder.addCase(
      apis.updateQuiz.rejected,
      (state, action: PayloadAction<any>) => {
        state.updateQuizLoading = false;
        state.updateQuizMessage = action?.payload?.error;
        state.updateQuizStatusCode = action?.payload?.statusCode;
      },
    );
    builder.addCase(apis.resetAll, (state)=>{
      state.updateQuizMessage = '';
      state.updateQuizStatusCode = 0;
    })
  },
});

export default updateQuizSlice.reducer;
