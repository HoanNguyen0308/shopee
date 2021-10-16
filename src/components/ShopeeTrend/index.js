import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.js";
import { NavLink } from "react-router-dom";
import LoopIcon from '@material-ui/icons/Loop';

const products = [
    {id: 1, name: "Sandal Nữ", quantity: "6", img: "https://cf.shopee.vn/file/ce40df60e1033e7bfbe01389fd1773ae"},
    {id: 2, name: "Sơ Mi Nữ", quantity: "20", img: "https://cf.shopee.vn/file/9477f97eb71fab5708e9dfdc2864465e"},
    {id: 3, name: "Dép Nam", quantity: "60", img: "https://cf.shopee.vn/file/eee66edd9328631450d5d5769c4022ef"},
    {id: 4, name: "Balo Nữ", quantity: "90", img: "https://cf.shopee.vn/file/f3a88e27b15ff442a2a2143d8f0ab583"},
    {id: 5, name: "CropTop Nữ", quantity: "10", img: "https://cf.shopee.vn/file/e55aaf45b9b0ba6b8c0c174b1f3e39a6"},
];

const ShopeeTrend = (props) => {
    const { classes } = props;

    return (
        <div className={classes.shopee_trend}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <div className={classes.header_title}>XU HƯỚNG TÌM KIẾM</div>
                    <NavLink to="/view-more" className={classes.header_link}>
                        <LoopIcon className={classes.header_icon} />
                        <span className={classes.header_text}>Xem Thêm</span>
                    </NavLink>
                </div>
                <div className={classes.content}>
                    {products.map(product => {
                        return (
                            <div className={classes.product} key={product.id}>
                                <NavLink to="/product-trend" className={classes.product_link}>
                                    <div className={classes.product_view}>
                                        <div className={classes.product_name}>{product.name}</div>
                                        <div className={classes.product_quantity}>{product.quantity}k+ sản phẩm</div>
                                    </div>
                                    <img className={classes.product_img} src={product.img} alt="product"/>
                                </NavLink>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

export default withStyles(styles)(ShopeeTrend);
