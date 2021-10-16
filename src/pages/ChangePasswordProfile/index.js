import React from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles.js";
import Header from "../../partials/shopee/Header";
import NavBarProfile from "../../components/NavBarProfile";
import Footer from "../../partials/auth/Footer";

const ChangePasswordProfile = (props) => {
    const { classes } = props;

    return (
        <div className={classes.change_password}>
            <Header />  
            <div className={classes.container}>
                <div className={classes.wide}>
                    <NavBarProfile />
                    
                    <div className={classes.content}>
                        <div className={classes.header}>
                            <h1 className={classes.header_heading}>Thêm Mật Khẩu</h1>
                            <div className={classes.header_description}>Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác</div> 
                        </div>

                        <div className={classes.body}>
                            <form className={classes.form}>
                                <div className={classes.field_wrap}>
                                    <div className={classes.field}>
                                        <div className={classes.field_title}>
                                            <label className={classes.field_label}>Số Điện Thoại Mới</label>
                                        </div>
                                        <div className={classes.field_input__wrap}>
                                            <input type="text" className={classes.field_input} />
                                        </div>
                                    </div>
                                </div> 
                                <div className={classes.field_wrap}>
                                    <div className={classes.field}>
                                        <div className={classes.field_title}>
                                            <label className={classes.field_label}>Xác Nhận Mật Khẩu</label>
                                        </div>
                                        <div className={classes.field_input__wrap}>
                                            <input type="text" className={classes.field_input} />
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.field_wrap}>
                                    <div className={classes.field}>
                                        <div className={classes.field_title}>
                                            <label className={classes.field_label}>Mã Xác Minh</label>
                                        </div>
                                        <div className={classes.confirm_block__wrap}>
                                            <div className={classes.confirm_block}>
                                                <div className={classes.input_confirm__wrap}>
                                                    <input className={classes.input_confirm} />
                                                </div>
                                                <button className={classes.button_confirm} disabled>Gửi mã xác minh</button>
                                            </div>  
                                        </div>
                                    </div>
                                </div>  
                                <div className={classes.button_end__wrap}>
                                    <button className={classes.button_end}>XÁC NHẬN</button>
                                </div> 
                            </form>
                        </div> 
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default withStyles(styles)(ChangePasswordProfile);