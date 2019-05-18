import ActionType from '../actions/ActionType';

let initState = {
  isFetchingHomeBanner: false,
  isFetchedHomeBanner: false,
  info: []
}

const homeReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.FETCHING_HOMEBANNER_REJECTED:
      return Object.assign({}, state, {
        isFetchedHomeBanner: action.isFetchedHomeBanner,
        isFetchingHomeBanner: action.isFetchingHomeBanner
      })
    case ActionType.FETCHING_HOMEBANNER_PENDING:
      return Object.assign({}, state, {
        isFetchedHomeBanner: action.isFetchedHomeBanner,
        isFetchingHomeBanner: action.isFetchingHomeBanner
      })
    case ActionType.RECEIVE_HOMEBANNER:
      return Object.assign({}, state, {
        isFetchedHomeBanner: action.isFetchedHomeBanner,
        isFetchingHomeBanner: action.isFetchingHomeBanner,
        info: action.info
      })
    default:
      return state
  }
}

export default homeReducer;