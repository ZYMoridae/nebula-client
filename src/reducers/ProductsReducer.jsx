let initState = {
  isFetchingProducts: false,
  isFetchedProducts: false,
  totalPages: 1,
  info: 'null'
}
const productsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCHING_PRODUCTS_REJECTED':
      return Object.assign({}, state, {
        isFetchedProducts: action.isFetchedProducts, 
        isFetchingProducts: action.isFetchingProducts
      })
    case 'FETCHING_PRODUCTS_PENDING':
      return Object.assign({}, state, {
        isFetchedProducts: action.isFetchedProducts, 
        isFetchingProducts: action.isFetchingProducts
      })
    case 'RECEIVE_PRODUCTS':
      return Object.assign({}, state, {
        isFetchedProducts: action.isFetchedProducts, 
        isFetchingProducts: action.isFetchingProducts, 
        info: action.info,
        totalPages: action.totalPages
      })
    default:
      return state
  }
}

export default productsReducer;