import { connect } from 'react-redux';
import {
  doPayment
} from '../actions';
import Payment from '../components/Payment';

const mapStateToProps = state => {
  return {
    info: state.PaymentReducer.info,
    isPaymentProcessing: state.PaymentReducer.isPaymentProcessing,
    isPaid: state.PaymentReducer.isPaid,
    cartItems: state.ShoppingCartReducer.cartItems
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    doPayment: () => {
      dispatch(doPayment());
    }
  }
}

const PaymentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Payment);

export default PaymentContainer;