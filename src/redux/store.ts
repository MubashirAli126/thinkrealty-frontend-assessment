import { configureStore } from '@reduxjs/toolkit';
import landingPageReducer from './slices/landingPageSlice';

export const store = configureStore({
  reducer: {
    landingPage: landingPageReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
