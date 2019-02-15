import Zjax from '../utils/zjax';
import Utils from '../utils/Utils';
import ActionType from './ActionType';

var zjax = new Zjax();

// -------- User Actions ----------
export const receieveProducts = (json) => {
  return {
    type: ActionType.RECEIVE_PRODUCTS,
    isFetchingProducts: false,
    isFetchedProducts: true,
    info: json,
    receivedAt: Date.now()
  }
}

export const fetchingProducts = (option, json) => {
  return {
    type: ActionType.FETCHING_PRODUCTS_PENDING,
    option: option,
    isFetchingProducts: true,
    isFetchedProducts: false
  }
}

export const fetchingProductsError = (err) => {
  return {
    type: ActionType.FETCHING_PRODUCTS_REJECTED,
    isFetchingProducts: false,
    isFetchedProducts: true
  }
}


export const fetchProductsInfo = () => {
  return function (dispatch) {
    dispatch(fetchingProducts());

    // if(data.headers) {
    //   headers = data.headers;
    // }
    let options = {
      method: 'get'
    };
    
    // console.log(Utils.addToken(options));

    // delete data.headers;
    zjax.request({
      url: '/api/products',
      option: Utils.addToken(options),
      successCallback: (response) => {
        dispatch(receieveProducts(response.data));
      },
      failureCallback: (error) => {
        dispatch(fetchingProductsError(error));
      }
    });
  }
}