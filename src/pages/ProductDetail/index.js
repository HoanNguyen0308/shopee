import React, {Fragment} from 'react';
import styles from './styles.js'
import { withStyles } from "@material-ui/core";
import Container from '@mui/material/Container';

import Header from '../../partials/shopee/Header'
import Footer from '../../partials/shopee/Footer'
import ProductDetailMain from '../../components/ProductDetailMain';
import PathProduct from '../../components/PathProduct';

const ProductDetail = (props) => {
    const { classes } = props;
    return(
        <Fragment>
            <Header position="static" />
            <div className={classes.productDetail}>
                <Container style={{padding:0}}>
                    <PathProduct />
                    <ProductDetailMain />
                </Container>
            </div>
            <Footer />
        </Fragment>
    )
}

export default withStyles(styles)(ProductDetail)
