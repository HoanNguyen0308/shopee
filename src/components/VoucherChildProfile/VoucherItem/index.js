import React from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles.js";
import { NavLink } from "react-router-dom";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const VoucherItem = (props) => {
    const { classes, voucher } = props;
    
    return (
        <did className={classes.voucher}>
            <div className={classes.voucher_left}>
                <div className={classes.left_img} style={{backgroundImage: `url(${voucher.img})`}}></div>
                <div className={classes.left_text}>Thời Trang</div> 
                <div className={classes.left_dashed}></div>
            </div>

            <div className={classes.voucher_right}>
                <div className={classes.right_detail}>
                    <div className={classes.right_detail__up}>Giảm ₫25k</div>
                    <div className={classes.right_detail__center}>Đơn Tối Thiểu ₫150k</div>
                    <span className={classes.right_detail__down}>Có Hiệu Lực Từ: 24.09.2021 00:00</span>
                </div>
                
                <div className={classes.right_bonus}>
                    <NavLink to="/user-voucher" className={classes.bonus_up}>
                        <div className={classes.bonus_up__text}>Dùng ngay</div>
                        <ChevronRightIcon className={classes.bonus_up__icon} />
                    </NavLink>
                    <NavLink to="/condition-voucher" className={classes.bonus_down}>Điều kiện</NavLink>
                </div>
            </div>
        
            <div className={classes.voucher_label}>Số lượng có hạn
                <div className={classes.voucher_label__after}></div>
            </div>
        </did>      
    );
};

export default withStyles(styles)(VoucherItem);