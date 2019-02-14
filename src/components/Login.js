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

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
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
  loginPaddings: {
    padding: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit * 3
  }
});

class Login extends Component {
  componentDidMount() {
    const {info} = this.props;
    var username = 'joe999';
    var password = '99999999'
    this.props.dispatch(fetchAuthInfo({
      headers: {
        Authorization: `Basic ${btoa(`${username}:${password}`)}`
      }
    }));
  }

  render() {
    const {classes} = this.props;
    return (
      <div className="Post">
        <div className={classes.root}>
          <Grid container spacing={24} alignItems="center" justify="center" direction="column">
            <Grid item xs={12}>
              <Paper className={classes.loginPaddings}>
                <TextField
                  id="outlined-name"
                  label="Name"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}


export default withStyles(styles)(Login);