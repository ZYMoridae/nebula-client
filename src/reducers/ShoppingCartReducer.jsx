import ActionType from '../actions/ActionType';

let initState = {
  isFetchingShoppingCart: false,
  isFetchedShoppingCart: false,
  info: []
}
const shoppingCartReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.FETCHING_SHOPPINGCART_REJECTED:
      return Object.assign({}, state, {
        isFetchedShoppingCart: action.isFetchedShoppingCart,
        isFetchingShoppingCart: action.isFetchingShoppingCart
      })
    case ActionType.FETCHING_SHOPPINGCART_PENDING:
      return Object.assign({}, state, {
        isFetchedShoppingCart: action.isFetchedShoppingCart,
        isFetchingShoppingCart: action.isFetchingShoppingCart
      })
    case ActionType.RECEIVE_SHOPPINGCART:
      return Object.assign({}, state, {
        isFetchedShoppingCart: action.isFetchedShoppingCart,
        isFetchingShoppingCart: action.isFetchingShoppingCart,
        info: action.info,
      })
    default:
      return state
  }
}

export default shoppingCartReducer;