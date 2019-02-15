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
  }
});

class Products extends Component {
  componentDidMount() {
    const {fetchProductsInfo} = this.props;
    fetchProductsInfo();
  }
  
  render() {
    const {info, classes} = this.props;
    console.log(info);

    return (
      <div className={classes.productsContainer}>
        <Grid container spacing={32} direction="row">
        {
          Array.isArray(info) ?
          info.map((product, index) => 
            <Grid item xs={4} key={index}>
              <ProductItem>

              </ProductItem>
            </Grid>
          ) : ''
        }
        </Grid>
      </div>
    )
  }
}


export default withStyles(styles)(Products);