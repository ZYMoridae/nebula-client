import { connect } from 'react-redux';
import { 
  fetchProductsInfo
} from '../actions';
import Products from '../components/Products';

const mapStateToProps = state => {
  return {
    info: state.ProductsReducer.info,
    isFetchingProducts: state.ProductsReducer.isFetchingProducts,
    isFetchedProducts: state.ProductsReducer.isFetchedProducts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    fetchProductsInfo: () => {
      dispatch(fetchProductsInfo());
    }
  }
}

const ProductsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);

export default ProductsContainer;