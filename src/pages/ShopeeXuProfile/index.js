import React from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles.js";
import Header from "../../partials/shopee/Header";
import NavBarProfile from "../../components/NavBarProfile";
import ShopeeXu from "../../components/ShopeeXu";
import Footer from "../../partials/auth/Footer";

const ShopeeXuProfile = (props) => {
    const { classes } = props;

    return (
        <div className={classes.profile}>
            <Header />
            <div className={classes.container}>
                <div className={classes.wide}>
                    <NavBarProfile />
                    <div className={classes.content}>
                        <ShopeeXu />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default withStyles(styles)(ShopeeXuProfile);
