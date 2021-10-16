import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.js";
import Product from "../Product";
import { NavLink } from "react-router-dom";

const products = [
	{ id: 1, img: "https://nghecontent.com/wp-content/uploads/2021/05/cach-ban-my-pham-online-hieu-qua.jpg", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.250" },
	{ id: 2, img: "https://vinmec-prod.s3.amazonaws.com/images/20210319_074726_210224_bang-thanh-phan-my-ph.max-800x800.jpg", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "2.500" },
	{ id: 3, img: "https://phongnen.com/wp-content/uploads/2021/05/O1CN01SZHinb1PwX3aSXxOj_2204182501905.jpg", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.300" },
	{ id: 4, img: "https://dalieuhanoi.com/wp-content/uploads/2018/01/meo-chup-anh-my-pham-ban-hang-online-thu-hut-chi-em2.jpg", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.250" },
	{ id: 5, img: "https://ukcare.vn/wp-content/uploads/2020/07/106184760_10219836212150220_4888309103719445894_n.jpg", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.000" },
	{ id: 6, img: "https://ukcare.vn/wp-content/uploads/2020/07/106184760_10219836212150220_4888309103719445894_n.jpg", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.000" },
	{ id: 7, img: "https://ukcare.vn/wp-content/uploads/2020/07/106184760_10219836212150220_4888309103719445894_n.jpg", name: "Mỹ phẩm hàn quốc", description: "Mỹ phẩm là một trong những công cụ hỗ trợ làm đẹp mà tất cả mọi người đều yêu thích", price: "1.000" },
];

const news =  [
	{id: 1, img: "https://images.pexels.com/photos/2265484/pexels-photo-2265484.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", name: "Điện thoại Iphone X", description: "Mua online điện thoại, smartphone, điện thoại thông minh giá rẻ, chính hãng. Giao nhanh, đem nhiều mẫu ",price: "2500000"},
	{id: 2, img: "https://images.pexels.com/photos/748598/pexels-photo-748598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", name: "Điện thoại Iphone 6", description: "Mua online điện thoại, smartphone, điện thoại thông minh giá rẻ, chính hãng. Giao nhanh, đem nhiều mẫu ",price: "2560000"},
	{id: 3, img: "https://images.pexels.com/photos/7674874/pexels-photo-7674874.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", name: "Điện thoại Sam sung", description: "Mua online điện thoại, smartphone, điện thoại thông minh giá rẻ, chính hãng. Giao nhanh, đem nhiều mẫu ",price: "1300000"},
	{id: 3, img: "https://images.pexels.com/photos/4348395/pexels-photo-4348395.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", name: "Điện thoại Sam sung", description: "Mua online điện thoại, smartphone, điện thoại thông minh giá rẻ, chính hãng. Giao nhanh, đem nhiều mẫu ",price: "1300000"},
	{id: 3, img: "https://images.pexels.com/photos/4740580/pexels-photo-4740580.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", name: "Điện thoại Sam sung", description: "Mua online điện thoại, smartphone, điện thoại thông minh giá rẻ, chính hãng. Giao nhanh, đem nhiều mẫu ",price: "1300000"},
	{id: 3, img: "https://images.pexels.com/photos/939331/pexels-photo-939331.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", name: "Điện thoại Sam sung", description: "Mua online điện thoại, smartphone, điện thoại thông minh giá rẻ, chính hãng. Giao nhanh, đem nhiều mẫu ",price: "1300000"},
	{id: 3, img: "https://images.pexels.com/photos/5082580/pexels-photo-5082580.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", name: "Điện thoại Sam sung", description: "Mua online điện thoại, smartphone, điện thoại thông minh giá rẻ, chính hãng. Giao nhanh, đem nhiều mẫu ",price: "1300000"},
	{id: 3, img: "https://images.pexels.com/photos/5054355/pexels-photo-5054355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", name: "Điện thoại Sam sung", description: "Mua online điện thoại, smartphone, điện thoại thông minh giá rẻ, chính hãng. Giao nhanh, đem nhiều mẫu ",price: "1300000"},
	{id: 3, img: "https://images.pexels.com/photos/5077039/pexels-photo-5077039.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", name: "Điện thoại Sam sung", description: "Mua online điện thoại, smartphone, điện thoại thông minh giá rẻ, chính hãng. Giao nhanh, đem nhiều mẫu ",price: "1300000"},
]

const AntTabs = withStyles({
	root: {
		borderBottom: "1px solid #e8e8e8",
		backgroundColor: "#fff",
		marginBottom: "10px",
	},
	indicator: {
		backgroundColor: "#ee4d2d",
	},
})(Tabs);

const AntTab = withStyles((theme) => ({
	root: {
		textTransform: "none",
		minWidth: 72,
		fontWeight: theme.typography.fontWeightRegular,
		marginRight: theme.spacing(4),
		fontFamily: ["Times New Roman"].join(","),
		"&:hover": {
			color: "#ee4d2d",
			opacity: 1,
		},
		"&$selected": {
			color: "#ee4d2d",
			fontWeight: theme.typography.fontWeightMedium,
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

const ProductShopee = (props) => {
	const { classes } = props;

	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.shopee_product}>
			<div className={classes.container}>
				<div className={classes.tabs_category}>
					<AntTabs value={value} onChange={handleChange} aria-label="ant example">
						<AntTab label="GỢI Ý HÔM NAY" />
						<AntTab label="SẢN PHẨM MỚI" />
					</AntTabs>
					<TabPanel value={value} index={0}>
						<Grid container spacing={1}>
							{products.map(product => {
								return <Grid item md={2} xs={12} key={product.id}>
								<Product product={product}/>
							</Grid>
							})}
						</Grid>
					</TabPanel>
					<TabPanel value={value} index={1}>
						<Grid container spacing={1}>
							{news.map(product => {
								return <Grid item md={2} xs={12} key={product.id}>
								<Product product={product}/>
							</Grid>
							})}
						</Grid>
					</TabPanel>
					<Typography className={classes.padding} />
				</div>
			
				<div className={classes.button_view}>
					<NavLink to="./new-products" className={classes.button_view__link}>Xem Thêm</NavLink>
				</div>
			</div>
		</div>
	);
};

export default withStyles(styles)(ProductShopee);
