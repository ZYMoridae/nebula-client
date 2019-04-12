import { connect } from 'react-redux';
import { 
  fetchProductInfo,
  addCartItem,
  hideSuccessToast
} from '../actions/ProductInfoActions';
import ProductInfo from '../components/ProductInfo';

const mapStateToProps = state => {
  return {
    info: state.ProductInfoReducer.info,
    isFetchingProductInfo: state.ProductInfoReducer.isFetchingProductInfo,
    isFetchedProductInfo: state.ProductInfoReducer.isFetchedProductInfo,
    isAddedCartItem: state.ProductInfoReducer.isAddedCartItem,
    isAddingCartItem: state.ProductInfoReducer.isAddingCartItem,
    isShowSuccessToast: state.ProductInfoReducer.isShowSuccessToast
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
    },
    hideSuccessToast: () => {
      dispatch(hideSuccessToast());
    }
  }
}

const ProductInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductInfo);

export default ProductInfoContainer;