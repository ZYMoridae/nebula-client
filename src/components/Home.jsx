import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import HomeIcon from '@material-ui/icons/Home';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';

import FeaturedProduct from '../components/home/FeaturedProduct';
import TodayDealsProduct from '../components/home/TodayDealsProduct';
import RecommendProduct from '../components/home/RecommendProduct';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  subHeader: {
    fontWeight: 600
  },
  promotionMetaContainer: {
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  title: {
    color: '#3d3d3d'
  },
  nav: {
    color: '#3d3d3d'
  },
  blockContainer: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3
  },
  productsHero: {
    width: '100%',
    borderBottom: '1px solid #d3d3d3'
  },
  fetchedProductsContainer: {
    marginBottom: theme.spacing.unit * 3
  }
});


const BlockComponent = (props) => {
  const { classes, isFetchedProducts, items, title } = props;

  const TagName = props.tag;

  return (
    <div>
      <div className={classes.blockContainer}>
        {/* <Fab
                  variant="extended"
                  size="medium"
                  color="primary"
                  aria-label="Add"
                  href="/products"
                >
                  <HomeIcon />
                  Products
                </Fab> */}
        <div className={classes.productsHero}>
          <a href="/products" style={{ textDecoration: 'none' }}>
            <Typography variant="h6" gutterBottom className={classes.nav}>
              {title}
                    </Typography>
          </a>
        </div>
      </div>

      <Grid container spacing={40} className={classes.fetchedProductsContainer}>
        {
          isFetchedProducts && Array.isArray(items) ?
            items.map((product, index) =>
              <Grid item xs={12} sm={6} lg={4} key={index}>
                <TagName product={product} />
              </Grid>

            ) : ''
        }
      </Grid>
    </div>
  )
}


class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchHomeBannerInfo, fetchFeaturedProducts } = this.props;
    fetchHomeBannerInfo();
    fetchFeaturedProducts(1, 3);
  }

  render() {
    const { classes, info, featuredProducts, isFetchedProducts } = this.props;

    return (
      <div className={styles.root}>
        <Fade in={true} timeout={1000}>
          <Grid container spacing={0}>
            <Grid item xs={1} md={2} xl={3}>

            </Grid>
            <Grid item xs={10} md={8} xl={6}>
              <Slider autoplay={3000} previousButton={<ChevronLeft fontSize='large' className={classes.nav} />} nextButton={<ChevronRight fontSize='large' className={classes.nav} />}>
                {info.map((promotion, index) =>
                  <div key={index} style={{ background: `url('${promotion.imageUrl}') no-repeat center center` }}>
                    <div className={classes.promotionMetaContainer}>
                      <Typography variant="h3" gutterBottom className={classes.title}>
                        {promotion.title}
                      </Typography>
                      <Typography variant="subtitle2" gutterBottom>
                        {promotion.description}
                      </Typography>
                    </div>
                  </div>
                )}
              </Slider>


              <BlockComponent classes={classes} title={'Featured Products'} isFetchedProducts={isFetchedProducts} items={featuredProducts} tag={FeaturedProduct}></BlockComponent>
              
              <BlockComponent classes={classes} title={'Today\'s Deals'} isFetchedProducts={isFetchedProducts} items={featuredProducts} tag={TodayDealsProduct}></BlockComponent>

              <BlockComponent classes={classes} title={'Recommend For You'} isFetchedProducts={isFetchedProducts} items={featuredProducts} tag={RecommendProduct}></BlockComponent>


            </Grid>


            <Grid item xs={1} md={2} xl={3}>

            </Grid>
          </Grid>
        </Fade>




      </div>
    )
  }
}

export default withStyles(styles)(Home);