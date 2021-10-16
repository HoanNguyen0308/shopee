import React from 'react';
import styles from './styles.js'
import { withStyles } from "@material-ui/core";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const ProductDetail = (props) => {
    const { classes } = props;

    return (
        <div className={classes.pagination}>
            <button className={classes.pagination_side}>
                <ChevronLeftIcon className={classes.pagination_side__icon}/>
            </button>
            <button className={`${classes.pagination_page} ${classes.pagination_page__active}`}>1</button>
            <button className={classes.pagination_page}>2</button>
            <button className={classes.pagination_page}>3</button>
            <button className={classes.pagination_page}>4</button>
            <button className={classes.pagination_page}>5</button>
            <button className={classes.pagination_page}>...</button>
            <button className={classes.pagination_side}>
                <ChevronRightIcon className={classes.pagination_side__icon}/>
            </button>
        </div>
                                
    );
};

export default withStyles(styles)(ProductDetail)
