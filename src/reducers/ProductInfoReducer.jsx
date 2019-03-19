let initState = {
  isFetchingProductInfo: false,
  isFetchedProductInfo: false,
  isAddedCartItem: false,
  isAddingCartItem: false,
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
    case 'ADD_CART_ITEM_REJECTED':
      return Object.assign({}, state, {
        isAddedCartItem: action.isAddedCartItem, 
        isAddingCartItem: action.isAddingCartItem
      })
    case 'ADD_CART_ITEM_PENDING':
      return Object.assign({}, state, {
        isAddedCartItem: action.isAddedCartItem, 
        isAddingCartItem: action.isAddingCartItem
      })
    case 'ADD_CART_ITEM_FULLFILLED':
      console.log(state);
      return Object.assign({}, state, {
        isAddedCartItem: action.isAddedCartItem, 
        isAddingCartItem: action.isAddingCartItem, 
        // info: action.info
      })
    default:
      return state
  }
}

export default productInfoReducer;