import { connect } from 'react-redux';
import {
  doPayment
} from '../actions';
import Payment from '../components/Payment';

const mapStateToProps = state => {
  console.log(state);
  return {
    info: state.PaymentReducer.info,
    isPaymentProcessing: state.PaymentReducer.isPaymentProcessing,
    isPaid: state.PaymentReducer.isPaid
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