import React from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles.js";
import Header from "../../partials/shopee/Header";
import NavBarProfile from "../../components/NavBarProfile";
import PurchaseOrder from "../../components/PurchaseOrder";
import Footer from "../../partials/auth/Footer";

const PurchaseOrderProfile = (props) => {
    const { classes } = props;

    return (
        <div className={classes.profile}>
            <Header />
            <div className={classes.container}>
                <div className={classes.wide}>
                    <NavBarProfile />  
                    <div className={classes.content}>
                        <PurchaseOrder />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default withStyles(styles)(PurchaseOrderProfile);