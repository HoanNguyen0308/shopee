import React from 'react';
import styles from './styles.js'
import { withStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import SpeakerNotesOutlinedIcon from '@material-ui/icons/SpeakerNotesOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

const PurcharseOrderProduct = props => {
    const { classes } = props;
    const font16 = {fontSize: '16px'}
    return(
        <div className={classes.product}>
            <div className={classes.header}>
                <ul className={classes.headerShop}>
                    <li className={classes.favourte}>Yêu thích+</li>
                    <li className={classes.shopName}>thegioididong.io</li>
                    <li className={classes.chat}>
                        <Link to="/purcharse">
                            <SpeakerNotesOutlinedIcon style={font16} />
                            Chat
                        </Link>
                    </li>
                    <li className={classes.visit}>
                        <Link to="/purcharse">
                            <StorefrontOutlinedIcon style={font16}/>
                            Xem Shop
                        </Link>
                    </li>
                </ul>
                <ul className={classes.headerShip}>
                    <li className={classes.ship}>
                        <Link to="/purcharse">
                            <LocalShippingOutlinedIcon style={{ fontSize: '22px', marginRight: '5px'}} />
                            Giao hàng thành công
                        </Link>
                    </li>
                    <li className={classes.help}>
                        <HelpOutlineOutlinedIcon style={font16} />
                    </li>
                    <li>ĐÃ ĐÁNH GIÁ</li>
                </ul>
            </div>
            <Link to="/ship" className={classes.body}>
                <div className={classes.sanpham}>
                    <div className={classes.wrapImg}>
                        <div className={classes.img}></div>
                    </div>
                    <div className={classes.info}>
                        <div className={classes.title}>
                            Combo Loa Đài Craven nghe thẻ nhớ, USB, FM, Máy nghe nhạc mini Tắm Ngôn Ngữ Caraven CR 853 3 Pin
                        </div>
                        <div className={classes.classify}>
                            Phân loại hàng: 853+sạc đen+thẻ 8gb
                        </div>
                        <div className={classes.quantity}>
                            x1
                        </div>
                    </div>
                </div>
                <div className={classes.price}>
                    <div className={classes.priceOld}>
                        <sup>đ</sup>250.000
                    </div>
                    <div className={classes.priceCurrent}>
                    <sup>đ</sup>220.000
                    </div>
                </div>
            </Link>
            <div className={classes.footer}>
                <div className={classes.total}>
                    <MonetizationOnIcon style={{fontSize: '22px'}} />
                    <p>Tổng số tiền là:</p> 
                    <span><sup>đ</sup>220.000</span>
                </div>
                <div className={classes.feature}>
                    <div className={`${classes.button} ${classes.primaryBtn}`}>Mua lại</div>
                    <div className={classes.button}>Liên hệ người bán</div>
                    <div className={classes.more}>
                        <div className={classes.button}>
                            Thêm <ExpandMoreOutlinedIcon style={{fontSize: '20px'}} />
                        </div>
                        <ul className={classes.listMore}>
                            <li>Xem đánh giá người mua</li>
                            <li>Xem đánh giá shop</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(PurcharseOrderProduct);
