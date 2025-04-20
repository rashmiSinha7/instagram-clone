import { configureStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import * as reducers from "./reducers";

const reducer = combineReducers(reducers);

export default configureStore(
  {
    reducer,
  },
  applyMiddleware(thunk)
);
