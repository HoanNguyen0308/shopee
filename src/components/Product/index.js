import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.js";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { FcLike } from "react-icons/fc";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import IconCar from "../../assets/svg/IconCar";

const Product = (props) => {
	const { classes, product } = props;

	return (
		<Link to="/product-detail" className={classes.link}>
			<Card className={classes.card}>
				<CardMedia className={classes.media} image={product.img}></CardMedia>
				<div className={classes.mall}>
					<div className={classes.mall_img}></div>
					<div className={classes.mall_triangle}></div>
				</div>
				<div className={classes.label}>
					<span className={classes.label_percent}>21%</span>
					<span className={classes.label_sale}>GIẢM</span>
					<div className={classes.label_after}></div>
				</div>
				
				<CardContent className={classes.content}>
					<Typography className={classes.caption}>
						{product.description}
					</Typography>
					<div className={classes.bill}>
						<div className={classes.tag}>50% giảm</div>
						<div className={classes.hashtag}>#ShopXuHuong</div>
					</div>
					<div className={classes.price_wrap}>
						<div className={classes.price}>
							<span className={classes.price_old}>120$</span>
							<span className={classes.price_current}>{product.price}$</span>
						</div>
						<div className={classes.price_icon}>
							<IconCar />
						</div>
					</div>
					<Grid className={classes.icons}>
						<Grid className={classes.icons_rate}>
							<FcLike  className={classes.loveIcon}/>
							<AiFillStar className={classes.startIcon} />
							<AiFillStar className={classes.startIcon} />
							<AiFillStar className={classes.startIcon} />
							<AiFillStar className={classes.startIcon} />
							<AiFillStar className={classes.startIcon} />
						</Grid>
						<Grid>
							<span className={classes.quantity}>169 đã bán</span>
						</Grid>
					</Grid>
					<div className={classes.address}>Hà Nội</div>
				</CardContent>
			</Card>
		</Link>
	);
};

export default withStyles(styles)(Product);
