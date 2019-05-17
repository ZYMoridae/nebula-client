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
  articleMetaContainer: {
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
    color: '#ff5000'
  },
  blockContainer: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3
  },
  productsHero: {
    width: '100%',
    borderBottom: '1px solid #d3d3d3'
  }
});

const content = [{
  title: "Promotion1",
  description: "this is promotion 1",
  image: "https://i.imgur.com/ZXBtVw7.jpg"
}, {
  title: "Promotion2",
  description: "this is promotion 2",
  image: "https://i.imgur.com/DvmN8Hx.jpg"
}, {
  title: "Promotion3",
  description: "this is promotion 3",
  image: "https://i.imgur.com/DvmN8Hx.jpg"
}]

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={styles.root}>
        <Grid container spacing={0}>
          <Grid item xs={1} md={2} xl={3}>

          </Grid>
          <Grid item xs={10} md={8} xl={6}>
            <Slider autoplay={3000} previousButton={<ChevronLeft fontSize='large' className={classes.nav}/>} nextButton={<ChevronRight fontSize='large' className={classes.nav}/>}>
              {content.map((article, index) => 
                <div key={index} style={{ background: `url('${article.image}') no-repeat center center` }}>
                  <div className={classes.articleMetaContainer}>
                    <Typography variant="h3" gutterBottom className={classes.title}>
                      {article.title}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                      {article.description}
                    </Typography>
                  </div>
                </div>
              )}
            </Slider>
          
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
                <a href="/products" style={{textDecoration: 'none'}}>
                  <Typography variant="h6" gutterBottom className={classes.nav}>
                    Featured Products
                  </Typography>
                </a>
              </div>
            </div>
          </Grid>
          <Grid item xs={1} md={2} xl={3}>

          </Grid>
        </Grid>




      </div>
    )
  }
}

export default withStyles(styles)(Home);