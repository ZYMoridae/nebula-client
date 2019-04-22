import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';

import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
import CheckCircle from '@material-ui/icons/CheckCircle';


const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 2
  },
  table: {
    minWidth: 700,
  },
  shoppingItemName: {
    color: '#0066c0',
    transition: 'all 0.15s',
    '&:hover': {
      color: '#ff5000',
      textDecoration: 'underline',
      transition: 'all 0.15s'
    }
  },
  itemAction: {
    marginRight: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    borderRight: 'solid 1px',
    borderColor: 'lightgrey'
  },
  itemActionLink: {
    color: '#0066c0',
    transition: 'all 0.15s',
    '&:hover': {
      color: '#ff5000',
      textDecoration: 'underline',
      transition: 'all 0.15s'
    }
  },
  checkoutBlock: {
    marginTop: theme.spacing.unit
  },
  checkoutTotalPrice: {
    color: '#B12704',
    marginLeft: theme.spacing.unit
  },
  itemPrice: {
    color: '#B12704'
  },
  formControl: {
    marginTop: theme.spacing.unit,
    maringRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    minWidth: 120,
  },
  cbox: {
    // color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {}
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const stockText = (unitsInStock) => {
  return (
    unitsInStock > 0 ? <a style={{ color: 'green' }}>
      In Stock
    </a> : <a style={{ color: 'red' }}>
        Out of Stock
    </a>
  )
}

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      itemCheckedState: [],
      itemQuantity: [],
      labelWidth: 0
    };
  }

  componentWillMount() {
    const { fetchShoppingCartInfo } = this.props;
    fetchShoppingCartInfo();
    this.setState({
      labelWidth: 70,
    });
  }

  render() {
    const { info, classes, proceedShoppingCart} = this.props;
    
    let _itemCheckedState = [];
    info.forEach(row => {
      _itemCheckedState.push(false);
    });

    // this.setState({ itemCheckedState: _itemCheckedState })

    const handleChange = index => event => {
      let _itemCheckedState = this.state.itemCheckedState;
      _itemCheckedState[index] = event.target.checked
      this.setState({ itemCheckedState: _itemCheckedState });
    };

    const handleCheckout =  () => {
      let productForCheckout = [];
      info.forEach((cartItem, index)=>{
        if(this.state.itemCheckedState[index]) {
          let checkoutItem = {
            id: cartItem.id,
            quantity: this.state.itemQuantity[index] == undefined ? cartItem.quantity : this.state.itemQuantity[index]
          };
          productForCheckout.push(checkoutItem);
        }
      });

      // TODO: Checkout action
      console.log(JSON.stringify(productForCheckout));
      localStorage.setItem('_pfc', JSON.stringify(productForCheckout));

      proceedShoppingCart(productForCheckout);
      window.location.href = '/payment';
    };

    const itemQuantityChangeHandler = index => event => {
      let _itemQuantity = this.state.itemQuantity;
      _itemQuantity[index] = event.target.value
      this.setState({ itemQuantity: _itemQuantity });
    };

    const getTotalItemCount = () => {
      return this.state.itemCheckedState.filter(item => item == true).length;
    };
    const getTotalPrice = () => {
      let totalPrice = 0;
      info.forEach((row, index) => {
        if (this.state.itemCheckedState[index]) {
          let quantity = this.state.itemQuantity[index] == undefined ? row.quantity : this.state.itemQuantity[index]
          totalPrice += quantity * row.product.price
        }
      });
      return totalPrice.toFixed(2)
    };

    const getQuantiyArray = (quantity) => {
      let maxQuantity = quantity > 20 ? 20 : quantity;
      return [...Array(maxQuantity).keys()].map(item => ++item);
    };

    return (
      <div className={classes.root}>
        <Grid container >
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>

            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="h5" gutterBottom>
                      Shopping Cart
                    </Typography>
                  </TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {info && info.map((row, index) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      <Typography variant="h6" children={
                        <a className={classes.shoppingItemName}>
                          {row.product.name}
                        </a>
                      } gutterBottom>
                      </Typography>
                      <Typography variant="caption" children={
                        stockText(row.product.unitsInStock)
                      } gutterBottom>
                      </Typography>
                      <div style={{ display: "inline-flex" }}>
                        <Typography className={classes.itemAction} variant="caption" children={
                          <a className={classes.itemActionLink}>
                            Delete
                          </a>
                        } gutterBottom>
                        </Typography>
                        <Typography className={classes.itemAction} variant="caption" children={
                          <a className={classes.itemActionLink}>
                            Save for later
                          </a>
                        } gutterBottom>
                        </Typography>
                      </div>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="h6" gutterBottom className={classes.itemPrice}>
                        ${((this.state.itemQuantity[index] == undefined ? row.quantity : this.state.itemQuantity[index]) * row.product.price).toFixed(2)}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      {/* {row.quantity} */}
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
                          value={this.state.itemQuantity[index] == undefined ? row.quantity : this.state.itemQuantity[index]}
                          onChange={itemQuantityChangeHandler(index)}
                          input={
                            <OutlinedInput
                              labelWidth={this.state.labelWidth}
                              name="quantity"
                              id="outlined-age-simple"
                            />
                          }
                        >
                          {
                            getQuantiyArray(row.product.unitsInStock).map((item, index) =>
                              <MenuItem key={index} value={item}>{item}</MenuItem>
                            )
                          }
                        </Select>
                      </FormControl>

                    </TableCell>
                    <TableCell align="right">
                      <Checkbox
                        checked={this.state.itemCheckedState[index]}
                        onChange={handleChange(index)}
                        value="checkedB"
                        icon={<CheckCircleOutline fontSize="medium"/>}
                        checkedIcon={<CheckCircle fontSize="medium"/>}
                        classes={{
                          root: classes.cbox,
                          checked: classes.checked
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Typography variant="h6" gutterBottom align="right" className={classes.checkoutBlock}>
              Subtotal ({getTotalItemCount()} items):
              <span className={classes.checkoutTotalPrice}>
                ${getTotalPrice()}
              </span>
            </Typography>
            <div style={{textAlign: 'right'}}>
              <Button variant="contained" color="primary" size="large" onClick={handleCheckout}>
                Proceed to Checkout
              </Button>
            </div>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </div>

    );
  }
}

export default withStyles(styles)(ShoppingCart);