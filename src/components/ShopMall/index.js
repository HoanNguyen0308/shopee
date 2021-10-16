import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.js";
import { NavLink } from 'react-router-dom';
import Slider from "react-slick";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const products = [
    {id: 1, img_one: "https://cf.shopee.vn/file/a0f36fbea78fbce052c9b7a118f5ff5a_xhdpi", img_two: "https://cf.shopee.vn/file/ad70ba5e178a7e05ed8a6daa1c5781d9_xhdpi", title: "Siêu sale tháng 9"},
    {id: 2, img_one: "https://cf.shopee.vn/file/7d5ddd21cc10e484de60e12d6c58734e_xhdpi", img_two:"https://cf.shopee.vn/file/d0330b5ba47d3728e2295f120e5f2be1_xhdpi", title: "Siêu sale tháng 9"},
    {id: 3, img_one: "https://cf.shopee.vn/file/e41adc7741d9abb45876ff2b838cc99b_xhdpi", img_two: "https://cf.shopee.vn/file/27aca02931d04b5f0317260d76c27584_xhdpi", title: "Siêu sale tháng 9"},
    {id: 4, img_one: "https://cf.shopee.vn/file/cd87b35a9bc32ddf59024a8339aef4a6_xhdpi", img_two: "https://cf.shopee.vn/file/93255b05c68d1024a8e4dab100efdcbd_xhdpi", title: "Siêu sale tháng 9"},
    {id: 5, img_one: "https://cf.shopee.vn/file/180d8e6ede3b57ed4f7aa94e760a8db5_xhdpi", img_two: "https://cf.shopee.vn/file/4d0bf9ed24575986f507f516309d0427_xhdpi", title: "Siêu sale tháng 9"},
    {id: 6, img_one: "https://cf.shopee.vn/file/6b1825bee369e8a39fbc2172c9aead32_xhdpi", img_two: "https://cf.shopee.vn/file/ea507ee06252bb4c0d90eed99c1db288_xhdpi", title: "Siêu sale tháng 9"},
    {id: 7, img_one: "https://cf.shopee.vn/file/6b1825bee369e8a39fbc2172c9aead32_xhdpi", img_two: "https://cf.shopee.vn/file/ea507ee06252bb4c0d90eed99c1db288_xhdpi", title: "Siêu sale tháng 9"},
];

const ShopMall = (props) => {
    const { classes } = props;

    const settingsLeft = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const settingsRight = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 4,
    };
    
    return (
        <div className={classes.container}>
            <div className={classes.shop_mall}>
                <div className={classes.header}>
                    <div className={classes.header_title}>
                        <NavLink to="/shop-mall" className={classes.title_link}>SHOPEE MALL</NavLink>
                        <div className={classes.title_services}>
                            <div className={classes.services_block}>
                                <div className={`${classes.services_sale} ${classes.services_wrap}`}></div>
                                7 Ngày Miễn Phí Trả Hàng
                            </div>
                            <div className={classes.services_block}>
                                <div className={`${classes.services_quantity} ${classes.services_wrap}`}></div>
                                Hàng Chính Hãng 100%
                            </div>
                            <div className={classes.services_block}>
                                <div className={`${classes.services_ship} ${classes.services_wrap}`}></div>
                                Miễn Phí Vận Chuyển
                            </div>
                        </div>
                    </div>
                    <div className={classes.header_view}>
                        <NavLink to="/view-all" className={classes.view_link}>
                            Xem Tất Cả
                            <div className={classes.view_icon__wrap}>
                                <ChevronRightIcon className={classes.view_icon} />
                            </div>
                        </NavLink>
                    </div>
                </div>

                <div className={classes.content}>
                    <div className={classes.content_left}>
                        <NavLink to="/event" className={classes.left_link}>
                            <Slider {...settingsLeft}>
                                <img className={classes.left_img} src="https://cf.shopee.vn/file/bdadef524ee44855c264d78207d152c5" alt="event" />
                                <img className={classes.left_img} src="https://cf.shopee.vn/file/0bc9ebf5b31598257cc95b18fecaa019" alt="event" />
                                <img className={classes.left_img} src="https://cf.shopee.vn/file/530b10675217828b2cc7307814896c01" alt="event" />
                                <img className={classes.left_img} src="https://cf.shopee.vn/file/5358e2f723dc9b07d50fc400743ef676" alt="event" />

                            </Slider>
                        </NavLink>
                    </div>
                    <div className={classes.content_right}>
                        <Slider {...settingsRight}>
                            {products.map((product) => {
                                return (
                                    <div className={classes.product_double} key={product.id}>
                                        <div className={classes.product}>
                                            <NavLink to="/product" className={classes.product_link}>
                                                <img className={classes.content_img} src={product.img_one} alt="shop-mall"></img>
                                                <div className={classes.content_text}>{product.title}</div>
                                            </NavLink>
                                        </div>
                                        <div className={classes.product}>
                                            <NavLink to="/product" className={classes.product_link}>
                                                <img className={classes.content_img} src={product.img_two} alt="shop-mall"></img>
                                                <div className={classes.content_text}>{product.title}</div>
                                            </NavLink>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withStyles(styles)(ShopMall);
