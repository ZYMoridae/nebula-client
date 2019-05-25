import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class PaymentOrder extends Component {

  render() {
    const { classes, info } = this.props;

    return (
      <div>
        <Paper className={classes.paymentOrderContainer}>
          <Typography variant="subtitle1">
            Orders
          </Typography>
          <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>
                    Item
                  </TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Sofa</TableCell>
                  <TableCell align="right">$3.5</TableCell>
                  <TableCell align="right">4</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Typography variant="subtitle2" gutterBottom align="right">
              Subtotal 1:
              <span>
                $3.5
              </span>
            </Typography>
        </Paper>
      </div>
    )
  }
}

export default PaymentOrder;