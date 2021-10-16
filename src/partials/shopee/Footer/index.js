import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.js";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const Footer = (props) => {
  const { classes } = props;

  return (
    <footer className={classes.main}>
        <div className={classes.footer}>
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <h3 className={classes.footer__heading}>Chăm sóc khách hàng</h3>
                    <ul className={classes.footer_list}>
                        <li className={classes.footer_item}>
                            <Link to="/footer" className={classes.footer_item__link}>Trung tâm trợ giúp</Link>
                        </li>
                        <li className={classes.footer_item}>
                            <Link to="/footer" className={classes.footer_item__link}>F8-Shop Mail</Link>
                        </li>
                        <li className={classes.footer_item}>
                            <Link to="/footer" className={classes.footer_item__link}>Hướng dẫn mua hàng</Link>
                        </li>
                    </ul>
                </Grid>

                <Grid item xs={2}>
                    <h3 className={classes.footer__heading}>Giới thiệu</h3>
                    <ul className={classes.footer_list}>
                        <li className={classes.footer_item}>
                            <Link to="/footer" className={classes.footer_item__link}>Giới thiệu</Link>
                        </li>
                        <li className={classes.footer_item}>
                            <Link to="/footer" className={classes.footer_item__link}>Tuyển dụng</Link>
                        </li>
                        <li className={classes.footer_item}>
                            <Link to="/footer" className={classes.footer_item__link}>Điều khoản</Link>
                        </li>
                    </ul>
                </Grid>

                <Grid item xs={2}>
                    <h3 className={classes.footer__heading}>Danh mục</h3>
                    <ul className={classes.footer_list}>
                        <li className={classes.footer_item}>
                            <Link to="/footer" className={classes.footer_item__link}>Trang phục nữ</Link>
                        </li>
                        <li className={classes.footer_item}>
                            <Link to="/footer" className={classes.footer_item__link}>Mĩ phẫm nam giới</Link>
                        </li>
                        <li className={classes.footer_item}>
                            <Link to="/footer" className={classes.footer_item__link}>Mĩ phẫm nữ giới</Link>
                        </li>
                    </ul>
                </Grid>

                <Grid item xs={2}>
                    <h3 className={classes.footer__heading}>Theo dõi</h3>
                    <ul className={classes.footer_list}>
                        <li className={classes.footer_item}>
                            <Link to="/footer" className={classes.footer_item__link}>
                                <i className="footer-item__icon fab fa-facebook"></i>
                                Facebook
                            </Link>
                        </li>
                        <li className={classes.footer_item}>
                            <Link to="/footer" className={classes.footer_item__link}>
                                <i className="footer-item__icon fab fa-instagram"></i>
                                Instagram
                            </Link>
                        </li>
                        <li className={classes.footer_item}>
                            <Link to="/footer" className={classes.footer_item__link}>
                                <i className="footer-item__icon fab fa-linkedin"></i>
                                Linkedin
                            </Link>
                        </li>
                    </ul>
                </Grid>

                <Grid item xs={4}>
                    <h3 className={classes.footer__heading}>Vào cửa hàng trên ứng dụng</h3>
                    <div className={classes.footer__download}>
                        <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/d91264e165ed6facc6178994d5afae79.png" alt="Download QR" className={classes.footer__download_qr} />
                        <div className={classes.footer__download_apps}>
                            <Link to="/footer" className={classes.footer__download_app_link}>
                                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/39f189e19764dab688d3850742f13718.png" alt="Google Play" className={classes.footer__download_app_img} />
                            </Link>
                            <Link to="/footer" className={classes.footer__download_app_link}>
                                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/f4f5426ce757aea491dce94201560583.png" alt="App Store" className={classes.footer__download_app_img} />
                            </Link>
                            <Link to="/footer" className={classes.footer__download_app_link}>
                                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/1ae215920a31f2fc75b00d4ee9ae8551.png" alt="App Store" className={classes.footer__download_app_img} />
                            </Link>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
        
        <div className={classes.footer__bottom}>
            <div className={classes.footer__content}>
                <p className={classes.footer__copyright_text}>© 2021 - Bản quyền thuộc về Hoàn Nguyễn</p>
            </div>
        </div>
    </footer>
  );
};

export default withStyles(styles)(Footer);
