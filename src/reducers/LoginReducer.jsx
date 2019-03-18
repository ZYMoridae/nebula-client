let initState = {
  isFetchingAuth: false,
  isFetchedAuth: false,
  isShowLoginError: false,
  info: 'null'
}
const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case 'AUTH_FAIL':
      return Object.assign({}, state, {
        isFetchedAuth: action.isFetchedAuth, 
        isFetchingAuth: action.isFetchingAuth, 
        isShowLoginError: action.isShowLoginError
      })
    case 'AUTH_PENDING':
      return Object.assign({}, state, {
        isFetchedAuth: action.isFetchedAuth, 
        isFetchingAuth: action.isFetchingAuth,
        isShowLoginError: action.isShowLoginError
      })
    case 'AUTH_SUCCESS':
      return Object.assign({}, state, {
        isFetchedAuth: action.isFetchedAuth, 
        isFetchingAuth: action.isFetchingAuth,
        isShowLoginError: action.isShowLoginError,
        info: action.info
      })
    case 'HIDE_ERROR':
      return Object.assign({}, state, {
        isShowLoginError: action.isShowLoginError
      })
    default:
      return state
  }
}

export default loginReducer;