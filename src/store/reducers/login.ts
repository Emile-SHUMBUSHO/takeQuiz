import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {apis} from '../apis';
import {storeData} from '../../constants/config';
import {LoginState} from '../types';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    loading: false,
    statusCode: 0,
    message: '',
    token: '',
    error: false,
  } as LoginState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(apis.login.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      apis.login.fulfilled,
      (state, action: PayloadAction<any>) => {
        storeData({key: 'token', value: action?.payload?.token});
        state.loading = false;
        state.statusCode = action?.payload?.statusCode;
        state.message = action?.payload?.message;
      },
    );
    builder.addCase(
      apis.login.rejected,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.message = action?.payload?.error;
        state.statusCode = action?.payload?.statusCode;
        state.error = true;
      },
    );
    builder.addCase(
      apis.authInit.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.token = action?.payload;
      },
    );

    builder.addCase(apis.resetAll, (state)=>{
      state.statusCode = 0;
      state.message= '';
      state.error = false
    })
  },
});

export default loginSlice.reducer;
