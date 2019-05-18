import { connect } from 'react-redux';
import Home from '../components/Home';
import {
  fetchHomeBannerInfo
} from '../actions';

const mapStateToProps = state => {
  return {
    info: state.HomeReducer.info,
    isFetchingHomeBanner: state.HomeReducer.isFetchingHomeBanner,
    isFetchedHomeBanner: state.HomeReducer.isFetchedHomeBanner
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    fetchHomeBannerInfo: () => {
      dispatch(fetchHomeBannerInfo());
    }
  }
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;