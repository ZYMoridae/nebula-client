import { connect } from 'react-redux';
import {
  fetchShoppingCartInfo
} from '../actions';
import ShoppingCart from '../components/ShoppingCart';

const mapStateToProps = state => {
  console.log(state);
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
    }
  }
}

const ShoppingCartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);

export default ShoppingCartContainer;