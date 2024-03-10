import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {apis} from '../apis';
import {storeData} from '../../constants/config';
import {LoginState } from '../types';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    loading: false,
    success: false,
    error: false,
    message: '',
    token: '',
  } as LoginState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(apis.login.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      apis.login.fulfilled,
      (state, action: PayloadAction<any>) => {
        storeData({key: 'token', value: action?.payload?.data?.token});
        state.loading = false;
        state.success = true;
        state.error = action?.payload?.error;
        state.message = action?.payload?.message;
      },
    );
    builder.addCase(
      apis.login.rejected,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action?.payload.error;
        state.message = action?.payload?.error;
      },
    );
    
    builder.addCase(apis.authInit.fulfilled, (state, action:PayloadAction<any>) => {
      state.token = action?.payload;
    })

    builder.addCase(apis.resetAll, state => {
      (state.error = false),
        (state.loading = false),
        (state.message = ''),
        (state.success = false);
    });
  },
});

export default loginSlice.reducer;
