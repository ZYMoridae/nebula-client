import Zjax from '../utils/zjax';
import Utils from '../utils/Utils';
import ActionType from './ActionType';

// var zjax = new Zjax();

// -------- User Actions ----------
export const receieveProductCategory = (results, totalPages) => {
  return {
    type: ActionType.RECEIVE_PRODUCTCATEGORY,
    isFetchingProductCategory: false,
    isFetchedProductCategory: true,
    info: results,
    totalPages: totalPages,
    receivedAt: Date.now()
  }
}

export const fetchingProductCategory = (option, json) => {
  return {
    type: ActionType.FETCHING_PRODUCTCATEGORY_PENDING,
    option: option,
    isFetchingProductCategory: true,
    isFetchedProductCategory: false
  }
}

export const fetchingProductCategoryError = (err) => {
  return {
    type: ActionType.FETCHING_PRODUCTCATEGORY_REJECTED,
    isFetchingProductCategory: false,
    isFetchedProductCategory: true
  }
}


export const fetchProductCategoryInfo = (page, perPage, orderBy) => {
  return function (dispatch) {
    dispatch(fetchingProductCategory());

    // if(data.headers) {
    //   headers = data.headers;
    // }
    let options = {
      method: 'get'
    };
    
    // console.log(Utils.addToken(options));

    // delete data.headers;
    Zjax.request({
      url: `/api/product-categories?page=${page-1}&size=${perPage}&sort=${orderBy}&keyword`,
      option: Utils.addToken(options),
      successCallback: (response) => {
        console.log(response);
        dispatch(receieveProductCategory(response.data.content, response.data.page.totalPages));
      },
      failureCallback: (error) => {
        dispatch(fetchingProductCategoryError(error));
      }
    });
  }
}