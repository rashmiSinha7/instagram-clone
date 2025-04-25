import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import storiesSlice from "./features/stories/storiesSlice";
import feedSlice from "./features/feeds/feedSlice";

const rootReducer = combineReducers({
  user: userSlice,
  stories: storiesSlice,
  feed: feedSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
