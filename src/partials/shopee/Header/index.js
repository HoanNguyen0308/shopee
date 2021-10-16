import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.js";
import { NavLink } from "react-router-dom";
import Notifications from "../../../assets/svg/Notifications.js";
import Help from "../../../assets/svg/Help.js";
import LogoShopeeHome from "../../../assets/svg/LogoShopeeHome.js";
import SearchProduct from "../../../assets/svg/SearchProduct.js";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import BtnPrimary from "../../../UI/BtnPrimary"

const Header = (props) => {
	const { classes } = props;

	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className={classes.header}>
			<div className={classes.header_container}>
				<div className={classes.header_nav}>
					<div className={classes.header_nav__left}>
						<NavLink to="/" className={classes.nav_store}>Kênh người bán</NavLink>
						<NavLink to="/" className={classes.nav_store}>Trở thành người bán Shopee</NavLink>
						<NavLink to="/" className={`${classes.nav_store} ${classes.download_wrap}`}>Tải ứng dụng
							<NavLink to="/download" className={classes.download}>
								<img className={classes.img_qr} src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/d91264e165ed6facc6178994d5afae79.png" alt="download"/>
								<div className={classes.img_list}>
									<img className={classes.img_item} src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/39f189e19764dab688d3850742f13718.png" alt="download"/>
									<img className={classes.img_item} src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/f4f5426ce757aea491dce94201560583.png" alt="download"/>
									<img className={classes.img_item} src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/1ae215920a31f2fc75b00d4ee9ae8551.png" alt="download"/>
								</div>
							</NavLink>
						</NavLink>
						<div className={classes.nav_connect}>Kết nối</div>
						<div className={classes.nav_socials}>
							<NavLink to="/" className={`${classes.nav_social} ${classes.nav_social__facebook}`}></NavLink>
							<NavLink to="/" className={`${classes.nav_social} ${classes.nav_social__instagram}`}></NavLink>
						</div>
					</div>
					<div className={classes.header_nav__right}>
						<NavLink to="/" className={classes.nav_services}>
							<Notifications style={{color: 'red'}} />
							<span className={classes.nav_services__text}>Thông Báo</span>
							<div className={classes.notify}>
								<NavLink to="/" className={classes.notifyHeader}>
									Thông báo mới nhận
								</NavLink>
								<div>
									<NavLink to="/" className={classes.notifyItem}>
										<div className={classes.notifyItemImg}>
											<div></div>
										</div>
										<div>
											<div className={classes.notifyItemTitle}>
												Thông báo về sản phẩm
											</div>
											<div className={classes.notifyItemContent}>
												Đơn hàng <strong>45RTX44R</strong> đã hoàn thành. Hãy đánh giá sản phẩm để nhận xu nhé!
 											</div>
										</div>
									</NavLink>
									<NavLink to="/" className={classes.notifyItem}>
										<div className={classes.notifyItemImg}>
											<div></div>
										</div>
										<div>
											<div className={classes.notifyItemTitle}>
												Thông báo về sản phẩm
											</div>
											<div className={classes.notifyItemContent}>
												Đơn hàng <strong>45RTX44R</strong> đã hoàn thành. Hãy đánh giá sản phẩm để nhận xu nhé!
 											</div>
										</div>
									</NavLink>
									<NavLink to="/" className={classes.notifyItem}>
										<div className={classes.notifyItemImg}>
											<div></div>
										</div>
										<div>
											<div className={classes.notifyItemTitle}>
												Thông báo về sản phẩm
											</div>
											<div className={classes.notifyItemContent}>
												Đơn hàng <strong>45RTX44R</strong> đã hoàn thành. Hãy đánh giá sản phẩm để nhận xu nhé!
 											</div>
										</div>
									</NavLink>
									<NavLink to="/" className={classes.notifyItem}>
										<div className={classes.notifyItemImg}>
											<div></div>
										</div>
										<div>
											<div className={classes.notifyItemTitle}>
												Thông báo về sản phẩm
											</div>
											<div className={classes.notifyItemContent}>
												Đơn hàng <strong>45RTX44R</strong> đã hoàn thành. Hãy đánh giá sản phẩm để nhận xu nhé!
 											</div>
										</div>
									</NavLink>
									<NavLink to="/" className={classes.notifyItem}>
										<div className={classes.notifyItemImg}>
											<div></div>
										</div>
										<div>
											<div className={classes.notifyItemTitle}>
												Thông báo về sản phẩm
											</div>
											<div className={classes.notifyItemContent}>
												Đơn hàng <strong>45RTX44R</strong> đã hoàn thành. Hãy đánh giá sản phẩm để nhận xu nhé!
 											</div>
										</div>
									</NavLink>
								</div>
								<NavLink to="/" className={classes.notifyFooter}>
									Xem tất cả
								</NavLink>
							</div>
						</NavLink>
						<NavLink to="/" className={`${classes.nav_services} ${classes.nav_services__support}`}>
							<Help />
							<span className={classes.nav_services__text}>Hỗ Trợ</span>
						</NavLink>
						
						<div>
							<div aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
								<NavLink to="" className={`${classes.nav_user} ${classes.nav_login}`}>
									<img className={classes.nav_user__img} src="https://cf.shopee.vn/file/a5a4753c0dfe674c5991773369e6dfb0_tn" alt="user"></img>
									<div className={classes.nav_user__name}>Hoàn nguyễn</div>
								</NavLink>
							</div>
							<Menu
								style={{top: "22px", left: "-10px"}}
								anchorEl={anchorEl}
								keepMounted
								open={Boolean(anchorEl)}
								onClose={handleClose}
							>
								<MenuItem className={classes.user_item} onClick={handleClose}>
									<NavLink className={classes.user_item__link} to="/profile">Tài Khoản của tôi</NavLink>
								</MenuItem>
								<MenuItem className={classes.user_item} onClick={handleClose}>
									<NavLink className={classes.user_item__link} to="/purchase-order-profile">Đơn Mua</NavLink>
								</MenuItem>	
								<MenuItem className={classes.user_item} onClick={handleClose}>
									<NavLink className={classes.user_item__link} to="/login">Đăng xuất</NavLink>
								</MenuItem>
							</Menu>
						</div>
					</div>
				</div>
				<div className={classes.header_search}>
					<NavLink to="/" className={classes.header_search__logo}>
						<LogoShopeeHome />
					</NavLink>
					<div className={classes.header_search__content}>
						<div className={classes.search_tool}>
							<div className={classes.search_bar}>
								<form className={classes.search_form}>
									<input className={classes.search_input} placeholder="Tìm sản phẩm, thương hiệu và tên tên shop"></input>
								</form>
							</div>
							<button className={classes.search_button}>
								<SearchProduct />
							</button>
						</div>	
						<div className={classes.search_category__wrap}>
							<div className={classes.search_category}>
								<NavLink to="/resource-search" className={classes.search_category__link}>Áo Khoác</NavLink>
								<NavLink to="/resource-search" className={classes.search_category__link}>Balo</NavLink>
								<NavLink to="/resource-search" className={classes.search_category__link}>Váy</NavLink>
								<NavLink to="/resource-search" className={classes.search_category__link}>Quần</NavLink>
								<NavLink to="/resource-search" className={classes.search_category__link}>Bông Tẩy Trang</NavLink>
								<NavLink to="/resource-search" className={classes.search_category__link}>Áo Phông</NavLink>
								<NavLink to="/resource-search" className={classes.search_category__link}>Nồi Chiên Không Dầu</NavLink>
								<NavLink to="/resource-search" className={classes.search_category__link}>Bánh Trung Thu</NavLink>
							</div>
						</div>
					</div>
					<div className={classes.header_search__cart}>
						<NavLink to="/shopee-cart" className={classes.cart_link}>
							<ShoppingCartIcon />
							<div className={classes.cart_counter}>7</div>
							<div className={classes.cart}>
								<div className={classes.cart_heading}>Sản Phẩm Mới Thêm</div>
								<div className={classes.cart_list}>
									<div className={`${classes.cart_item} ${classes.Helpnotification__item}`}>
										<div className={classes.cart_item__img} style={{backgroundImage: "url(https://cf.shopee.vn/file/65839ad53060d658482f23c57197ebe2_tn)"}}></div>
										<div className={classes.a}>
											<div className={classes.cart_name}>💥 Nước hoa Dior Homme Cologn 100ml chuẩn tinh khiết thơm thoáng men lì</div>
											<div className={classes.cart_price}>₫300.000</div>
										</div>
									</div>

									<div className={`${classes.cart_item} ${classes.Helpnotification__item}`}>
										<div className={classes.cart_item__img} style={{backgroundImage: "url(https://cf.shopee.vn/file/65839ad53060d658482f23c57197ebe2_tn)"}}></div>
										<div className={classes.a}>
											<div className={classes.cart_name}>💥 Nước hoa Dior Homme Cologn 100ml chuẩn tinh khiết thơm thoáng men lì</div>
											<div className={classes.cart_price}>₫300.000</div>
										</div>
									</div>

									<div className={`${classes.cart_item} ${classes.Helpnotification__item}`}>
										<div className={classes.cart_item__img} style={{backgroundImage: "url(https://cf.shopee.vn/file/f99f0a8cafc02c651e244d105fe4911a_tn)"}}></div>
										<div className={classes.a}>
											<div className={classes.cart_name}>💥 Nước hoa Dior Homme Cologn 100ml chuẩn tinh khiết thơm thoáng men lì</div>
											<div className={classes.cart_price}>₫300.000</div>
										</div>
									</div>

									<div className={`${classes.cart_item} ${classes.Helpnotification__item}`}>
										<div className={classes.cart_item__img} style={{backgroundImage: "url(https://cf.shopee.vn/file/65839ad53060d658482f23c57197ebe2_tn)"}}></div>
										<div className={classes.a}>
											<div className={classes.cart_name}>💥 Nước hoa Dior Homme Cologn 100ml chuẩn tinh khiết thơm thoáng men lì</div>
											<div className={classes.cart_price}>₫300.000</div>
										</div>
									</div>

									<div className={`${classes.cart_item} ${classes.Helpnotification__item}`}>
										<div className={classes.cart_item__img} style={{backgroundImage: "url(https://cf.shopee.vn/file/b0ab35749de9dc6941fdca46b30d0459_tn)"}}></div>
										<div className={classes.a}>
											<div className={classes.cart_name}>💥 Nước hoa Dior Homme Cologn 100ml chuẩn tinh khiết thơm thoáng men lì</div>
											<div className={classes.cart_price}>₫300.000</div>
										</div>
									</div>
								</div>
								<div className={classes.cart_more}>
									<div className={classes.cart_more__text}>2 Sản Phẩm Thêm Vào Giỏ Hàng</div>
									<NavLink to="shopee-cart">
										<BtnPrimary className={classes.cart_more__button}>Xem Giỏ Hàng</BtnPrimary>
									</NavLink>
								</div>
							</div>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	)
};

export default withStyles(styles)(Header);