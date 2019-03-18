import { connect } from 'react-redux';
import { 
  fetchProductInfo
} from '../actions';
import ProductInfo from '../components/ProductInfo';

const mapStateToProps = state => {
  return {
    info: state.ProductInfoReducer.info,
    isFetchingProductInfo: state.ProductInfoReducer.isFetchingProductInfo,
    isFetchedProductInfo: state.ProductInfoReducer.isFetchedProductInfo,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    fetchProductInfo: (productId) => {
      dispatch(fetchProductInfo(productId));
    }
  }
}

const ProductInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductInfo);

export default ProductInfoContainer;