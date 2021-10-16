import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.js";
import Header from "../../partials/shopee/Header";
import Footer from "../../partials/auth/Footer";
import ScheduleIcon from '@material-ui/icons/Schedule';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import ProductFlashSale from '../../components/ProductFlashSale';

const productsFlashSale = [
	{ id: 1, img: "https://cf.shopee.vn/file/0ca8d9cfe810819aa8e485eede40cd13_tn", name: "Mỹ phẩm hàn quốc", description: "BỘ ĐÔI LĂN NGĂN MÙI NIVEA SERUM TRẮNG MỊN HƯƠNG HOA HỒNG HOKKAIDO (40ML/CHAI) - 85301", price: "1.600.000" },
	{ id: 2, img: "https://cf.shopee.vn/file/c50f70a18f4b2aa7f1637133b6429139_tn", name: "Mỹ phẩm hàn quốc", description: "BỘ ĐÔI LĂN NGĂN MÙI NIVEA SERUM TRẮNG MỊN HƯƠNG HOA HỒNG HOKKAIDO (40ML/CHAI) - 85301", price: "2.500" },
	{ id: 3, img: "https://cf.shopee.vn/file/348e8adc9460fabb713f9356ae17f66d_tn", name: "Mỹ phẩm hàn quốc", description: "BỘ ĐÔI LĂN NGĂN MÙI NIVEA SERUM TRẮNG MỊN HƯƠNG HOA HỒNG HOKKAIDO (40ML/CHAI) - 85301", price: "1.300" },
	{ id: 4, img: "https://cf.shopee.vn/file/16f76805c5f1a5e4b0533829d344c29d_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.250" },
	{ id: 5, img: "https://cf.shopee.vn/file/dcf2eb6b42d168156957e3250531f33a_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.250" },
	{ id: 6, img: "https://cf.shopee.vn/file/dcf2eb6b42d168156957e3250531f33a_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.250" },
	{ id: 7, img: "https://cf.shopee.vn/file/dcf2eb6b42d168156957e3250531f33a_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.250" },
	{ id: 8, img: "https://cf.shopee.vn/file/dcf2eb6b42d168156957e3250531f33a_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.250" },
	{ id: 9, img: "https://cf.shopee.vn/file/dcf2eb6b42d168156957e3250531f33a_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.250" },
	{ id: 10, img: "https://cf.shopee.vn/file/dcf2eb6b42d168156957e3250531f33a_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.250" },
	{ id: 11, img: "https://cf.shopee.vn/file/dcf2eb6b42d168156957e3250531f33a_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.250" },
	{ id: 12, img: "https://cf.shopee.vn/file/dcf2eb6b42d168156957e3250531f33a_tn", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.250" },
];

const AntTabsEvent = withStyles({
	root: {
		backgroundColor: "#414142",
	},
	indicator: {
        backgroundColor: "transparent",
	},
})(Tabs);

const AntTabEvent = withStyles((theme) => ({
    root: {
        boxSizing: "border-box",
        minWidth: "0",
		textTransform: "none",
		flex: 1,
        fontWeight: 400,
        fontSize: "16px",
        textAlign: "center",
        "&:hover": {
            color: "#fff",
        },
		"&$selected": {
			color: "#ee4d2d",
		},
		"&:focus": {
			backgroundColor: "#ee4d2d",
            color: "#fff",
		},
	},
	selected: {},
}))((props) => <Tab disableRipple {...props} />);

const AntTabsCategory = withStyles({
	root: {
		backgroundColor: "#fff",
	},
	indicator: {
        backgroundColor: "#ee4d2d",
	},
})(Tabs);

const AntTabCategory = withStyles((theme) => ({
    root: {
        boxSizing: "border-box",
        minWidth: "0",
		textTransform: "none",
		flex: 1,
        fontWeight: 400,
        fontSize: "16px",
        textAlign: "center",
		"&$selected": {
			color: "#ee4d2d",
		},
		"&:focus": {
			backgroundColor: "#fff",
		},
	},
	selected: {},
}))((props) => <Tab disableRipple {...props} />);


const FlashSale = (props) => {
    const { classes } = props;
    
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [show, setShow] = React.useState(0);
    const handleChangeShow = (event, newValue) => {
        setShow(newValue);
    };

    const tabEvent = (
        <div style={{padding: "4px 0"}} className={classes.tab_event}>
            <div className={classes.tab_event__hour}>09:00</div>
            <div className={classes.tab_event__status}>Đang Diễn Ra</div>
        </div>
    );

    return (
        <div className={classes.flash_sale}>
            <Header />

            <div className={classes.flash_sale__countdown}>
                <div className={classes.countdown_img}></div>
                <div className={classes.countdown_name}>
                    <ScheduleIcon className={classes.countdown_name__icon} />
                    <div className={classes.countdown_name__text}>KẾT THÚC TRONG</div>
                </div>
                <div className={classes.countdown_list}>
                    <div className={classes.countdown_item}>00</div>
                    <div className={classes.countdown_item}>00</div>
                    <div className={classes.countdown_item}>00</div>
                </div>
                <div className={classes.countdown_value}></div>
            </div>

            <div className={classes.container}>
                <div className={classes.wide}>
                    <div className={classes.content}>
                        <div className={classes.flash_sale__banner}></div>

                        <div className={classes.tabs_event}>
                            <div className={classes.root}>
                                <AntTabsEvent value={value} onChange={handleChange} aria-label="ant example">
                                    <AntTabEvent label={tabEvent} />
                                    <AntTabEvent label={tabEvent} />
                                    <AntTabEvent label={tabEvent} />
                                    <AntTabEvent label={tabEvent} />
                                    <AntTabEvent label={tabEvent} />
                                </AntTabsEvent>
                            </div>
                        </div>

                        <div className={classes.tabs_event}>
                            <div className={classes.root}>
                                <AntTabsCategory value={show} onChange={handleChangeShow} aria-label="ant example">
                                    <AntTabCategory label="Top Picks" />
                                    <AntTabCategory label="Nhu Yếu Phẩm" />
                                    <AntTabCategory label="Shop Xu Hướng" />
                                    <AntTabCategory label="Book Club" />
                                    <AntTabCategory label="Đồng Giá 9k" />
                                    <AntTabCategory label="Shop Nổi Bật" />
                                    <AntTabCategory label="Thêm" />
                                </AntTabsCategory>
                            </div>
                        </div>
                    
                        <div className={classes.products_flash__sale}>
                            <Grid container spacing={1}>
                                {productsFlashSale.map(product => {
                                    return (
                                        <Grid item xs={12} md={3}>
                                            <ProductFlashSale product={product}/>
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

export default withStyles(styles)(FlashSale);