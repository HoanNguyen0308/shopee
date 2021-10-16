import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Header from "../../partials/shopee/Header";
import NavBarProfile from "../../components/NavBarProfile";
import Footer from "../../partials/auth/Footer";

const MyPhone = (props) => {
    const { classes } = props;

    return (
        <div className={classes.add_phone}>
            <Header />
            <div className={classes.container}>
                <div className={classes.wide}>
                    <NavBarProfile />
                    
                    <div className={classes.content}>
                        <div className={classes.header}>
                            <h1 className={classes.header_heading}>Nhập Số Điện Thoại</h1>
                            <div className={classes.header_description}>Để bảo mật được tốt hơn, vui lòng làm theo những bước dưới đây để nhập số điện thoại.</div> 
                        </div>

                        <div className={classes.body}>
                            <form className={classes.form}>
                                <div className={classes.field_wrap}>
                                    <div className={classes.field}>
                                        <div className={classes.field_title}>
                                            <label className={classes.field_label}>Số Điện Thoại Mới</label>
                                        </div>
                                        <div className={classes.field_input__wrap}>
                                            <input type="text" className={classes.field_input} placeholder="Nhập số điện thoại của bạn"></input>
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
                                                    <input className={classes.input_confirm} placeholder="Mã xác minh"></input>
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
    );
};

export default withStyles(styles)(MyPhone);