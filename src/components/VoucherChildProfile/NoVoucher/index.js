import React from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles.js";

const NoVoucher = (props) => {
    const { classes } = props;
    
    return (
        <div className={classes.no_voucher}>
            <div className={classes.no_voucher__up}>
                <img className={classes.no_voucher__img} src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/0e8c07c8449d8d509f72f5576f79a983.png" alt="no-voucher"/>
                <div className={classes.no_voucher__title}>Không có voucher phù hợp</div>
                <div className={classes.no_voucher__description}>Tìm thêm voucher để lưu vào đây nhá!</div>
                <button className={classes.no_voucher__button}>Tìm thêm voucher</button>
            </div>
        </div>
    )
};

export default withStyles(styles)(NoVoucher);