import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
import Image from 'material-ui-image';
import _ from 'lodash';

import ShoppingCart from '@material-ui/icons/ShoppingCart';
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline';

import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const styles = theme => ({
  container: {
    padding: theme.spacing.unit * 5
  },
  priceCaption: {
    color: '#B12704',
    marginLeft: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  button: {
    backgroundColor: '#f9cd66',
    transition: 'all 0.3s',
    marginTop: theme.spacing.unit,
    maringRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    '&:hover': {
      backgroundColor: '#f2b21d',
      transition: 'all 0.3s'
    }
  },
  metaContainer: {
    paddingLeft: theme.spacing.unit * 2
  },
  formControl: {
    marginTop: theme.spacing.unit,
    maringRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    minWidth: 120,
  }
});

class ProductInfo extends Component {
  constructor() {
    super();
    this.state = {
      age: '',
      name: 'hai',
      labelWidth: 0,
    };
  }


  componentDidMount() {
    const {fetchProductInfo, productId} = this.props;
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
    fetchProductInfo(productId);
  }

  render() {
    const {classes, info} = this.props;

    console.log(info);

    return (
      <div>
         <Grid container className={classes.container}>
            <Grid item xs={6}>
              <Image imageStyle={{width: '100%', height: 'inherit'}} src="http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png"/>
            </Grid>
            <Grid item xs={6}>
              <div className={classes.metaContainer}>
                <Typography variant="h5" gutterBottom>
                  {_.capitalize(info.name)}
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Price: 
                  <span className={classes.priceCaption}>
                    ${_.capitalize(info.price)}
                  </span>
                </Typography>
                <div>
                  <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel
                      ref={ref => {
                        this.InputLabelRef = ref;
                      }}
                      htmlFor="outlined-age-simple"
                    >
                      Quantity
                    </InputLabel>
                    <Select
                      value={1}
                      input={
                        <OutlinedInput
                          labelWidth={this.state.labelWidth}
                          name="quantity"
                          id="outlined-age-simple"
                        />
                      }
                    >
                      {/* <MenuItem value="">
                        <em>None</em>
                      </MenuItem> */}

                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <Button variant="contained" className={classes.button} fullWidth={true}>
                    <ShoppingCart className={classes.leftIcon} />
                    Add to cart
                  </Button>
                </div>
                <div>
                  <Button variant="contained" className={classes.button} fullWidth={true}>
                    <PlayCircleOutline className={classes.leftIcon} />
                    Buy now
                  </Button>
                </div>
              </div>
            </Grid>
         </Grid>

      </div>
    )
  }
}


export default withStyles(styles)(ProductInfo);