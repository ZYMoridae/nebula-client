import { connect } from 'react-redux';
import {
  fetchShoppingCartInfo,
  proceedShoppingCart
} from '../actions';
import ShoppingCart from '../components/ShoppingCart';

const mapStateToProps = state => {
  return {
    info: state.ShoppingCartReducer.info,
    isFetchingProductCategory: state.ShoppingCartReducer.isFetchingProductCategory,
    isFetchedProductCategory: state.ShoppingCartReducer.isFetchedProductCategory
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    fetchShoppingCartInfo: () => {
      dispatch(fetchShoppingCartInfo());
    },
    proceedShoppingCart: (cartItems) => {
      dispatch(proceedShoppingCart(cartItems));
    }
  }
}

const ShoppingCartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);

export default ShoppingCartContainer;