import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"; // Importamos el reducer de autenticación

export const store = configureStore({
  reducer: {
    auth: authReducer, // Agregamos el reducer al store
  },
});

// Tipos de ayuda para TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;