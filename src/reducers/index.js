// index.js

import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import NoteReducer from './NoteReducer';

const counterApp = combineReducers({
  counterReducer,
  NoteReducer
})

export default counterApp