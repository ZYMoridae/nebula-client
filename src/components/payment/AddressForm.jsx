import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class PaymentAddressForm extends Component {

  render() {
    const { classes, info } = this.props;

    return (
      <div>
        <Paper className={classes.paymentOrderContainer}>
          <Typography variant="subtitle1">
            Address
          </Typography>
        </Paper>
      </div>
    )
  }
}

export default PaymentAddressForm;