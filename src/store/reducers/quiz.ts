import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {apis} from '../apis';
import {QuizState} from '../types';

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    loading: false,
    statusCode: 0,
    message: '',
    payload: [],
  } as QuizState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(apis.quiz.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      apis.quiz.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.statusCode = action?.payload?.statusCode;
        state.message = action?.payload?.message;
        state.payload = action?.payload?.payload;
      },
    );
    builder.addCase(apis.quiz.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.message = action?.payload?.error;
      state.statusCode = action?.payload?.statusCode;
    });
  },
});

export default quizSlice.reducer;
