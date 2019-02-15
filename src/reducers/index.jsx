// index.js

import { combineReducers } from 'redux';
import NoteReducer from './NoteReducer';
import LoginReducer from './LoginReducer';
import ProductsReducer from './ProductsReducer';

const counterApp = combineReducers({
  LoginReducer,
  NoteReducer,
  ProductsReducer
})

export default counterApp