import { configureStore } from "@reduxjs/toolkit";
import { registrationSlice } from "./features/registration";

export const store = configureStore({
  reducer: {
    registration: registrationSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
