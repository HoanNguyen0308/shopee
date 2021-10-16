import React from "react";
import { withStyles } from '@material-ui/core/styles';
import styles from "./styles.js";

const Header = (props) => {
    const { classes } = props;
    
    return (
        <div className={classes.header}>
            <div className={`${classes.headerContent} ${classes.wide}`}>
                <div className={classes.headerLeft}>
                  <img src={`${process.env.PUBLIC_URL}/img/LogoShoppe.svg`} alt="123"/>
                  <div className={classes.headerLeftHeading}>Đăng nhập</div>
                </div>
                <div className={classes.headerRight}>Cần trợ giúp?</div>
            </div>
         </div>
    )
}

export default withStyles(styles)(Header);
  