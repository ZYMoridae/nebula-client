import { connect } from 'react-redux';
import {
  fetchShoppingCartInfo,
  proceedShoppingCart,
  createOrder
} from '../actions';
import ShoppingCart from '../components/ShoppingCart';

const mapStateToProps = state => {
  return {
    info: state.ShoppingCartReducer.info,
    isFetchingProductCategory: state.ShoppingCartReducer.isFetchingProductCategory,
    isFetchedProductCategory: state.ShoppingCartReducer.isFetchedProductCategory,
    isCreatingOrder: state.ShoppingCartReducer.isCreatingOrder,
    isCreatedOrder: state.ShoppingCartReducer.isCreatedOrder,
    orderCreationError: state.ShoppingCartReducer.orderCreationError,
    orderInfo: state.ShoppingCartReducer.orderInfo
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
    },
    createOrder: (data) => {
      dispatch(createOrder(data));
    }
  }
}

const ShoppingCartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);

export default ShoppingCartContainer;