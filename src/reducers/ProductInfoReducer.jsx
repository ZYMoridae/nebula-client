let initState = {
  isFetchingProductInfo: false,
  isFetchedProductInfo: false,
  info: 'null'
}
const productInfoReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCHING_PRODUCT_INFO_REJECTED':
      return Object.assign({}, state, {
        isFetchedProductInfo: action.isFetchedProductInfo, 
        isFetchingProductInfo: action.isFetchingProductInfo
      })
    case 'FETCHING_PRODUCT_INFO_PENDING':
      return Object.assign({}, state, {
        isFetchedProductInfo: action.isFetchedProductInfo, 
        isFetchingProductInfo: action.isFetchingProductInfo
      })
    case 'RECEIVE_PRODUCT_INFO':
      return Object.assign({}, state, {
        isFetchedProductInfo: action.isFetchedProductInfo, 
        isFetchingProductInfo: action.isFetchingProductInfo, 
        info: action.info
      })
    default:
      return state
  }
}

export default productInfoReducer;