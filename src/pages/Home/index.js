import React from "react";
import Header from "../../partials/shopee/Header";
import Footer from "../../partials/shopee/Footer";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.js";
import SliderShopee from "../../components/SliderShopee";
import CategoryShopee from "../../components/CategoryShopee";
import ProductShopee from "../../components/ProductShopee";
import Introduction from "../../components/Introduction";
import FlashSale from "../../components/FlashSale";
import TechZone from "../../components/TechZone";
import ShopMall from "../../components/ShopMall";
import ShopeeTrend from "../../components/ShopeeTrend";
import TopSearch from "../../components/TopSearch";

const Home = (props) => {
	const { classes } = props;
  
	return (
		<div>
			<Header />
			  <div className={classes.container}>
				<SliderShopee />
				<TechZone />
				<CategoryShopee />
				<FlashSale />
				<ShopMall />
				<ShopeeTrend />
				<TopSearch />
				<ProductShopee />
			</div>
			<Introduction />
			<Footer />
		</div>
	);
}

export default withStyles(styles)(Home);
