import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import storiesSlice from "./features/stories/storiesSlice";

const rootReducer = combineReducers({
  user: userSlice,
  stories: storiesSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
