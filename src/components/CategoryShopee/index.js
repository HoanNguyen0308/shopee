import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.js";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const stores = [
	{ id: 1, img_one: "/images/categories/photo01.png", img_two: "/images/categories/photo03.png", name: "Máy tính & Laptop" },
	{ id: 2, img_one: "/images/categories/photo02.png", img_two: "/images/categories/photo04.png", name: "Máy quay phim" },
	{ id: 3, img_one: "/images/categories/photo06.png", img_two: "/images/categories/photo12.png", name: "Đồng hồ" },
	{ id: 4, img_one: "/images/categories/photo05.png", img_two: "/images/categories/photo13.png", name: "Giày dép nam" },
	{ id: 5, img_one: "/images/categories/photo04.png", img_two: "/images/categories/photo15.png", name: "Thiết bị điện" },
	{ id: 6, img_one: "/images/categories/photo16.png", img_two: "/images/categories/photo17.png", name: "Thể thao" },
	{ id: 7, img_one: "/images/categories/photo18.png", img_two: "/images/categories/photo01.png", name: "Ô tô & Xe máy" },
	{ id: 8, img_one: "/images/categories/photo08.png", img_two: "/images/categories/photo09.png", name: "Ba lô và túi" },
	{ id: 9, img_one: "/images/categories/photo09.png", img_two: "/images/categories/photo13.png", name: "Giày dép nam" },
	{ id: 10, img_one: "/images/categories/photo12.png", img_two: "/images/categories/photo12.png", name: "Đồng hồ" },
	{ id: 11, img_one: "/images/categories/photo07.png", img_two: "/images/categories/photo03.png", name: "Máy tính & Laptop" },
	{ id: 12, img_one: "/images/categories/photo11.png", img_two: "/images/categories/photo17.png", name: "Thể thao" },
	{ id: 13, img_one: "/images/categories/photo10.png", img_two: "/images/categories/photo17.png", name: "Thể thao" },
	{ id: 14, img_one: "/images/categories/photo14.png", img_two: "/images/categories/photo15.png", name: "Thiết bị điện" },
	{ id: 15, img_one: "/images/categories/photo15.png", img_two: "/images/categories/photo12.png", name: "Đồng hồ" },
	{ id: 16, img_one: "/images/categories/photo03.png", img_two: "/images/categories/photo17.png", name: "Thể thao" },

];

const CategoryShopee = (props) => {
	const { classes } = props;

	const settings = {
        infinite: true,
        speed: 2000,
        slidesToShow: 10,
        slidesToScroll: 10,
	};

	return (
		<div className={classes.container_slider}>
			<div className={classes.heading}>DANH MỤC</div>
			
			<div className={classes.content}>
				<Slider {...settings}>
					{stores.map(store => {
						return  (
							<div className={classes.category_double} key={store.id}>
								<Link to="/store" className={classes.category_link}>
									<div className={classes.category}>
										<div className={classes.category_img} style={{backgroundImage: `url(${store.img_one})`}}></div>
										<div className={classes.category_text}>{store.name}</div>
									</div>
									<div className={classes.category_after}></div>
								</Link>

								<Link to="/store" className={classes.category_link}>
									<div className={classes.category}>
										<div className={classes.category_img} style={{backgroundImage: `url(${store.img_two})`}}></div>
										<div className={classes.category_text}>{store.name}</div>
									</div>
									<div className={classes.category_after}></div>
								</Link>
							</div>
						)
					})}
				</Slider>
			</div>
		</div>
	);
};

export default withStyles(styles)(CategoryShopee);
