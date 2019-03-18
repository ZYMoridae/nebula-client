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
    marginTop: theme.spacing.unit * 7,
    marginBottom: theme.spacing.unit * 7
  },
  pagination: {
    marginTop: theme.spacing.unit * 5,
    textAlign: 'center'
  },
  productHeader: {
    marginTop: theme.spacing.unit * 5,
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
        <Grid item xs={12} className={classes.productHeader}>
          <Typography variant="h4" gutterBottom>
            Products
          </Typography>
        </Grid>
        <Divider />
        <Grid container spacing={32} direction="row" className={classes.prodcutContainer}>
        {
          Array.isArray(info) ?
          info.map((product, index) => 
            <Grid item xs={4} key={index}>
              <ProductItem product={product}>

              </ProductItem>
            </Grid>
          ) : ''
        }
        </Grid>
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
      </div>
    )
  }
}


export default withStyles(styles)(Products);