import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { userSignUp, userSignIn, userSignOut, userRefresh } from './operations';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
  error: null,
  isLoading: false,
  isFetchingCurrentUser: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(userSignUp.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(userSignIn.fulfilled, (state, action) => {
        state.user = { name: action.payload.user.name, email: action.payload.user.email };
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(userSignOut.fulfilled, state => {
        state.user = { name: '', email: '' };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(userRefresh.fulfilled, (state, action) => {
        state.user = { name: action.payload.name, email: action.payload.email };
        state.isFetchingCurrentUser = false;
        state.isLoggedIn = true;
      })
      .addCase(userRefresh.pending, (state) => {
        state.isFetchingCurrentUser = true;
      })
      .addCase(userRefresh.rejected, (state) => {
        state.isFetchingCurrentUser = false;
      })
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected),
});

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const extraActions = [userSignUp, userSignIn, userSignOut, userRefresh];

const getActions = type => extraActions.map(action => action[type]);

export const authReducer = authSlice.reducer;