import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

class PaymentAddressForm extends Component {

  render() {
    const { classes, info } = this.props;

    return (
      <div>
        <Paper className={classes.paymentOrderContainer}>
          <Typography variant="subtitle1">
            Address
          </Typography>
          <Grid container spacing={40} className={classes.gridContainer}>
            <Grid item xs={12} md={6} className={classes.gridItem}>
              <TextField
                id="outlined-name"
                label="First Name"
                name="firstname"
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
                label="Last Name"
                name="lastname"
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
                label="Email"
                name="email"
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
                label="Phone"
                name="phone"
                className={classes.textField}
                margin="normal"
                // variant="outlined"
                fullWidth={true}
              // onChange={(e) => { this.onChange(e) }}
              />
            </Grid>

            <Grid item xs={12} md={12} className={classes.gridItem}>
              <TextField
                id="outlined-name"
                label="Postcode"
                name="postcode"
                className={classes.textField}
                margin="normal"
                // variant="outlined"
                fullWidth={true}
              // onChange={(e) => { this.onChange(e) }}
              />
            </Grid>

            <Grid item xs={12} md={12} className={classes.gridItem}>
              <TextField
                id="outlined-name"
                label="Address1"
                name="address1"
                className={classes.textField}
                margin="normal"
                // variant="outlined"
                fullWidth={true}
              // onChange={(e) => { this.onChange(e) }}
              />
            </Grid>

            <Grid item xs={12} md={12} className={classes.gridItem}>
              <TextField
                id="outlined-name"
                label="Address2"
                name="address2"
                className={classes.textField}
                margin="normal"
                // variant="outlined"
                fullWidth={true}
              // onChange={(e) => { this.onChange(e) }}
              />
            </Grid>

          </Grid>



        </Paper>
      </div>
    )
  }
}

export default PaymentAddressForm;