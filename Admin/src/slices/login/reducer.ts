import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  user: {},
  error: false, // for error message
  loading: false,
  isUserLogout: false,
  errorMsg: "", // for error
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    apiError(state, action) {
      state.error = true;
      state.loading = true;
      state.isUserLogout = false;
      state.errorMsg = "Invalid email or password";
    },
    loginSuccess(state, action) {
      state.user = action.payload
      state.loading = false;
      state.error = false;

      state.errorMsg = "";
    },
    logoutUserSuccess(state, action) {
      state.isUserLogout = true
    },
    reset_login_flag(state) {
      state.error = false
      state.loading = false;
      state.errorMsg = "";
    }
  },
});

export const {
  apiError,
  loginSuccess,
  logoutUserSuccess,
  reset_login_flag
} = loginSlice.actions

export default loginSlice.reducer;