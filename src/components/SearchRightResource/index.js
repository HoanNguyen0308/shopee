import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles.js';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const SearchLeftResource = (props) => {
    const { classes } = props;

    return (
        <div className={classes.content_navbar}>
            <span className={classes.navbar_label}>Sắp xếp theo</span>
            <div className={classes.navbar_options}>
                <div className={`${classes.options_item} ${classes.options_active}`}>Liên Quan</div>
                <div className={classes.options_item}>Mới Nhất</div>
                <div className={classes.options_item}>Bán Chạy</div>
                <div className={classes.options_price}>
                    <span className={classes.price_placeholder}>Giá</span>
                    <ExpandMoreIcon className={classes.price_icon}/>
                    <div className={classes.price_select}>
                        <div className={classes.price_select__item}>Giá: Thấp đến Cao</div>
                        <div className={classes.price_select__item}>Giá: Cao đến Thấp</div>
                    </div>
                </div>
            </div>
            <div className={classes.navbar_controls}>
                <div className={classes.controls_state}>
                    <span className={classes.controls_state__current}>1</span>
                    /
                    <span className={classes.controls_state__total}>9</span>
                </div>
                <button className={`${classes.control_prev} ${classes.control_btn}`}>
                    <ChevronLeftIcon className={classes.prev_icon} />
                </button>
                <button className={`${classes.control_next} ${classes.control_btn}`}>
                    <ChevronRightIcon className={classes.next_icon} />
                </button>
            </div>
        </div>
    );
};

export default withStyles(styles)(SearchLeftResource);