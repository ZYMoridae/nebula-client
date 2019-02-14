import { connect } from 'react-redux';
import { 
  fetchAuthInfo
} from '../actions';
import Login from '../components/Login';

const mapStateToProps = state => {
  return {
    info: state.info,
    isFetchingAuth: state.isFetchingAuth,
    isFetchedAuth: state.isFetchedAuth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    fetchAuthInfo: (data) => {
      dispatch(fetchAuthInfo(data));
    }
  }
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default LoginContainer;