import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {apis} from '../apis';
import {QuestionsState} from '../types';

const questionsSlice = createSlice({
  name: 'questions',
  initialState: {
    loading: false,
    statusCode: 0,
    message: '',
    payload: [],
  } as QuestionsState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(apis.questionsForAquiz.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      apis.questionsForAquiz.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.statusCode = action?.payload?.statusCode;
        state.message = action?.payload?.message;
        state.payload = action?.payload?.payload;
      },
    );
    builder.addCase(apis.questionsForAquiz.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.message = action?.payload?.error;
      state.statusCode = action?.payload?.statusCode;
    });
  },
});

export default questionsSlice.reducer;
