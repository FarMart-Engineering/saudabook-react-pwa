import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserAuthInfo: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
      localStorage.setItem('token', action.payload.token);
    },
    clearUserAuthInfo: (state) => {
      state.token = null;
      localStorage.removeItem('token');
    },
    initializeAuth: (state) => {
      const token = localStorage.getItem('token');
      state.token = token;
    },
  },
});

export const { setUserAuthInfo, clearUserAuthInfo, initializeAuth } = authSlice.actions;

export const selectAuthToken = (state: { auth: AuthState }) => state.auth.token;
export const selectIsAuthenticated = (state: { auth: AuthState }) => !!state.auth.token;

export default authSlice.reducer;