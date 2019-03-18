import Zjax from '../utils/zjax';
import Utils from '../utils/Utils';
import ActionType from './ActionType';

// var zjax = new Zjax();

// -------- User Actions ----------
export const receieveProductInfo = (result) => {
  return {
    type: ActionType.RECEIVE_PRODUCT_INFO,
    isFetchingProductInfo: false,
    isFetchedProductInfo: true,
    info: result,
    receivedAt: Date.now()
  }
}

export const fetchingProductInfo = (option, json) => {
  return {
    type: ActionType.FETCHING_PRODUCT_INFO_PENDING,
    option: option,
    isFetchingProductInfo: true,
    isFetchedProductInfo: false
  }
}

export const fetchingProductInfoError = (err) => {
  return {
    type: ActionType.FETCHING_PRODUCT_INFO_REJECTED,
    isFetchingProductInfo: false,
    isFetchedProductInfo: true
  }
}


export const fetchProductInfo = (productId) => {
  return function (dispatch) {
    dispatch(fetchingProductInfo());

    // if(data.headers) {
    //   headers = data.headers;
    // }
    let options = {
      method: 'get'
    };
    
    // console.log(Utils.addToken(options));

    // delete data.headers;
    Zjax.request({
      url: `/api/products/${productId}`,
      option: Utils.addToken(options),
      successCallback: (response) => {
        dispatch(receieveProductInfo(response.data));
      },
      failureCallback: (error) => {
        dispatch(fetchingProductInfoError(error));
      }
    });
  }
}