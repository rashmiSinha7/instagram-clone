import { combineReducers } from '@reduxjs/toolkit'
import { todos, counter } from './reducers'

export default combineReducers({
  todos,
  counter
})