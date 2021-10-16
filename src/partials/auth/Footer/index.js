import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.js";

const Footer = (props) => {
  	const { classes } = props;

  	return (
		<div className={classes.footerWrap}>
			<div className={`${classes.footer} ${classes.wide}`}>
				<div className={classes.row}>
				<div className={classes.col_2}>
					<div className={classes.footerTitle}>CHĂM SÓC KHÁCH HÀNG</div>
					<ul className={classes.footerList}>
					<li className={classes.footerItem}>
						<span className={classes.footerItemLink}>
						Trung tâm trợ giúp
						</span>
					</li>
					<li className={classes.footerItem}>
						<span className={classes.footerItemLink}>Shopee Blog</span>
					</li>
					<li className={classes.footerItem}>
						<span className={classes.footerItemLink}>Shopee Mall</span>
					</li>
					<li className={classes.footerItem}>
						<span className={classes.footerItemLink}>
						Hướng dẫn mua hàng
						</span>
					</li>
					<li className={classes.footerItem}>
						<span className={classes.footerItemLink}>
						Hướng dẫn bán hàng
						</span>
					</li>
					<li className={classes.footerItem}>
						<span className={classes.footerItemLink}>Thanh toán</span>
					</li>
					<li className={classes.footerItem}>
						<span className={classes.footerItemLink}>Shopee Xu</span>
					</li>
					<li className={classes.footerItem}>
						<span className={classes.footerItemLink}>Vận chuyển</span>
					</li>
					<li className={classes.footerItem}>
						<span className={classes.footerItemLink}>
						Trả hàng {"&"} Hoàn tiền
						</span>
					</li>
					<li className={classes.footerItem}>
						<span className={classes.footerItemLink}>
						Chăm sóc khách hàng
						</span>
					</li>
					<li className={classes.footerItem}>
						<span className={classes.footerItemLink}>
						Chính sách bảo hành
						</span>
					</li>
					</ul>
				</div>

				<div className={classes.col_2}>
					<div className={classes.footerTitle}>VỀ SHOPEE</div>
					<ul className={classes.footerList}>
					<li className={classes.footerItem}>
						<span className={classes.footerItemLink}>
						Giới thiệu về Shopee Việt Nam
						</span>
					</li>
					<li className={classes.footerItem}>
						<span className={classes.footerItemLink}>Tuyển dụng</span>
					</li>
					<li className={classes.footerItem}>
						<span className={classes.footerItemLink}>
						Điều khoản shopee
						</span>
					</li>
					<li className={classes.footerItem}>
						<span className={classes.footerItemLink}>
						Chính sách bảo mật
						</span>
					</li>
					<li className={classes.footerItem}>
						<span className={classes.footerItemLink}>Chính hãng</span>
					</li>
					<li className={classes.footerItem}>
						<span className={classes.footerItemLink}>Kênh người bán</span>
					</li>
					<li className={classes.footerItem}>
						<span className={classes.footerItemLink}>Flash Sales</span>
					</li>
					<li className={classes.footerItem}>
						<span className={classes.footerItemLink}>
						Chương trình tiếp thị liên kết shopee
						</span>
					</li>
					<li className={classes.footerItem}>
						<span className={classes.footerItemLink}>
						Liên kết truyền thông
						</span>
					</li>
					</ul>
				</div>

				<div className={classes.col_2}>
					<div className={classes.footerPay}>
					<div className={classes.footerTitle}>THANH TOÁN</div>
					<ul className={classes.payList}>
						<li className={classes.payItem}>
						<div
							className={`${classes.payItemLogo} ${classes.logoVisa}`}
						></div>
						</li>
						<li className={classes.payItem}>
						<div
							className={`${classes.payItemLogo} ${classes.logoMastercard}`}
						></div>
						</li>
						<li className={classes.payItem}>
						<div
							className={`${classes.payItemLogo} ${classes.logoJCB}`}
						></div>
						</li>
						<li className={classes.payItem}>
						<div
							className={`${classes.payItemLogo} ${classes.logoMex}`}
						></div>
						</li>
						<li className={classes.payItem}>
						<div
							className={`${classes.payItemLogo} ${classes.logoCod}`}
						></div>
						</li>
						<li className={classes.payItem}>
						<div
							className={`${classes.payItemLogo} ${classes.logoInstallment}`}
						></div>
						</li>
						<li className={classes.payItem}>
						<div
							className={`${classes.payItemLogo} ${classes.logoHomePay}`}
						></div>
						</li>
					</ul>
					</div>
					<div className={classes.footerShip}>
					<div className={classes.footerTitle}>ĐƠN VỊ VẬN CHUYỂN</div>
					<ul className={classes.payList}>
						<li className={classes.payItem}>
						<div
							className={`${classes.payItemLogo} ${classes.logoExpress}`}
						></div>
						</li>
						<li className={classes.payItem}>
						<div
							className={`${classes.payItemLogo} ${classes.logoGHTK}`}
						></div>
						</li>
						<li className={classes.payItem}>
						<div
							className={`${classes.payItemLogo} ${classes.logoGHN}`}
						></div>
						</li>
						<li className={classes.payItem}>
						<div
							className={`${classes.payItemLogo} ${classes.logoVTPost}`}
						></div>
						</li>
						<li className={classes.payItem}>
						<div
							className={`${classes.payItemLogo} ${classes.logoVNPost}`}
						></div>
						</li>
						<li className={classes.payItem}>
						<div
							className={`${classes.payItemLogo} ${classes.logoJT}`}
						></div>
						</li>
						<li className={classes.payItem}>
						<div
							className={`${classes.payItemLogo} ${classes.logoGrap}`}
						></div>
						</li>
						<li className={classes.payItem}>
						<div
							className={`${classes.payItemLogo} ${classes.logoNinja}`}
						></div>
						</li>
						<li className={classes.payItem}>
						<div
							className={`${classes.payItemLogo} ${classes.logoBest}`}
						></div>
						</li>
					</ul>
					</div>
				</div>

				<div className={classes.col_2}>
					<div className={classes.footerTitle}>THEO DÕI CHÚNG TÔI TRÊN</div>
					<ul className={classes.footerSocials}>
					<li className={classes.footerSocial}>
						<span className={classes.footerSocialLink}>
						<div
							className={`${classes.footerSocialIcon} ${classes.footerSocialFacebook}`}
						></div>
						FaceBook
						</span>
					</li>
					<li className={classes.footerSocial}>
						<span className={classes.footerSocialLink}>
						<div
							className={`${classes.footerSocialIcon} ${classes.footerSocialInstagram}`}
						></div>
						Instagram
						</span>
					</li>
					<li className={classes.footerSocial}>
						<span className={classes.footerSocialLink}>
						<div
							className={`${classes.footerSocialIcon} ${classes.footerSocialLinked}`}
						></div>
						Linked
						</span>
					</li>
					</ul>
				</div>

				<div className={classes.col_2}>
					<div className={classes.footerTitle}>
					TẢI ỨNG DỤNG SHOPEE NGAY THÔI
					</div>
					<div className={classes.footerApps}>
					<img
						className={classes.footerAppImg}
						src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/39f189e19764dab688d3850742f13718.png"
						alt="App Store"
					/>
					<img
						className={classes.footerAppImg}
						src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/f4f5426ce757aea491dce94201560583.png"
						alt="GooglePlay"
					/>
					<img
						className={classes.footerAppImg}
						src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/1ae215920a31f2fc75b00d4ee9ae8551.png"
						alt="AppGallery"
					/>
					</div>
				</div>
				</div>
			</div>

			<div className={`${classes.scopyright} ${classes.wide}`}>
			<div className={classes.copyrightList}>
			<span className={classes.copyrightItem}>
				<div className={classes.copyrightItemLogo}></div>
			</span>
			<span className={classes.copyrightItem}>
				<div className={classes.copyrightItemLogo}></div>
			</span>
			<span className={classes.copyrightItem}>
				<div
				className={`${classes.copyrightItemLogo} ${classes.logoNoFake}`}
				></div>
			</span>
			</div>
			<div className={classes.copyrightText}>Công ty TNHH Shopee</div>
			<div className={classes.copyrightText}>
			Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai,
			Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng đài
			hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
			</div>
			<div className={classes.copyrightText}>
			Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên
			hệ: 024 73081221 (ext 4678)
			</div>
			<div className={classes.copyrightText}>
			Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch {"&"} Đầu tư TP Hà Nội
			cấp lần đầu ngày 10/02/2015
			</div>
			<div className={classes.copyrightText}>
			© 2015 - Bản quyền thuộc về Công ty TNHH Shopee
			</div>
		</div>
		</div>
  	);
};

export default withStyles(styles)(Footer);
