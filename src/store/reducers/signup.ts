import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { apis } from "../apis";
import { SignupState } from "../types";

const signupSlice = createSlice({
  name: "signup",
  initialState: {
    loading: false,
    statusCode: 0,
    message: "",
  } as SignupState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(apis.signup.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      apis.signup.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.statusCode =action?.payload?.statusCode;
        state.message = action?.payload?.message;
      }
    );
    builder.addCase(
      apis.signup.rejected,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.statusCode = action?.payload?.statusCode;
        state.message = action?.payload?.message;
      }
    );

    builder.addCase(apis.resetAll, (state)=>{
      state.message = '';
      state.statusCode = 0;
    })
  },
});

export default signupSlice.reducer;
