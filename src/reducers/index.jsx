// index.js

import { combineReducers } from 'redux';
import NoteReducer from './NoteReducer';
import LoginReducer from './LoginReducer';
import ProductsReducer from './ProductsReducer';
import ProductInfoReducer from './ProductInfoReducer';

const counterApp = combineReducers({
  LoginReducer,
  NoteReducer,
  ProductsReducer,
  ProductInfoReducer
})

export default counterApp