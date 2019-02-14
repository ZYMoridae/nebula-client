// index.js

import { combineReducers } from 'redux';
import CounterReducer from './CounterReducer';
import NoteReducer from './NoteReducer';
import LoginReducer from './LoginReducer';

const counterApp = combineReducers({
  CounterReducer,
  LoginReducer,
  NoteReducer
})

export default counterApp