import Zjax from '../utils/zjax';
import Utils from '../utils/Utils';
import ActionType from './ActionType';

// var zjax = new Zjax();

// -------- User Actions ----------
export const receieveShoppingCart = (results) => {
  return {
    type: ActionType.RECEIVE_SHOPPINGCART,
    isFetchingShoppingCart: false,
    isFetchedShoppingCart: true,
    info: results,
    receivedAt: Date.now()
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

    // if(data.headers) {
    //   headers = data.headers;
    // }
    let options = {
      method: 'get'
    };

    // console.log(Utils.addToken(options));

    // delete data.headers;
    Zjax.request({
      url: `/api/carts/my`,
      option: Utils.addToken(options),
      successCallback: (response) => {
        console.log(response);
        dispatch(receieveShoppingCart(response.data.cartItems));
      },
      failureCallback: (error) => {
        dispatch(fetchingShoppingCartError(error));
      }
    });
  }
}