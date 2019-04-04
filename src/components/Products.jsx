import React, { Component } from 'react';
import ProductItem from '../components/ProductItem';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
  Redirect
} from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Pagination from "material-ui-flat-pagination";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
    // width: 200
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  loginContainer: {
    padding: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 12,
    display: 'flex',
    flexWrap: 'wrap',
    width: 350
  },
  loginButton: {
    marginTop: theme.spacing.unit * 2
  },
  productsContainer: {
    marginLeft: theme.spacing.unit * 10,
    marginRight: theme.spacing.unit * 10,
    marginBottom: theme.spacing.unit * 7
  },
  pagination: {
    marginTop: theme.spacing.unit * 5,
    textAlign: 'center'
  },
  prodcutContainer: {
    marginTop: theme.spacing.unit * 2
  }

});

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = { offset: 0 };
  }

  componentDidMount() {
    const {fetchProductsInfo, page, perPage, orderBy} = this.props;
    let currentOffset = (page - 1) * perPage;
    this.handleClick(currentOffset);
    fetchProductsInfo(page, perPage, orderBy);
  }

  updateUrlParmas(page, perPage, orderBy) {
    if (history.pushState) {
        let url = `${window.location.protocol}//${window.location.host}${window.location.pathname}?page=${page}&perPage=${perPage}&orderBy=${orderBy}`;
        window.history.pushState({
          path: url
        }, '', url);
    }
  }

  handleClick(offset) {
    const {perPage, orderBy, fetchProductsInfo} = this.props; 
    let page = (offset / this.props.perPage) + 1;
    this.setState({ offset });
    this.updateUrlParmas(page, perPage, orderBy);
    fetchProductsInfo(page, perPage, orderBy);
  }
  render() {

    const {info, classes, perPage, totalPages, page} = this.props;

    const theme = createMuiTheme({
      typography: {
        useNextVariants: true,
      },
    });
    // console.log(totalPages);

    return (
      <div className={classes.productsContainer}>

              
        <Grid container spacing={32} direction="row" className={classes.prodcutContainer}>       
          <Grid item xs={1} lg={2}></Grid>
          <Grid item xs={10} lg={8}>
            <Grid container spacing={32} direction="row">
            <Grid item xs={12}>
                <Typography variant="h4" gutterBottom>
                  Products
                </Typography>
                <Divider />
              </Grid>
               
              {
                Array.isArray(info) ?
                info.map((product, index) => 
                  <Grid item xs={6} sm={6} lg={4} key={index}>
                    <ProductItem product={product}>

                    </ProductItem>
                  </Grid>
                ) : ''
              }
              <Grid item xs={12} alignContent='center'>
                <div>
                  <MuiThemeProvider theme={theme}>
                    <CssBaseline />
                    <Pagination
                      limit={perPage}
                      offset={this.state.offset}
                      total={totalPages * perPage}
                      onClick={(e, offset) => this.handleClick(offset)}
                    />
                  </MuiThemeProvider>
                </div>
              </Grid>
            </Grid>

          </Grid>
          <Grid item xs={1} lg={2}></Grid>
        </Grid>

      </div>
    )
  }
}


export default withStyles(styles)(Products);