import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.js";
import { NavLink } from "react-router-dom";
import NextIcon from "../../assets/svg/NextIcon";

const products = [
    {id: 1, img: "https://cf.shopee.vn/file/25fecab4d0c9dbfc7dc590df1e732026_tn", price: "499.000", sold: "2", percent: "56"},
    {id: 2, img: "https://cf.shopee.vn/file/12ac706562bab9e1ed75f07182efc69b_tn", price: "199.000", sold: "10", percent: "40"},
    {id: 3, img: "https://cf.shopee.vn/file/0cf53c142b1caa32add3e45f1837112e_tn", price: "199.000", sold: "10", percent: "40"},
    {id: 4, img: "https://cf.shopee.vn/file/9e571631a77f99d4184f7ede8be3ffcb_tn", price: "199.000", sold: "10", percent: "40"},
    {id: 5, img: "https://cf.shopee.vn/file/af85fa38315b9ddd27af8cd5f7f1f135_tn", price: "199.000", sold: "10", percent: "40"},
    {id: 6, img: "https://cf.shopee.vn/file/e26394e62abc77979e3870d3e2126a33_tn", price: "199.000", sold: "10", percent: "40"},
];

const TechZone = (props) => {
    const { classes } = props;

    return (
        <div className={classes.tech_zone}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <img className={classes.header_img} src="https://cf.shopee.vn/file/4a4b4c8656f671b74fdaffc2939f18de" alt="tech-zone"></img>
                </div>

                <div className={classes.content}>
                    <div className={classes.title_wrap}>
                        <span className={classes.title}>SẢN PHẨM BÁN CHẠY</span>
                        <NavLink to="/view-more" className={classes.view_more}>
                            <span className={classes.view_more__text}>Xem Thêm</span>
                            <NextIcon />
                        </NavLink>   
                    </div>
                    <div className={classes.products}>
                        {products.map(product => {
                            return (
                                <div className={classes.card_item} key={product.id}>
                                    <NavLink to="/flash-sale" className={classes.card_item__link}>
                                        <img src={product.img} alt="flash-sale" className={classes.item_img}></img>
                                        <div className={classes.item_view}>
                                            <div className={classes.item_price}>
                                                <span className={classes.item_price__currency}>₫</span>
                                                <span className={classes.item_price__value}>{product.price}</span>
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
                    </div>
                </div>
            
                <div className={classes.footer}>
                    <img className={classes.footer_img} src="https://cf.shopee.vn/file/f9a33a4f1f294e93a49e9ea0897dbf5f" alt="tech-zone"></img>
                </div>
            </div>
        </div>
    )
};

export default withStyles(styles)(TechZone);
