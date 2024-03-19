import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {apis} from '../apis';
import {CreateQuizState} from '../types';

const createQuizSlice = createSlice({
  name: 'createQuiz',
  initialState: {
    createQuizLoading: false,
    createQuizStatusCode: 0,
    createQuizMessage: '',
  } as CreateQuizState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(apis.createQuiz.pending, state => {
      state.createQuizLoading = true;
    });
    builder.addCase(
      apis.createQuiz.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.createQuizLoading = false;
        state.createQuizStatusCode = action?.payload?.statusCode;
        state.createQuizMessage = action?.payload?.message;
      },
    );
    
    builder.addCase(apis.createQuiz.rejected, (state, action: PayloadAction<any>) => {
      state.createQuizLoading = false;
      state.createQuizMessage = action?.payload?.error;
      state.createQuizStatusCode = action?.payload?.statusCode;
    });

    builder.addCase(apis.resetAll, (state)=>{
      state.createQuizMessage = '';
      state.createQuizStatusCode = 0;
    })
  },
});

export default createQuizSlice.reducer;
