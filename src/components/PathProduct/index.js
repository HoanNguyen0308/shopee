import React from 'react';
import styles from './styles.js'
import { withStyles } from "@material-ui/core";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from "react-router-dom";

const PathProduct = (props) => {
    const { classes } = props;
    return(
        <div>
            <Breadcrumbs className={classes.breadCrumb} separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                <Link to="/">Shopee</Link>
                <span>
                    Điện thoại & Phụ kiện
                </span>
                <span>
                    Phụ kiện
                </span>
                <span>
                    Vỏ bao, Ốp lưng & Miếng dán
                </span>
                <span>
                    Ốp lưng trong suốt nhám chống sốc thời trang 
                    Ốp lưng trong suốt nhám chống sốc thời trang 
                    Ốp lưng trong suốt nhám chống sốc thời trang 
                    Ốp lưng trong suốt nhám chống sốc thời trang 
                </span>
            </Breadcrumbs>
        </div>
    )
}

export default withStyles(styles)(PathProduct)
