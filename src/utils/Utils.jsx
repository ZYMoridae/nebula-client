const Utils = {
  addToken: (options) => {
    let token = sessionStorage.getItem('token');
    let tokenOption = {};
    if(token !== undefined) {
      tokenOption = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    }
    return Object.assign({}, options, tokenOption);
  },
  isUserLogin: () => {
    return sessionStorage.getItem('token') != undefined && sessionStorage.getItem('token') != 'null' && sessionStorage.getItem('token') != 'undefined';
  }
}

export default Utils;