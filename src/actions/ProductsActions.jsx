import Zjax from '../utils/zjax';
import Utils from '../utils/Utils';
import ActionType from './ActionType';

// ------ User Actions ------

/**
 * Products info fetched successful
 * 
 * @param {array} results 
 * @param {int} totalPages 
 */
export const receieveProducts = (results, totalPages) => {
  return {
    type: ActionType.RECEIVE_PRODUCTS,
    isFetchingProducts: false,
    isFetchedProducts: true,
    info: results,
    totalPages: totalPages
  }
}

/**
 * Fetching products
 */
export const fetchingProducts = () => {
  return {
    type: ActionType.FETCHING_PRODUCTS_PENDING,
    isFetchingProducts: true,
    isFetchedProducts: false
  }
}

/**
 * Fetching products info failed
 * 
 * @param {object} error 
 */
export const fetchingProductsError = (error) => {
  return {
    type: ActionType.FETCHING_PRODUCTS_REJECTED,
    isFetchingProducts: false,
    isFetchedProducts: true,
    error: error
  }
}

/**
 * Fetch products info
 * 
 * @param {int} page 
 * @param {int} perPage 
 * @param {string} orderBy 
 */
export const fetchProductsInfo = (page, perPage, orderBy) => {
  return function (dispatch) {
    dispatch(fetchingProducts());

    let options = {
      method: 'get'
    };

    Zjax.request({
      url: `/api/products?page=${page - 1}&size=${perPage}&sort=${orderBy}&keyword`,
      option: Utils.addToken(options),
      successCallback: (response) => {
        dispatch(receieveProducts(response.data.content, response.data.page.totalPages));
      },
      failureCallback: (error) => {
        dispatch(fetchingProductsError(error));
      }
    });
  }
}

// ------ Fetch product by ids ------

/**
 * Receieve products by ids
 * 
 * @param {*} results 
 */
export const receieveProductsByIds = (results) => {
  return {
    type: ActionType.RECEIEVE_PRODUCTS_BY_IDS,
    isFetchingProductsByIds: false,
    isFetchedProductsByIds: true,
    info: results
  }
}

/**
 * Fetching products by ids
 */
export const fetchingProductsByIds = () => {
  return {
    type: ActionType.FETCHING_PRODUCTS_BY_IDS_PENDING,
    isFetchingProductsByIds: true,
    isFetchedProductsByIds: false
  }
}

/**
 * Fetching products by ids failed
 * 
 * @param {object} error 
 */
export const fetchingProductsByIdsError = (error) => {
  return {
    type: ActionType.FETCHING_PRODUCTS_BY_IDS_REJECTED,
    isFetchingProductsByIds: false,
    isFetchedProductsByIds: true,
    error: error
  }
}

/**
 * Fetch products by ids
 * 
 * @param {array} ids 
 */
export const fetchProductsByIds = (ids) => {
  return function (dispatch) {
    dispatch(fetchingProductsByIds());

    let options = {
      method: 'post',
      data: {
        ids: ids
      }
    };

    Zjax.request({
      url: '/api/products/ids',
      option: Utils.addToken(options),
      successCallback: (response) => {
        dispatch(receieveProductsByIds(response.data));
      },
      failureCallback: (error) => {
        dispatch(fetchingProductsByIdsError(error));
      }
    });
  }
}

