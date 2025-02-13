import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isLoggedIn: boolean;
  user: { name: string; password:string} | null;
}

const initialState: AuthState = {
  isLoggedIn: !!localStorage.getItem("token"),
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ name: string; password:string }>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

// Exportar las acciones y el reducer
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
