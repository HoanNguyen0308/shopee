import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.js";
import { NavLink } from "react-router-dom";
import NextIcon from "../../assets/svg/NextIcon";
import Slider from "react-slick";

const products = [
    {id: 1, img: "https://cf.shopee.vn/file/cd1bef12c022772f77b60a98c983b433_tn", price: "499.000", sold: "2", percent: "56"},
    {id: 2, img: "https://cf.shopee.vn/file/19f677f4cf93b7c7002926abc3b8b5c8_tn", price: "199.000", sold: "10", percent: "40"},
    {id: 3, img: "https://cf.shopee.vn/file/ecccfa2d46f83ecc2b2a90514f1439a4_tn", price: "199.000", sold: "10", percent: "40"},
    {id: 4, img: "https://cf.shopee.vn/file/d19529d2a133e7f87c39fde9d30daa2c_tn", price: "199.000", sold: "10", percent: "40"},
    {id: 5, img: "https://cf.shopee.vn/file/ddb0be1d6f9b341763ab8c4c8060f344_tn", price: "199.000", sold: "10", percent: "40"},
    {id: 6, img: "https://cf.shopee.vn/file/e09111505bc4cf253d5ee1446f48bd55_tn", price: "199.000", sold: "10", percent: "40"},
    {id: 7, img: "https://cf.shopee.vn/file/02816824ff3ffa0cd8bc5da3a3b6e8e2_tn", price: "199.000", sold: "10", percent: "40"},
    {id: 8, img: "https://cf.shopee.vn/file/98f19771ec8ca61d23f33b54d2b3c308_tn", price: "199.000", sold: "10", percent: "40"},
    {id: 9, img: "https://cf.shopee.vn/file/2d9125bad4497247df0e88acff1571ab_tn", price: "199.000", sold: "10", percent: "40"},
    {id: 10, img: "https://cf.shopee.vn/file/32b889fabcbc3c19a09da98f74577e87_tn", price: "199.000", sold: "10", percent: "40"},
];

const FlashSale = (props) => {
    const { classes } = props;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
    };
    
    return (
        <div className={classes.container}>
            <div className={classes.wide}>
                <div className={classes.header}>
                    <div className={classes.flash_sale}>
                        <div className={classes.flash_sale__img}></div>
                    </div>
                    <NavLink to="/view_all" className={classes.view_all}>
                        <button className={classes.view_all__button}>
                            Xem Tất cả
                            &nbsp;
                            <NextIcon />
                        </button>
                    </NavLink>
                </div>

                <div className={classes.content}>
                    <Slider {...settings}>
                        {products.map(product => {
                            return (
                                <div className={classes.card_item} key={product.id}>
                                    <NavLink to="/flash-sale" className={classes.card_item__link}>
                                        <img src={product.img} alt="flash-sale" className={classes.item_img} />
                                        <div className={classes.item_view}>
                                            <div className={classes.item_price}>
                                                <span className={classes.item_price__currency}>₫</span>
                                                <span className={classes.item_price__value}>{product.price}</span>
                                            </div>
                                            <div className={classes.item_quantity__wrap}>
                                                <div className={classes.item_quantity}>ĐÃ BÁN {product.sold}</div>
                                            </div>
                                        </div>
                                        <div className={classes.label_wrap}>
                                            <div className={classes.label}>
                                                <span className={classes.label_percent}>{product.percent}%</span>
                                                <span className={classes.label_sale}>giảm</span>
                                                <div className={classes.label_after}></div>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>    
                            )
                        })}
                    </Slider>           
                </div>
            
                <div className={classes.banner}>
                    <div className={classes.banner_item}>
                        <NavLink to="/banner" className={classes.banner_item__link}>
                            <div className={classes.banner_sale}></div>
                        </NavLink>
                    </div>
                    <div className={classes.banner_item}>
                        <NavLink to="/banner" className={classes.banner_item__link}>
                            <div className={classes.banner_event}></div>
                        </NavLink>
                    </div>
                    <div className={classes.banner_item}>
                        <NavLink to="/banner" className={classes.banner_item__link}>
                            <div className={classes.banner_support}></div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default withStyles(styles)(FlashSale);
