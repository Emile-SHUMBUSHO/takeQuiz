import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {apis} from '../apis';
import {CreateQuestionState} from '../types';

const createQuestionSlice = createSlice({
  name: 'createQuestion',
  initialState: {
    createQuestionLoading: false,
    createQuestionStatusCode: 0,
    createQuestionMessage: '',
  } as CreateQuestionState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(apis.createQuestion.pending, state => {
      state.createQuestionLoading = true;
    });
    builder.addCase(
      apis.createQuestion.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.createQuestionLoading = false;
        state.createQuestionStatusCode = action?.payload?.statusCode;
        state.createQuestionMessage = action?.payload?.message;
      },
    );
    builder.addCase(apis.createQuestion.rejected, (state, action: PayloadAction<any>) => {
      state.createQuestionLoading = false;
      state.createQuestionMessage = action?.payload?.error;
      state.createQuestionStatusCode = action?.payload?.statusCode;
    });
  },
});

export default createQuestionSlice.reducer;
