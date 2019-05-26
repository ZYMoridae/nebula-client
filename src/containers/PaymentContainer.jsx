import { connect } from 'react-redux';
import {
  doPayment,
  fetchProductsByIds,
  fetchActivateOrder
} from '../actions';
import Payment from '../components/Payment';

const mapStateToProps = state => {
  return {
    info: state.PaymentReducer.info,
    isPaymentProcessing: state.PaymentReducer.isPaymentProcessing,
    isPaid: state.PaymentReducer.isPaid,
    cartItems: state.ShoppingCartReducer.cartItems,
    isFetchingActivateOrder: state.PaymentReducer.isFetchingActivateOrder,
    isFetchedActivateOrder: state.PaymentReducer.isFetchedActivateOrder,
    activateOrder: state.PaymentReducer.activateOrder,
    fetchingActivateOrderError: state.PaymentReducer.fetchingActivateOrderError
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    doPayment: () => {
      dispatch(doPayment());
    },
    fetchActivateOrder: (orderId) => {
      dispatch(fetchActivateOrder(orderId));
    },

  }
}

const PaymentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Payment);

export default PaymentContainer;