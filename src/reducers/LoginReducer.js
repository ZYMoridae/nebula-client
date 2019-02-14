let initState = {
  isFetchingAuth: false,
  isFetchedAuth: false,
  info: 'null'
}
const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case 'AUTH_FAIL':
      return Object.assign({}, state, {isFetchedAuth: action.isFetchedAuth, isFetchingAuth: action.isFetchingAuth})
    case 'AUTH_PENDING':
      return Object.assign({}, state, {isFetchedAuth: action.isFetchedAuth, isFetchingAuth: action.isFetchingAuth})
    case 'AUTH_SUCCESS':
      return Object.assign({}, state, {isFetchedAuth: action.isFetchedAuth, isFetchingAuth: action.isFetchingAuth, info: action.info})
    default:
      return state
  }
}

export default loginReducer;