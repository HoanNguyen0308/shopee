import React from "react";
import { withStyles } from '@material-ui/core/styles';
import styles from "./styles.js";
import LogoShopee from "../../assets/svg/LogoShopee";
import { NavLink } from "react-router-dom";

const Register = (props) => {
	const { classes } = props;
	
	return (
		<div className={classes.main}>
			<div className={classes.header}>
				<div className={`${classes.header_content} ${classes.wide}`}>
					<NavLink to="/" className={classes.header_left}>
						<LogoShopee />
					</NavLink>
					<div className={classes.header_right}>Cần trợ giúp?</div>
				</div>
			</div>

			<div className={classes.container}>
				<div className={classes.container_content}>
					<form className={classes.form}>
						<div className={classes.form_heading}>Đăng ký</div>
						<input
							type="text"
							className={classes.form_input}
							placeholder="Số điện thoại"
						/>
						<button disabled className={classes.form_button}>TIẾP THEO</button>
						<div className={classes.form_way}>
							<div className={classes.form_cross}></div>
							<span className={classes.form_way__text}>HOẶC</span>
							<div className={classes.form_cross}></div>
						</div>
						<div className={classes.form_socials}>
							<button className={classes.form_social}>
								<div className={classes.left_icon}></div>
								<div className={classes.form_social__text}>Facebook</div>
							</button>
							<button className={`${classes.form_social} ${classes.form_social__center}`}>
								<div className={classes.center_icon__wrap}>
									<div className={classes.center_icon}></div>
								</div>
								<div className={classes.form_social__text}>Google</div>
							</button>
							<button className={`${classes.form_social} ${classes.form_social__right}`}>
								<div className={classes.right_icon}></div>
								<div className={classes.form_social__text}>Apple</div>
							</button>
						</div>
						<div className={classes.form_policy}>
							Bằng việc đăng ký, bạn đã đồng ý với Shopee về
							<span className={classes.form_policy__text}> Điều khoản dịch vụ </span>
							{"&"}
							<span className={classes.form_policy__text}> Chính sách bảo mật</span>
						</div>
						<div className={classes.form_bonus}>
							Bạn đã có tài khoản?
							<NavLink to="/login" className={classes.form_bonus__login}> Đăng nhập</NavLink>
						</div>
					</form>
				</div>
			</div>

			<div className={classes.footer_wrap}>
				<div className={`${classes.footer} ${classes.wide}`}>
					<div className={classes.row}>
						<div className={classes.col_2}>
							<div className={classes.footer_title}>CHĂM SÓC KHÁCH HÀNG</div>
							<ul className={classes.footer_list}>
								<li className={classes.footer_item}>
									<span className={classes.footer_item__link}>Trung tâm trợ giúp</span>
								</li>
								<li className={classes.footer_item}>
									<span className={classes.footer_item__link}>Shopee Blog</span>
								</li>
								<li className={classes.footer_item}>
									<span className={classes.footer_item__link}>Shopee Mall</span>
								</li>
								<li className={classes.footer_item}>
									<span className={classes.footer_item__link}>Hướng dẫn mua hàng</span>
								</li>
								<li className={classes.footer_item}>
									<span className={classes.footer_item__link}>Hướng dẫn bán hàng</span>
								</li>
								<li className={classes.footer_item}>
									<span className={classes.footer_item__link}>Thanh toán</span>
								</li>
								<li className={classes.footer_item}>
									<span className={classes.footer_item__link}>Shopee Xu</span>
								</li>
								<li className={classes.footer_item}>
									<span className={classes.footer_item__link}>Vận chuyển</span>
								</li>
								<li className={classes.footer_item}>
									<span className={classes.footer_item__link}>Trả hàng {"&"} Hoàn tiền</span>
								</li>
								<li className={classes.footer_item}>
									<span className={classes.footer_item__link}>Chăm sóc khách hàng</span>
								</li>
								<li className={classes.footer_item}>
									<span className={classes.footer_item__link}>Chính sách bảo hành</span>
								</li>
							</ul>
						</div>

						<div className={classes.col_2}>
							<div className={classes.footer_title}>VỀ SHOPEE</div>
							<ul className={classes.footer_list}>
								<li className={classes.footer_item}>
									<span className={classes.footer_item__link}>Giới thiệu về Shopee Việt Nam</span>
								</li>
								<li className={classes.footer_item}>
									<span className={classes.footer_item__link}>Tuyển dụng</span>
								</li>
								<li className={classes.footer_item}>
									<span className={classes.footer_item__link}>Điều khoản shopee</span>
								</li>
								<li className={classes.footer_item}>
									<span className={classes.footer_item__link}>Chính sách bảo mật</span>
								</li>
								<li className={classes.footer_item}>
									<span className={classes.footer_item__link}>Chính hãng</span>
								</li>
								<li className={classes.footer_item}>
									<span className={classes.footer_item__link}>Kênh người bán</span>
								</li>
								<li className={classes.footer_item}>
									<span className={classes.footer_item__link}>Flash Sales</span>
								</li>
								<li className={classes.footer_item}>
									<span className={classes.footer_item__link}>Chương trình tiếp thị liên kết shopee</span>
								</li>
								<li className={classes.footer_item}>
									<span className={classes.footer_item__link}>Liên kết truyền thông</span>
								</li>
							</ul>
						</div>

						<div className={classes.col_2}>
							<div className={classes.footer_pay}>
								<div className={classes.footer_title}>THANH TOÁN</div>
								<ul className={classes.pay_list}>
									<li className={classes.pay_item}>
										<div className={`${classes.pay_item__logo} ${classes.logo_visa}`}></div>
									</li>
									<li className={classes.pay_item}>
										<div className={`${classes.pay_item__logo} ${classes.logo_mastercard}`}></div>
									</li>
									<li className={classes.pay_item}>
										<div className={`${classes.pay_item__logo} ${classes.logo_jcb}`}></div>
									</li>
									<li className={classes.pay_item}>
										<div className={`${classes.pay_item__logo} ${classes.logo_mex}`}></div>
									</li>
									<li className={classes.pay_item}>
										<div className={`${classes.pay_item__logo} ${classes.logo_cod}`}></div>
									</li>
									<li className={classes.pay_item}>
										<div className={`${classes.pay_item__logo} ${classes.logo_installment}`}></div>
									</li>
									<li className={classes.pay_item}>
										<div className={`${classes.pay_item__logo} ${classes.logo_homepay}`}></div>
									</li>
								</ul>
							</div>
							<div className={classes.footerShip}>
								<div className={classes.footer_title}>ĐƠN VỊ VẬN CHUYỂN</div>
								<ul className={classes.pay_list}>
									<li className={classes.pay_item}>
										<div className={`${classes.pay_item__logo} ${classes.logo_express}`}></div>
									</li>
									<li className={classes.pay_item}>
										<div className={`${classes.pay_item__logo} ${classes.logo_ghtk}`}></div>
									</li>
									<li className={classes.pay_item}>
										<div className={`${classes.pay_item__logo} ${classes.logo_ghn}`}></div>
									</li>
									<li className={classes.pay_item}>
										<div className={`${classes.pay_item__logo} ${classes.logo_vtpost}`}></div>
									</li>
									<li className={classes.pay_item}>
										<div className={`${classes.pay_item__logo} ${classes.logo_vnpost}`}></div>
									</li>
									<li className={classes.pay_item}>
										<div className={`${classes.pay_item__logo} ${classes.logo_jt}`}></div>
									</li>
									<li className={classes.pay_item}>
										<div className={`${classes.pay_item__logo} ${classes.logo_grap}`}></div>
									</li>
									<li className={classes.pay_item}>
										<div className={`${classes.pay_item__logo} ${classes.logo_ninja}`}></div>
									</li>
									<li className={classes.pay_item}>
										<div className={`${classes.pay_item__logo} ${classes.logo_best}`}></div>
									</li>
								</ul>
							</div>
						</div>

						<div className={classes.col_2}>
							<div className={classes.footer_title}>THEO DÕI CHÚNG TÔI TRÊN</div>
							<ul className={classes.footer_socials}>
								<li className={classes.footer_social}>
									<span className={classes.footer_social__link}>
										<div className={`${classes.footer_social__icon} ${classes.footer_social__facebook}`}></div>
										FaceBook
									</span>
								</li>
								<li className={classes.footer_social}>
									<span className={classes.footer_social__link}>
										<div className={`${classes.footer_social__icon} ${classes.footer_social__instagram}`}></div>
										Instagram
									</span>
								</li>
								<li className={classes.footer_social}>
									<span className={classes.footer_social__link}>
										<div className={`${classes.footer_social__icon} ${classes.footer_social__linked}`}></div>
										Linked
									</span>
								</li>
							</ul>
						</div>

						<div className={classes.col_2}>
							<div className={classes.footer_title}>TẢI ỨNG DỤNG SHOPEE NGAY THÔI</div>
							<div className={classes.footer_apps}>
								<img className={classes.footer_app__img} src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/39f189e19764dab688d3850742f13718.png" alt="App Store" />
								<img className={classes.footer_app__img} src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/f4f5426ce757aea491dce94201560583.png" alt="GooglePlay" />
								<img className={classes.footer_app__img} src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/1ae215920a31f2fc75b00d4ee9ae8551.png" alt="AppGallery" />
							</div>
						</div>
					</div>
				</div>

				<div className={`${classes.copyright} ${classes.wide}`}>
					<div className={classes.copyright_list}>
						<span className={classes.copyright_item}>
							<div className={classes.copyright_item__logo}></div>
						</span>
						<span className={classes.copyright_item}>
							<div className={classes.copyright_item__logo}></div>
						</span>
						<span className={classes.copyright_item}>
							<div className={`${classes.copyright_item__logo} ${classes.logo_nofake}`}></div>
						</span>
					</div>
					<div className={classes.copyright_text}>Công ty TNHH Shopee</div>
					<div className={classes.copyright_text}>Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn</div>
					<div className={classes.copyright_text}>Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024 73081221 (ext 4678)</div>
					<div className={classes.copyright_text}>Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch {"&"} Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015</div>
					<div className={classes.copyright_text}>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</div>
				</div>
			</div>

		</div>
	);
};

export default withStyles(styles)(Register);