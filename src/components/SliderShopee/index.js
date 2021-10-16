import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.js";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";

const stores = [
	{id: 1, img: "/images/icon01.png", name: "Tech Zone - Siêu Thị Điện"},
	{id: 2, img: "/images/icon02.png", name: "Gì cũng rẻ - 1K"},
	{id: 3, img: "/images/icon03.png", name: "Hoàn xu 20% - Đơn từ 0Đ"},
	{id: 4, img: "/images/icon04.png", name: "Nạp thẻ & Hóa Đơn"},
	{id: 5, img: "/images/icon05.png", name: "Shopee Sô gì đây!"},
	{id: 6, img: "/images/icon06.png", name: "FreeShip Extra 70k mỗi ngày"},
	{id: 7, img: "/images/icon07.png", name: "Hàng hiệu -50%"},
	{id: 8, img: "/images/icon08.png", name: "Hàng quốc tế, đồng giá"},
	{id: 9, img: "/images/icon09.png", name: "Shoppee, Premium"},
	{id: 11, img: "/images/icon01.png", name: "Yên tâm mua hàng"},
	{id: 12, img: "/images/icon02.png", name: "Hàng nội đị, giá rẻ"},
	{id: 13, img: "/images/icon03.png", name: "Hàng quốc tế, siêu nhanh"},
];

const SliderShopee = (props) => {
	const { classes } = props;

	const settings = {
		dots: true,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 2000,
	};

	return (
		<div className={classes.slider_wrap}>
			<div className={classes.slider}>
				<Grid container spacing={2}>
				<Grid item xs={8}>
					<Paper className={classes.paper}>
						<div className="container">
							<Slider {...settings}>
								<img src="/images/slider03.png" className={classes.image_slider} alt=""/>
								<img src="/images/slider04.png" className={classes.image_slider} alt=""/>
								<img src="/images/slider05.png" className={classes.image_slider} alt=""/>
								<img src="/images/slider06.png" className={classes.image_slider} alt=""/>
								<img src="/images/slider07.png" className={classes.image_slider} alt=""/>
								<img src="/images/slider08.png" className={classes.image_slider} alt=""/>
							</Slider>
						</div>
					</Paper>
				</Grid>

				<Grid item xs={4}>
					<Paper className={classes.paper}>
						<img src="/images/slider01.png" alt=""/>
						<img src="/images/slider02.png" alt=""/>
					</Paper>
				</Grid>
			</Grid>
				<Grid container spacing={2} className={classes.stores}>
					{stores.map(store => {
						return  <Grid item xs={1} key={store.id}>
						<NavLink to="/store" className={classes.link}>
							<Grid className={classes.link_store}>
								<Grid className={classes.link_img}>
									<img src={store.img} alt="" />
								</Grid>
								<p className={classes.link_text}>{store.name}</p>
							</Grid>
						</NavLink>
					</Grid>
					})}
				</Grid>
			</div>
			<div className={classes.sale_img__wrap}>
				<img src="/images/slider09.jpg" alt="" className={classes.sale_img} />
			</div>
		</div>
	);
};

export default withStyles(styles)(SliderShopee);
