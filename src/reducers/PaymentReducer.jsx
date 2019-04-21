import ActionType from '../actions/ActionType';

let initState = {
  isPaymentProcessing: false,
  isPaid: false,
  info: null
}
const paymentReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.PAYMENT_REJECTED:
      return Object.assign({}, state, {
        isPaid: action.isPaid,
        isPaymentProcessing: action.isPaymentProcessing
      })
    case ActionType.PAYMENT_PENDING:
      return Object.assign({}, state, {
        isPaid: action.isPaid,
        isPaymentProcessing: action.isPaymentProcessing
      })
    case ActionType.PAYMENT_SUCESS:
      return Object.assign({}, state, {
        isPaid: action.isPaid,
        isPaymentProcessing: action.isPaymentProcessing,
        info: action.info,
      })
    default:
      return state
  }
}

export default paymentReducer;