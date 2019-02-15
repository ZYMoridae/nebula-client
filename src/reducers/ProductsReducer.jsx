let initState = {
  isFetchingProducts: false,
  isFetchedProducts: false,
  info: 'null'
}
const productsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCHING_PRODUCTS_REJECTED':
      return Object.assign({}, state, {isFetchedProducts: action.isFetchedProducts, isFetchingProducts: action.isFetchingProducts})
    case 'FETCHING_PRODUCTS_PENDING':
      return Object.assign({}, state, {isFetchedProducts: action.isFetchedProducts, isFetchingProducts: action.isFetchingProducts})
    case 'RECEIVE_PRODUCTS':
      return Object.assign({}, state, {isFetchedProducts: action.isFetchedProducts, isFetchingProducts: action.isFetchingProducts, info: action.info})
    default:
      return state
  }
}

export default productsReducer;