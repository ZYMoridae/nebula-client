import Zjax from '../utils/zjax';
import Utils from '../utils/Utils';
import ActionType from './ActionType';

// var zjax = new Zjax();

// -------- User Actions ----------
export const receieveProducts = (results, totalPages) => {
  return {
    type: ActionType.RECEIVE_PRODUCTS,
    isFetchingProducts: false,
    isFetchedProducts: true,
    info: results,
    totalPages: totalPages,
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


export const fetchProductsInfo = (page, perPage, orderBy) => {
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
    Zjax.request({
      url: `/api/products?page=${page-1}&size=${perPage}&sort=${orderBy}&keyword`,
      option: Utils.addToken(options),
      successCallback: (response) => {
        console.log(response);
        dispatch(receieveProducts(response.data.content, response.data.page.totalPages));
      },
      failureCallback: (error) => {
        dispatch(fetchingProductsError(error));
      }
    });
  }
}