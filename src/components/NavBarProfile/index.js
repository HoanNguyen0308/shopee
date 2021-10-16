import React, { useState } from 'react';
import { withStyles } from "@material-ui/core";
import styles from "./styles.js";
import { NavLink } from "react-router-dom";
import EditIcon from '@material-ui/icons/Edit';
import PersonIcon from '@material-ui/icons/Person';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Grid from "@material-ui/core/Grid";
import NotificationsIcon from '@material-ui/icons/Notifications';

const NavBarProfile = (props) => {
    const { classes } = props;
    const [open, setOpen] = useState(false);
    const [isShow, setIsShow] = useState(false);

    const handleClickProfile = () => {
        setOpen(!open);
    };

    const handleClickNotification = () => {
        setIsShow(!isShow);
    };

    return (
        <div className={classes.navbar}>
            <div className={classes.my_profile}>
                <NavLink to="/profile" className={classes.avatar_link}>
                    <img className={classes.avatar} src="https://cf.shopee.vn/file/a5a4753c0dfe674c5991773369e6dfb0_tn" alt="1a23" />
                </NavLink>
                <div className={classes.edit_wrap}>
                    <div className={classes.user_name}>Hoàn Nguyễn</div>
                    <NavLink to="/profile" className={classes.edit_link}>
                        <EditIcon className={classes.edit_icon}/>
                        Sửa hồ sơ
                    </NavLink>
                </div>
            </div>
                        
            <div className={classes.body}>
                <NavLink to="/profile" className={classes.account}>
                    <Grid>
                        <Grid className={classes.account_title} onClick={handleClickProfile}>
                            <PersonIcon className={`${classes.account_icon} ${classes.account_icon__profile}`}/>
                            <div className={classes.account_text}>Tài Khoản Của Tôi</div>
                        </Grid>

                        <Grid style={{display: open ? "none" : "block"}}>
                            <NavLink to="/profile" className={classes.ant_tab__link}>
                                <Grid className={classes.ant_tab__label}>Hồ Sơ</Grid>
                            </NavLink>

                            <NavLink to="/payment-profile" className={classes.ant_tab__link}>
                                <Grid className={classes.ant_tab__label}>Ngân Hàng</Grid>
                            </NavLink>

                            <NavLink to="/address-profile" className={classes.ant_tab__link}>
                                <Grid className={classes.ant_tab__label}>Địa Chỉ</Grid>
                            </NavLink>
                            
                            <NavLink to="/change-password-profile" className={classes.ant_tab__link}>
                                <Grid className={classes.ant_tab__label}>Đổi Mật Khẩu</Grid>
                            </NavLink>
                        </Grid>
                    </Grid>
                </NavLink>

                <div className={classes.navbar_item}>
                    <NavLink to="/purchase-order-profile" className={classes.item_link}>
                        <EventNoteIcon className={`${classes.item_icon} ${classes.item_purchase}`}/>
                        <div className={classes.account_text}>Đơn Mua</div>
                    </NavLink>
                </div>

                <NavLink to="/profile" className={classes.account}>
                    <Grid>
                        <Grid className={classes.account_title} onClick={handleClickNotification}>
                            <NotificationsIcon className={`${classes.account_icon} ${classes.account_icon__notification}`}/>
                            <div className={classes.account_text}>Thông Báo</div>
                        </Grid>
                        <Grid style={{display: isShow ? "none" : "block"}}>
                            <NavLink to="/order-update" className={classes.ant_tab__link}>
                                <Grid className={classes.ant_tab__label}>Cập nhật đơn hàng</Grid>
                            </NavLink>

                            <NavLink to="/order-sale" className={classes.ant_tab__link}>
                                <Grid className={classes.ant_tab__label}>Khuyến mãi</Grid>
                            </NavLink>

                            <NavLink to="/wallet-update" className={classes.ant_tab__link}>
                                <Grid className={classes.ant_tab__label}>Cập nhật ví</Grid>
                            </NavLink>

                            <NavLink to="/action-comment" className={classes.ant_tab__link}>
                                <Grid className={classes.ant_tab__label}>Hoạt động</Grid>
                            </NavLink>

                            <NavLink to="/review-update" className={classes.ant_tab__link}>
                                <Grid className={classes.ant_tab__label}>Cập nhật đánh giá</Grid>
                            </NavLink>

                            <NavLink to="/shopee-update" className={classes.ant_tab__link}>
                                <Grid className={classes.ant_tab__label}>Cập nhật shopee</Grid>
                            </NavLink>
                        </Grid>
                    </Grid>
                </NavLink>

                <div className={classes.navbar_item}>
                    <NavLink to="/store-voucher-profile" className={classes.item_link}>
                        <ConfirmationNumberIcon className={`${classes.item_icon} ${classes.item_store}`}/>
                        <div className={classes.account_text}>Kho Voucher</div>
                    </NavLink>
                </div>

                <div className={classes.navbar_item}>
                    <NavLink to="/shopee-xu-profile" className={classes.item_link}>
                        <MonetizationOnIcon className={`${classes.item_icon} ${classes.item_xu}`}/>
                        <div className={classes.account_text}>Shopee Xu</div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
};

export default withStyles(styles)(NavBarProfile);
