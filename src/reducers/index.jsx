// index.js

import { combineReducers } from 'redux';
import NoteReducer from './NoteReducer';
import LoginReducer from './LoginReducer';
import ProductsReducer from './ProductsReducer';
import ProductInfoReducer from './ProductInfoReducer';
import ProductCategorySideBarReducer from './ProductCategorySideBarReducer';
import ShoppingCartReducer from './ShoppingCartReducer';
import PaymentReducer from './PaymentReducer';

const counterApp = combineReducers({
  LoginReducer,
  NoteReducer,
  ProductsReducer,
  ProductInfoReducer,
  ProductCategorySideBarReducer,
  ShoppingCartReducer,
  PaymentReducer
})

export default counterApp