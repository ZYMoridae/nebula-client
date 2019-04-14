import React, { Component } from 'react';
import {
  fetchAuthInfo
} from '../actions';
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
} from 'react-router-dom'
import Snackbar from '@material-ui/core/Snackbar';
import MySnackbarContent from './MySnackbarContent';

import Fade from '@material-ui/core/Fade';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
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
  }
});

class Login extends Component {
  componentDidMount() {
    // const {info} = this.props;
    this.state = {
      username: '',
      password: ''
    }

    this.onChange = (event) => {
      const { target: { name, value } } = event;
      this.setState(() => ({ [name]: value }));
    }

    this.handleSubmit = (event) => {
      event.preventDefault();
      this.props.dispatch(fetchAuthInfo({
        headers: {
          Authorization: `Basic ${btoa(`${this.state.username}:${this.state.password}`)}`
        }
      }));
    }

  }

  render() {
    const { isFetchedAuth, classes, info, hideLoginError, isShowLoginError } = this.props;

    if (sessionStorage.getItem('token') != null && sessionStorage.getItem('token') != 'undefined') {
      location.href = '/';
    }

    if (isFetchedAuth && this.props.info.token != undefined) {
      sessionStorage.setItem('token', this.props.info.token);
      location.href = '/';
    }

    return (

      <div className="Post">
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={isShowLoginError}
          autoHideDuration={1500}
          onClose={hideLoginError}
        >
          <MySnackbarContent
            onClose={hideLoginError}
            variant="error"
            message="Login Failed!"
          />
        </Snackbar>

        <Fade in={true} timeout={1200}>
          <form className={classes.root} autoComplete="off" onSubmit={this.handleSubmit}>

            <Grid container alignItems="center" justify="center" direction="row">
              <Paper className={classes.loginContainer}>
                <Grid item xs={12}>
                  <Typography variant="h5" gutterBottom>
                    Sign In
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-name"
                    label="Name"
                    name="username"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    fullWidth={true}
                    onChange={(e) => { this.onChange(e) }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-password"
                    label="Password"
                    name="password"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    type="password"
                    fullWidth={true}
                    onChange={(e) => { this.onChange(e) }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" size="large" fullWidth={true} className={classes.loginButton} type="submit">
                    Login
                  </Button>
                </Grid>
              </Paper>
            </Grid>

          </form>
        </Fade>

      </div>
    )
  }
}


export default withStyles(styles)(Login);