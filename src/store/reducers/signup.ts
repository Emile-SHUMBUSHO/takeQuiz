import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { apis } from "../apis";
import { SignupState } from "../types";

const signupSlice = createSlice({
  name: "signup",
  initialState: {
    loading: false,
    success: false,
    error: "",
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
        state.success = true;
        state.message = action?.payload?.message;
      }
    );
    builder.addCase(
      apis.signup.rejected,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.success = false;
        state.error = action?.payload.error;
      }
    );
    builder.addCase(apis.resetAll, state=>{
        state.error = "";
        state.message = "";
        state.success = false;
    })
  },
});

export default signupSlice.reducer;
