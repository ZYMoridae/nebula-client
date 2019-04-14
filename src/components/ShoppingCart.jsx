import React, { Component } from 'react';
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

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3
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
  }
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
  console.log(unitsInStock);
  return (
    unitsInStock > 0 ? <a style={{ color: 'green' }}>
      In Stock
    </a> : <a style={{ color: 'red' }}>
        Out of Stock
    </a>
  )
}

class ShoppingCart extends Component {
  componentDidMount() {
    const { fetchShoppingCartInfo } = this.props;
    fetchShoppingCartInfo();
  }

  render() {
    const { info, classes } = this.props;

    console.log(info);

    return (
      <div className={classes.root}>
        <Grid container >
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            {/* <Paper className={classes.root}> */}
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
                </TableRow>
              </TableHead>
              <TableBody>
                {info.map((row, index) => (
                  <TableRow key={row.id}>
                    {/* <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell> */}
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
                      <Typography variant="h6" gutterBottom style={{color: '#B12704'}}>
                        ${row.quantity * row.product.price}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">{row.quantity}</TableCell>
                    {/* <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {/* </Paper> */}
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </div>

    );
  }
}

export default withStyles(styles)(ShoppingCart);