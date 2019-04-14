// index.js

import { combineReducers } from 'redux';
import NoteReducer from './NoteReducer';
import LoginReducer from './LoginReducer';
import ProductsReducer from './ProductsReducer';
import ProductInfoReducer from './ProductInfoReducer';
import ProductCategorySideBarReducer from './ProductCategorySideBarReducer';

const counterApp = combineReducers({
  LoginReducer,
  NoteReducer,
  ProductsReducer,
  ProductInfoReducer,
  ProductCategorySideBarReducer
})

export default counterApp