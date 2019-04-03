import { connect } from 'react-redux';
import { 
  fetchProductInfo,
  addCartItem
} from '../actions/ProductInfoActions';
import ProductInfo from '../components/ProductInfo';

const mapStateToProps = state => {
  return {
    info: state.ProductInfoReducer.info,
    isFetchingProductInfo: state.ProductInfoReducer.isFetchingProductInfo,
    isFetchedProductInfo: state.ProductInfoReducer.isFetchedProductInfo,
    isAddedCartItem: state.ProductInfoReducer.isAddedCartItem,
    isAddingCartItem: state.ProductInfoReducer.isAddingCartItem,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    fetchProductInfo: (productId) => {
      dispatch(fetchProductInfo(productId));
    },
    addCartItem: (productInfo) => {
      dispatch(addCartItem(productInfo));
    }
  }
}

const ProductInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductInfo);

export default ProductInfoContainer;