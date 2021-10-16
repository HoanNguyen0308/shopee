import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.js";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";

const Product = (props) => {
	const { classes, product } = props;

	return (
		<Link to="/product-detail" className={classes.link}>
			<Card className={classes.card}>
				<CardMedia className={classes.media} image={product.img}></CardMedia>
				<div className={classes.label}>
					<span className={classes.label_percent}>21%</span>
					<span className={classes.label_sale}>GIẢM</span>
					<div className={classes.label_after}></div>
				</div>
				
				<CardContent className={classes.content}>
					<div className={classes.caption}>
						{product.description}
					</div>
                    <div className={classes.price_old}>₫ 185.000</div>
                    <div className={classes.detail}>
                        <div className={classes.detail_left}>
                            <div className={classes.price_current}>₫ {product.price}</div>
                            <div className={classes.progress}>
                                <div className={classes.progress_number}>ĐÃ BÁN 2</div>
                                <div className={classes.progress_current}></div>
                            </div>
                        </div>
                        <Link to="/product-detail" className={classes.detail_right}>Mua ngay</Link>
                    </div>
				</CardContent>
			</Card>
		</Link>
	);
};

export default withStyles(styles)(Product);
