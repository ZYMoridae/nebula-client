import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class PaymentOrder extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.paymentOrderContainer}>
          <Typography variant="subtitle1">
            Orders
          </Typography>
        </Paper>
      </div>
    )
  }
}

export default PaymentOrder;