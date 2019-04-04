import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from 'material-ui-image';
import _ from 'lodash';

import ShoppingCart from '@material-ui/icons/ShoppingCart';
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  container: {
    paddingTop: theme.spacing.unit * 5
  },
  priceCaption: {
    color: '#B12704',
    marginLeft: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  button: {
    backgroundColor: '#f9cd66',
    transition: 'all 0.3s',
    marginTop: theme.spacing.unit,
    maringRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    '&:hover': {
      backgroundColor: '#f2b21d',
      transition: 'all 0.3s'
    }
  },
  metaContainer: {
    paddingLeft: theme.spacing.unit * 2
  },
  formControl: {
    marginTop: theme.spacing.unit,
    maringRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    minWidth: 120,
  },
  table: {
    // minWidth: 700
  },
  divider: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit
  }
});

class ProductInfo extends Component {
  constructor() {
    super();
    this.state = {
      age: '',
      name: 'hai',
      labelWidth: 0,
    };
  }


  componentDidMount() {
    const {fetchProductInfo, productId} = this.props;
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
    fetchProductInfo(productId);
  }

  
  render() {
    const {classes, info, addCartItem} = this.props;

    console.log(info.productMeta);

    let maxQuantity = 20;

    if(info.unitsInStock != undefined && info.unitsInStock > 0 && info.unitsInStock < 20) {
      maxQuantity = info.unitsInStock;
    }

    const addCartButtonClickHandler = () => {
      addCartItem({
        "userId": 5,
        "productId": 28,
        "quantity": 1
      });
    }

    const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ]

    let quantityArray = [...Array(maxQuantity).keys()].map(item => ++item);
    
    return (
      <div>
         <Grid container className={classes.container}>
            <Grid item xs={2}>

            </Grid>

            <Grid item xs={8}>
              <Grid container>
                <Grid item xs={6}>
                  {/* <Image imageStyle={{width: '100%', height: 'auto'}} src="http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png"/> */}
                  <ImageGallery items={images} showNav={false} showPlayButton={false} autoPlay={true} lazyLoad={true} useBrowserFullscreen={false}/>
                </Grid>
                <Grid item xs={6}>
                  <div className={classes.metaContainer}>
                    <Typography variant="h5" gutterBottom>
                      {_.capitalize(info.name)}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      Price: 
                      <span className={classes.priceCaption}>
                        ${_.capitalize(info.price)}
                      </span>
                    </Typography>
                    <div>
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
                          value={1}
                          input={
                            <OutlinedInput
                              labelWidth={this.state.labelWidth}
                              name="quantity"
                              id="outlined-age-simple"
                            />
                          }
                        >
                        {
                          quantityArray.map((item, index) => 
                            <MenuItem key={index} value={item}>{item}</MenuItem>
                          )
                        }
                        </Select>
                      </FormControl>
                    </div>
                    <div>
                      <Button variant="contained" className={classes.button} fullWidth={true} onClick={() => {addCartButtonClickHandler()}}>
                        <ShoppingCart className={classes.leftIcon} />
                        Add to cart
                      </Button>
                    </div>
                    <div>
                      <Button variant="contained" className={classes.button} fullWidth={true}>
                        <PlayCircleOutline className={classes.leftIcon} />
                        Buy now
                      </Button>
                    </div>
                  </div>
                </Grid>
              </Grid>
              <Divider className={classes.divider}/>
              <Grid item xs={6}>
                <Typography variant="h6" gutterBottom>
                  Product Information
                </Typography>
                <Paper>
                  <Table className={classes.table}>
                    <TableBody>
                      {info.productMeta && info.productMeta.map((meta, index) => (
                        <TableRow key={index}>
                          <TableCell component="th" scope="row" className={classes.tableKey}>
                            {meta.key}
                          </TableCell>
                          <TableCell align="right">{meta.value}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Paper>
              </Grid>
              <Divider className={classes.divider}/>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Customer Reviews
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={2}>

            </Grid>
         </Grid>
      </div>
    )
  }
}


export default withStyles(styles)(ProductInfo);