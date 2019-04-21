import Zjax from '../utils/zjax';
import Utils from '../utils/Utils';
import ActionType from './ActionType';

export const paymentSucess = (results) => {
  return {
    type: ActionType.PAYMENT_SUCESS,
    isPaymentProcessing: false,
    isPaid: true,
    info: results,
    receivedAt: Date.now()
  }
}

export const paymentPending = (option, json) => {
  return {
    type: ActionType.PAYMENT_PENDING,
    option: option,
    isPaymentProcessing: true,
    isPaid: false
  }
}

export const paymentError = (err) => {
  return {
    type: ActionType.PAYMENT_REJECTED,
    isPaymentProcessing: false,
    isPaid: true
  }
}


export const doPayment = () => {
  return function (dispatch) {
    dispatch(paymentPending());

    // if(data.headers) {
    //   headers = data.headers;
    // }
    let options = {
      method: 'get'
    };

    // console.log(Utils.addToken(options));

    // delete data.headers;
    Zjax.request({
      url: `/api/carts/my`,
      option: Utils.addToken(options),
      successCallback: (response) => {
        console.log(response);
        dispatch(paymentSucess(response.data.cartItems));
      },
      failureCallback: (error) => {
        dispatch(paymentError(error));
      }
    });
  }
}