import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.js";
import Header from "../../partials/shopee/Header";
import NavBarProfile from "../../components/NavBarProfile";
import Footer from "../../partials/auth/Footer";

const WalletUpdate = (props) => {
    const { classes } = props;

    const [showComment, setShowComment] = React.useState(false);

    const handleComment = () => {
        setShowComment(!showComment);
    };

    return (
        <div className={classes.order_update}>
            <Header />

            <div className={classes.container}>
                <div className={classes.wide}>
                    <NavBarProfile />
                    
                    <div className={classes.content}>
                        <div className={classes.header}>
                            <div className={classes.header_left}>
                                <input onClick={() => {handleComment()}} type="checkbox" className={classes.header_input}/>
                                <p className={classes.header_text}>Chưa có bình luận</p>
                            </div>
                            <p className={classes.header_right}>Đánh dấu đã đọc tất cả</p>
                        </div>

                        <div className={classes.body}>
                            <img className={classes.body_img} src={showComment ? "https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/fa4e2b534c2928596a6deded9c730a21.png" : "https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/d3eb7b91baeb280516583f958b10f601.png"} alt="wallet-update"/>
                            <p className={classes.body_text}>{showComment ? "Chưa có hoạt động" : "Chưa có bình luận"}</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default withStyles(styles)(WalletUpdate);