import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.js";
import Header from "../../partials/shopee/Header";
import Footer from "../../partials/auth/Footer";
import StoreInfo from '../../components/StoreInfo';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { NavLink } from 'react-router-dom';
import Slider from "react-slick";
import Grid from '@mui/material/Grid';
import Product from '../../components/Product';
import ProductSoldOut from '../../components/ProductSoldOut';
import SearchRightResource from '../../components/SearchRightResource';
import PaginationResource from '../../components/PaginationResource';
import ListIcon from '@material-ui/icons/List';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const productsSelling = [
	{ id: 1, img: "https://cf.shopee.vn/file/9e2988bb2e5370ae63c7cf609e5fe40a_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.250" },
	{ id: 2, img: "https://cf.shopee.vn/file/24a0c02022dcd5bdc7e4a406eaeba52f_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "2.500" },
	{ id: 3, img: "https://cf.shopee.vn/file/c0aadc92eea19020ea1b9d7785e58f72_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.300" },
	{ id: 4, img: "https://cf.shopee.vn/file/5555d9a627dd36beece1c460fab96808_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.250" },
];

const productsStore = [
	{ id: 1, img: "https://cf.shopee.vn/file/7aa3e71e853209d9f884f979de52add5_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.250" },
	{ id: 2, img: "https://cf.shopee.vn/file/e595ac339f9e04454fe7b38bde4573ad_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.250" },
	{ id: 3, img: "https://cf.shopee.vn/file/4c4ea8cc8d2ea6e47ee8ac67395fd823_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "2.500" },
	{ id: 4, img: "https://cf.shopee.vn/file/19a25c822770a192a361b3bf16285d91_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.300" },
	{ id: 5, img: "https://cf.shopee.vn/file/5555d9a627dd36beece1c460fab96808_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.250" },
	{ id: 6, img: "https://cf.shopee.vn/file/964f79fbb6998013beb4f8b065fb0fc2_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.250" },
	{ id: 7, img: "https://cf.shopee.vn/file/baa53234f1c9b6ee9dd870bb5821b5c9_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.250" },
	{ id: 8, img: "https://cf.shopee.vn/file/5555d9a627dd36beece1c460fab96808_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.250" },
	{ id: 9, img: "https://cf.shopee.vn/file/5555d9a627dd36beece1c460fab96808_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.250" },
	{ id: 10, img: "https://cf.shopee.vn/file/18674055e39ba92465d5164375567eec_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.250" },
	{ id: 11, img: "https://cf.shopee.vn/file/5555d9a627dd36beece1c460fab96808_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.250" },
	{ id: 12, img: "https://cf.shopee.vn/file/4070b32f70ad15adcfffc3feb5616a48_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.250" },
];

const productsSoldOut = [
	{ id: 1, img: "https://cf.shopee.vn/file/ea79b1342223a8c9e1b3216e2af7f508_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.250" },
	{ id: 2, img: "https://cf.shopee.vn/file/6828e36d158ec0c473b96d9d12b3077d_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "2.500" },
	{ id: 3, img: "https://cf.shopee.vn/file/8f4aadc68e3cf7baec620f28c1836504_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.300" },
	{ id: 4, img: "https://cf.shopee.vn/file/40cc6d13f30aad4ebed948c9038cef3c_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.250" },
	{ id: 5, img: "https://cf.shopee.vn/file/dd0b94bf77ee56ae2840e23c10aaf485_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.250" },
];

const AntTabs = withStyles({
	root: {
		backgroundColor: "#fff",
        padding: "1.25rem 0 0",
	},
	indicator: {
        backgroundColor: "#ee4d2d",
	},
})(Tabs);

const AntTab = withStyles((theme) => ({
    root: {
        minWidth: "0",
		textTransform: "none",
		flex: 1,
        fontWeight: 400,
        fontSize: "16px",
		"&:hover": {
			color: "#ee4d2d",
			opacity: 1,
		},
		"&$selected": {
			color: "#ee4d2d",
		},
		"&:focus": {
			color: "#ee4d2d",
		},
	},
	selected: {},
}))((props) => <Tab disableRipple {...props} />);

const ShopeeStore = (props) => {
    const { classes } = props;

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const settings = {
		dots: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
		speed: 2000,
        marginRight: 20,
	};


    return (
        <div className={classes.shopee_store}>
            <Header />

            <StoreInfo />

            <div className={classes.tabs_category}>
                <div className={classes.root}>
                    <AntTabs value={value} onChange={handleChange} aria-label="ant example">
                        <AntTab label="Shop" />
                        <AntTab label="Shopee"><NavLink to="/"></NavLink></AntTab>
                        <AntTab label="Shop" />
                        <AntTab label={"Nạp thẻ & Dịch vụ"} />
                        <AntTab label={"Scan & Pay"} />
                        <AntTab label="Từ Đối Tác" />
                    </AntTabs>
                </div>
            </div>

            <div className={classes.container}>
                <div className={classes.wide}>
                    <div className={classes.content}>
                        <div className={classes.voucher_store}>
                            <h3 className={classes.voucher_heading}>MÃ GIẢM GIÁ CỦA SHOP</h3>
                            <Slider {...settings}>
                                <div className={classes.voucher_item} style={{margin: "20px"}}>
                                    <div className={classes.voucher_item__dash}>
                                        <div className={classes.dash_block}>
                                            <div className={classes.dash_wrap}>
                                                <div className={classes.dash_child}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classes.voucher_item__detail}>
                                        <div className={classes.detail_left__wrap}>
                                            <div className={classes.detail_left}>
                                                <div className={classes.left_highlight}>Giảm ₫10k Đơn Tối Thiểu ₫400k</div>
                                                <span className={classes.left_expired}>HSD: 08.12.2021</span>
                                            </div>
                                            <div className={classes.left_dash}></div>
                                        </div>
                                        <div className={classes.detail_right}>
                                            <button className={classes.right_button}>Lưu</button>
                                        </div>
                                    </div>
                                </div>

                                <div className={classes.voucher_item}>
                                    <div className={classes.voucher_item__dash}>
                                        <div className={classes.dash_block}>
                                            <div className={classes.dash_wrap}>
                                                <div className={classes.dash_child}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classes.voucher_item__detail}>
                                        <div className={classes.detail_left__wrap}>
                                            <div className={classes.detail_left}>
                                                <div className={classes.left_highlight}>Giảm ₫10k Đơn Tối Thiểu ₫400k</div>
                                                <span className={classes.left_expired}>HSD: 08.12.2021</span>
                                            </div>
                                            <div className={classes.left_dash}></div>
                                        </div>
                                        <div className={classes.detail_right}>
                                            <button className={classes.right_button}>Lưu</button>
                                        </div>
                                    </div>
                                </div>

                                <div className={classes.voucher_item}>
                                    <div className={classes.voucher_item__dash}>
                                        <div className={classes.dash_block}>
                                            <div className={classes.dash_wrap}>
                                                <div className={classes.dash_child}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classes.voucher_item__detail}>
                                        <div className={classes.detail_left__wrap}>
                                            <div className={classes.detail_left}>
                                                <div className={classes.left_highlight}>Giảm ₫10k Đơn Tối Thiểu ₫400k</div>
                                                <span className={classes.left_expired}>HSD: 08.12.2021</span>
                                            </div>
                                            <div className={classes.left_dash}></div>
                                        </div>
                                        <div className={classes.detail_right}>
                                            <button className={classes.right_button}>Lưu</button>
                                        </div>
                                    </div>
                                </div>

                                <div className={classes.voucher_item}>
                                    <div className={classes.voucher_item__dash}>
                                        <div className={classes.dash_block}>
                                            <div className={classes.dash_wrap}>
                                                <div className={classes.dash_child}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classes.voucher_item__detail}>
                                        <div className={classes.detail_left__wrap}>
                                            <div className={classes.detail_left}>
                                                <div className={classes.left_highlight}>Giảm ₫10k Đơn Tối Thiểu ₫400k</div>
                                                <span className={classes.left_expired}>HSD: 08.12.2021</span>
                                            </div>
                                            <div className={classes.left_dash}></div>
                                        </div>
                                        <div className={classes.detail_right}>
                                            <button className={classes.right_button}>Lưu</button>
                                        </div>
                                    </div>
                                </div>

                                <div className={classes.voucher_item}>
                                    <div className={classes.voucher_item__dash}>
                                        <div className={classes.dash_block}>
                                            <div className={classes.dash_wrap}>
                                                <div className={classes.dash_child}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classes.voucher_item__detail}>
                                        <div className={classes.detail_left__wrap}>
                                            <div className={classes.detail_left}>
                                                <div className={classes.left_highlight}>Giảm ₫10k Đơn Tối Thiểu ₫400k</div>
                                                <span className={classes.left_expired}>HSD: 08.12.2021</span>
                                            </div>
                                            <div className={classes.left_dash}></div>
                                        </div>
                                        <div className={classes.detail_right}>
                                            <button className={classes.right_button}>Lưu</button>
                                        </div>
                                    </div>
                                </div>
							</Slider>
                        </div>
                    
                        <div className={classes.hot_sold}>
                            <div className={classes.hot_sold__heading}>SẢN PHẨM BÁN CHẠY</div>
                            <Grid container spacing={1} className={classes.hot_sold__list}>
                                {productsSelling.map(product => {
                                    return (
                                        <Grid item md={3} xs={3} key={product.id}>
                                            <Product product={product}/>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </div>

                        <div className={classes.products_store}>
                            <Grid container spacing={0}>
                                <Grid items xs={2} md={2.1} style={{paddingRight: "20px"}}>
                                    <div className={classes.navbar_heading}>
                                        <ListIcon className={classes.navbar_heading__icon}/>
                                        <div className={classes.navbar_heading__text}>Danh Mục</div>
                                    </div>
                                    <div className={classes.navbar_category__list}>
                                        <div className={`${classes.navbar_category__item} ${classes.category_item__active}`}>
                                            <ArrowRightIcon className={classes.category_item__icon}/>
                                            <div>Sản Phẩm</div>
                                        </div>
                                        <div className={classes.navbar_category__item}>
                                            <div>Áo khoác</div>
                                        </div>
                                        <div className={classes.navbar_category__item}>
                                            <div>Túi đeo chéo</div>
                                        </div>
                                        <div className={classes.navbar_category__item}>
                                            <div>On Sale</div>
                                        </div>
                                    </div>
                                </Grid>

                                <Grid item xs={10} md={9.9}>
                                    <SearchRightResource/>

                                    <div className={classes.content_products}>
                                        <Grid container spacing={1}>
                                            {productsStore.map(product => {
                                                return (
                                                    <Grid item xs={12} md={2.4} key={product.id}>
                                                        <Product product={product}/>
                                                    </Grid>
                                                )
                                            })}
                                        </Grid>
                                    </div>

                                    <PaginationResource />  
                                </Grid>
                            </Grid>
                        </div>

                        <div className={classes.hot_sold}>
                            <div className={classes.hot_sold__heading}>Hết Hàng</div>
                            <Grid container spacing={1} className={classes.hot_sold__list}>
                                {productsSoldOut.map(product => {
                                    return (
                                        <Grid item md={2.4} xs={4} key={product.id}>
                                            <ProductSoldOut product={product}/>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default withStyles(styles)(ShopeeStore);