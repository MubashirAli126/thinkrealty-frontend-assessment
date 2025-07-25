import { combineReducers } from '@reduxjs/toolkit';
import landingPageReducer from './slices/landingPageSlice';

const rootReducer = combineReducers({
  landingPage: landingPageReducer,
});

export default rootReducer;
