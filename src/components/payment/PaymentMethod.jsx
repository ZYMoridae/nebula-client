import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import {isMobile} from 'react-device-detect';

class PaymentMethod extends Component {

  render() {
    const { classes, info } = this.props;

    return (
      <div>
        <Paper className={classes.paymentOrderContainer}>
          <Typography variant="subtitle1">
            Payment Method
          </Typography>

          <Grid container spacing={32} className={classes.paymentMethodContainer}>
            <Grid item xs={12} md={6} className={classes.gridItem + ' ' + isMobile ? classes.ccBlockMobile : ''}>
              <Cards
                number={'5432543254325432'}
                name={'Joe'}
                expiry={'123'}
                cvc={'123'}
                focused={'true'}
              />
            </Grid>

            <Grid item xs={12} md={6} className={classes.gridItem}>
              <Grid container spacing={32} className={classes.paymentMethodInputContainer}>
                <Grid item xs={12} md={6} className={classes.gridItem}>
                  <TextField
                    id="outlined-name"
                    label="Card Number"
                    name="cardnumber"
                    className={classes.textField}
                    margin="normal"
                    // variant="outlined"
                    fullWidth={true}
                  // onChange={(e) => { this.onChange(e) }}
                  />

                </Grid>

                <Grid item xs={12} md={6} className={classes.gridItem}>
                  <TextField
                    id="outlined-name"
                    label="Name"
                    name="cardname"
                    className={classes.textField}
                    margin="normal"
                    // variant="outlined"
                    fullWidth={true}
                  // onChange={(e) => { this.onChange(e) }}
                  />

                </Grid>

                <Grid item xs={12} md={9} className={classes.gridItem}>
                  <TextField
                    id="outlined-name"
                    label="Expired Date"
                    name="expire"
                    className={classes.textField}
                    margin="normal"
                    // variant="outlined"
                    fullWidth={true}
                  // onChange={(e) => { this.onChange(e) }}
                  />

                </Grid>

                <Grid item xs={12} md={3} className={classes.gridItem}>
                  <TextField
                    id="outlined-name"
                    label="CVV"
                    name="cvv"
                    className={classes.textField}
                    margin="normal"
                    // variant="outlined"
                    fullWidth={true}
                  // onChange={(e) => { this.onChange(e) }}
                  />

                </Grid>
              </Grid>
            </Grid>
          </Grid>


        </Paper>
      </div>
    )
  }
}

export default PaymentMethod;