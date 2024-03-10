import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {apis} from '../apis';
import {ProfileState} from '../types';

const profileSlice = createSlice({
  name: 'profiles',
  initialState: {
    loading: false,
    error: false,
    message: '',
    ProfileData: {},
  } as ProfileState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(apis.profile.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      apis.profile.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.message = action?.payload?.message;
        state.ProfileData = action?.payload?.data;
      },
    );
    builder.addCase(
      apis.profile.rejected,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action?.payload.error;
      },
    )
  },
});

export default profileSlice.reducer;
