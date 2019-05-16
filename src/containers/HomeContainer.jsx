// Counter.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Fab from '@material-ui/core/Fab';
import HomeIcon from '@material-ui/icons/Home';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  subHeader: {
    fontWeight: 600
  }
});

class HomeContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.root} style={{ padding: 20 }}>
        <Fab
          variant="extended"
          size="medium"
          color="primary"
          aria-label="Add"
          href="/products"
        >
          <HomeIcon />
          Products
        </Fab>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    count: state.counterReducer,
  };
}
export default connect(mapStateToProps)(HomeContainer);