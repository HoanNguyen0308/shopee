import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.js";
import { NavLink } from 'react-router-dom';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Slider from "react-slick";

const products = [
    {id: 1, img: "https://cf.shopee.vn/file/1c23ccb76031614584cbdd977e31bd7a_tn", quantity: "30", description: "P&G Top Bán Chạy Chất Lượng Cao Giá Rẻ Mùa Dịch"},
    {id: 2, img: "https://cf.shopee.vn/file/362669996dc2f2f98c47cdc37f6da6d3_tn", quantity: "30", description: "Ốp lưng iPhone"},
    {id: 3, img: "https://cf.shopee.vn/file/7ccebb7910c00edd0b767d1f75c03fd2_tn", quantity: "30", description: "P&G Top Bán Chạy Chất Lượng Cao Giá Rẻ Mùa Dịch"},
    {id: 4, img: "https://cf.shopee.vn/file/7cf0d8be3dcf85db6f84591aa3f93dae_tn", quantity: "30", description: "Ốp lưng iPhone"},
    {id: 5, img: "https://cf.shopee.vn/file/88c7b37f3c2c4481d6dc51edd75b7d00_tn", quantity: "30", description: "P&G Top Bán Chạy Chất Lượng Cao Giá Rẻ Mùa Dịch"},
    {id: 6, img: "https://cf.shopee.vn/file/85a0a69a1ccdd7e2461acac9977018f1_tn", quantity: "30", description: "Ốp lưng iPhone"},
    {id: 7, img: "https://cf.shopee.vn/file/4963ce89b97723c97154d95f9e3e31eb_tn", quantity: "30", description: "P&G Top Bán Chạy Chất Lượng Cao Giá Rẻ Mùa Dịch"},
    {id: 8, img: "https://cf.shopee.vn/file/ce3aedb12a4bdd13b7ebb1988b171eef_tn", quantity: "30", description: "P&G Top Bán Chạy Chất Lượng Cao Giá Rẻ Mùa Dịch"},
    {id: 9, img: "https://cf.shopee.vn/file/1c23ccb76031614584cbdd977e31bd7a_tn", quantity: "30", description: "Ốp lưng iPhone"},
    {id: 10, img: "https://cf.shopee.vn/file/fece3c2936e0aee38d6eeb847a17a389_tn", quantity: "30", description: "Ốp lưng iPhone"},
    {id: 11, img: "https://cf.shopee.vn/file/7874b58253173b78a45569529a9be832_tn", quantity: "30", description: "P&G Top Bán Chạy Chất Lượng Cao Giá Rẻ Mùa Dịch"},
];

const TopSearch = (props) => {
    const { classes }  = props;

    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 6,
        slidesToScroll: 6,
    };

    return (
        <div className={classes.top_search}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <div className={classes.header_title}>TÌM KIẾM HÀNG ĐẦU</div>
                    <NavLink to="view-more" className={classes.header_link}>
                        Xem Tất Cả
                        <ChevronRightIcon className={classes.header_icon} />
                    </NavLink>
                </div>
                <div className={classes.content}>
                    <Slider {...settings}>
                    {products.map(product => {
                        return (
                            <div className={classes.product} key={product.id}>
                                <NavLink to="/product-top-search" className={classes.product_link}>
                                    <div className={classes.product_view}>
                                        <div className={classes.product_img__wrap}>
                                            <img className={classes.product_img} src={product.img} alt="product-top-search" />
                                        </div>
                                        <div className={classes.product_label}></div>
                                        <div className={classes.product_quantity}>Bán {product.quantity}k+ / tháng</div>
                                    </div>
                                    <div className={classes.product_description}>{product.description}</div>
                                </NavLink>
                            </div>
                        )
                    })}
                    </Slider>
                </div>
            </div>
        </div>
    )
};

export default withStyles(styles)(TopSearch);