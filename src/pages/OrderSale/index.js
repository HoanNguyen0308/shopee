import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.js";
import Header from "../../partials/shopee/Header";
import NavBarProfile from "../../components/NavBarProfile";
import Footer from "../../partials/auth/Footer";
import { NavLink } from "react-router-dom";

const OrderSale = (props) => {
    const { classes } = props;
    const sales = [
        {id: 1, img: "https://cf.shopee.vn/file/6eae123de441685803e200a4b4d4ec0e_tn"},
        {id: 2, img: "https://cf.shopee.vn/file/7b2d120911fbd295dccd6cf986236b85_tn"},
        {id: 3, img: "https://cf.shopee.vn/file/b7a7d1647f72375d83668ef4bfe92ea0_tn"},
        {id: 4, img: "https://cf.shopee.vn/file/921d3c31841788ad7d2028eb9d090d7e_tn"},
        {id: 5, img: "https://cf.shopee.vn/file/afd61876eccbba55e5fd44dc5e361ac2_tn"},
    ];

    return (
        <div className={classes.order_update}>
            <Header />

            <div className={classes.container}>
                <div className={classes.wide}>
                    <NavBarProfile />
                    
                    <div className={classes.content}>
                        <div className={classes.header}>
                            <p className={classes.header_right}>Đánh dấu đã đọc tất cả</p>
                        </div>

                        <div className={classes.sales}>
                            {sales.map(sale => {
                                return (
                                    <NavLink to="/order-sale" className={classes.sale}>
                                        <div className={classes.sale_left}>
                                            <div className={classes.left_img__wrap}>
                                                <div className={classes.left_img} style={{backgroundImage: `url(${sale.img})`}}></div>
                                            </div>
                                        </div>
                                        <div className={classes.sale_center}>
                                            <h1 className={classes.center_heading}>Dành riêng bạn mới ưu đãi Freeship 0Đ</h1>
                                            <div className={classes.center_description}>💃 Thời Trang thứ 6 sale sốc ☄️ Nhập FAFRISEP giảm đến 20K ✨ Nhập FAFRINW9 giảm đến 30K 🎯 Quẹo lựa - Chốt đơn!</div>
                                            <div className={classes.center_time}>12:10 17-09-2021</div>
                                        </div>
                                        <div className={classes.sale_right}>
                                            <button className={classes.right_button}>Xem chi tiết</button>
                                        </div>
                                    </NavLink>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default withStyles(styles)(OrderSale);