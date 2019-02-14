import Zjax from '../utils/zjax';
import ActionType from './ActionType';

var zjax = new Zjax();

// -------- User Actions ----------
export const receieveAuth = (json) => {
  return {
    type: ActionType.AUTH_SUCCESS,
    isFetchingAuth: false,
    isFetchedAuth: true,
    info: json,
    receivedAt: Date.now()
  }
}

export const fetchingAuth = (option, json) => {
  return {
    type: ActionType.AUTH_PENDING,
    option: option,
    isFetchingAuth: true,
    isFetchedAuth: false
  }
}

export const fetchingAuthError = (err) => {
  return {
    type: ActionType.AUTH_FAIL,
    isFetchingAuth: false,
    isFetchedAuth: true
  }
}


export const fetchAuthInfo = (data) => {
  return function (dispatch) {
    dispatch(fetchingAuth());
    var headers = {};
    if(data.headers) {
      headers = data.headers;
    }
    delete data.headers;
    zjax.request({
      url: '/api/auth',
      option: {
        method: 'post',
        data: data,
        headers: headers
      },
      successCallback: (response) => {
        console.log(response);
        // Set auth token
        localStorage.setItem('token', response.data.token);
        dispatch(receieveAuth(response.data));
      },
      failureCallback: (error) => {
        dispatch(fetchingAuthError(error));
      }
    });
  }
}