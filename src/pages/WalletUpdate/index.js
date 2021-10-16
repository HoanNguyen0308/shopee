import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.js";
import Header from "../../partials/shopee/Header";
import NavBarProfile from "../../components/NavBarProfile";
import Footer from "../../partials/auth/Footer";

const WalletUpdate = (props) => {
    const { classes } = props;

    return (
        <div className={classes.order_update}>
            <Header />

            <div className={classes.container}>
                <div className={classes.wide}>
                    <NavBarProfile />
                    
                    <div className={classes.content}>
                        <div className={classes.body}>
                            <img className={classes.body_img} src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/fa4e2b534c2928596a6deded9c730a21.png" alt="wallet-update"/>
                            <p className={classes.body_text}>Chưa có thông tin mới</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default withStyles(styles)(WalletUpdate);