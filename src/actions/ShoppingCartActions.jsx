import Zjax from '../utils/zjax';
import Utils from '../utils/Utils';
import ActionType from './ActionType';

// -------- Shopping Cart Actions ----------
export const receieveShoppingCart = (results) => {
  return {
    type: ActionType.RECEIVE_SHOPPINGCART,
    isFetchingShoppingCart: false,
    isFetchedShoppingCart: true,
    info: results
  }
}

export const fetchingShoppingCart = (option, json) => {
  return {
    type: ActionType.FETCHING_SHOPPINGCART_PENDING,
    option: option,
    isFetchingShoppingCart: true,
    isFetchedShoppingCart: false
  }
}

export const fetchingShoppingCartError = (err) => {
  return {
    type: ActionType.FETCHING_SHOPPINGCART_REJECTED,
    isFetchingShoppingCart: false,
    isFetchedShoppingCart: true
  }
}

export const fetchShoppingCartInfo = () => {
  return function (dispatch) {
    dispatch(fetchingShoppingCart());

    let options = {
      method: 'get'
    };

    Zjax.request({
      url: `/api/carts/my`,
      option: Utils.addToken(options),
      successCallback: (response) => {
        dispatch(receieveShoppingCart(response.data.cartItems));
      },
      failureCallback: (error) => {
        dispatch(fetchingShoppingCartError(error));
      }
    });
  }
}

export const proceedShoppingCart = (cartItems) => {
  return {
    type: ActionType.PROCEEED_SHOPPING_CART,
    cartItems: cartItems
  }
}
