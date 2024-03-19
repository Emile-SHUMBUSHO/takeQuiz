import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {apis} from '../apis';
import {DeleteQuizState} from '../types';

const deleteQuizSlice = createSlice({
  name: 'deleteQuiz',
  initialState: {
    deleteQuizLoading: false,
    deleteQuizStatusCode: 0,
    deleteQuizMessage: '',
  } as DeleteQuizState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(apis.deleteQuiz.pending, state => {
      state.deleteQuizLoading = true;
    });
    builder.addCase(
      apis.deleteQuiz.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.deleteQuizLoading = false;
        state.deleteQuizStatusCode = action?.payload?.statusCode;
        state.deleteQuizMessage = action?.payload?.message;
      },
    );
    builder.addCase(apis.deleteQuiz.rejected, (state, action: PayloadAction<any>) => {
      state.deleteQuizLoading = false;
      state.deleteQuizMessage = action?.payload?.error;
      state.deleteQuizStatusCode = action?.payload?.statusCode;
    });

    builder.addCase(apis.resetAll, (state)=>{
      state.deleteQuizStatusCode = 0;
      state.deleteQuizMessage= '';
    })
  },
});

export default deleteQuizSlice.reducer;
