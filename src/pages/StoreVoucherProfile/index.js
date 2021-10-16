import React from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles.js";
import Header from "../../partials/shopee/Header";
import NavBarProfile from "../../components/NavBarProfile";
import Footer from "../../partials/auth/Footer";
import { NavLink } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import AllVoucher from "../../components/VoucherChildProfile/AllVoucher";
import VoucherShopee from "../../components/VoucherChildProfile/VoucherShopee";
import VoucherShop from "../../components/VoucherChildProfile/VoucherShop";
import CardService from "../../components/VoucherChildProfile/CardService";
import ScanPay from "../../components/VoucherChildProfile/ScanPay";
import Partner from "../../components/VoucherChildProfile/Partner";

const AntTabs = withStyles({
	root: {
		borderBottom: "1px solid #e8e8e8",
		backgroundColor: "#fff",
		margin: "14px 0 12px",
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

const TabPanel = (props) => {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && <Grid>{children}</Grid>}
		</div>
	);
};

const StoreVoucher = (props) => {
    const { classes } = props;
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.profile}>
            <Header />
            
            <div className={classes.container}>
                <div className={classes.wide}>
                    <NavBarProfile />
                    
                    <div className={classes.content}>
                        <div className={classes.content_header}>
                            <div className={classes.header_left}>Ví Voucher</div>
                            <div className={classes.header_right}>
                                <NavLink to="/store-voucher" className={classes.right_item}>Tìm hiểu voucher</NavLink>
                                <NavLink to="/store-voucher" className={classes.right_item}>Xem lịch sử voucher</NavLink>
                                <NavLink to="/store-voucher" className={`${classes.right_item} ${classes.right_item__end}`}>Tìm hiểu thêm</NavLink>
                            </div>
                        </div>
                        
                        <div className={classes.search_voucher}>
                            <div className={classes.search_left}>Mã Voucher</div>
                            <div className={classes.search_center}>
                                <input type="text" className={classes.search_input} placeholder="Nhập mã voucher tại đây"/>
                            </div>
                            <button className={classes.search_button} disabled>Lưu</button>
                        </div>

                        <div className={classes.root}>
                            <AntTabs value={value} onChange={handleChange} aria-label="ant example">
                                <AntTab label="Tất cả" />
                                <AntTab label="Shopee" />
                                <AntTab label="Shop" />
                                <AntTab label={"Nạp thẻ & Dịch vụ"} />
                                <AntTab label={"Scan & Pay"} />
                                <AntTab label="Từ Đối Tác" />
                            </AntTabs>

                            <TabPanel value={value} index={0}>
                                <AllVoucher />
                            </TabPanel>

                            <TabPanel value={value} index={1}>
                                <VoucherShopee />
                            </TabPanel>

                            <TabPanel value={value} index={2}>
                                <VoucherShop />
                            </TabPanel>

                            <TabPanel value={value} index={3}>
                                <CardService />
                            </TabPanel>

                            <TabPanel value={value} index={4}>
                                <ScanPay />
                            </TabPanel>

                            <TabPanel value={value} index={5}>
                                <Partner />
                            </TabPanel>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
};

export default withStyles(styles)(StoreVoucher);