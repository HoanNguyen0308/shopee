import React from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles.js";
import Header from "../../partials/shopee/Header";
import NavBarProfile from "../../components/NavBarProfile";
import Footer from "../../partials/auth/Footer";
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}
  
const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 520,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const PaymentProfile = (props) => {
    const { classes } = props;
    const classesModal = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [isShow, setIsShow] = React.useState(false);

    const handleOpenPayment = () => {
        setOpen(true);
    };

    const handleClosePayment = () => {
        setOpen(false);
    };

    const handleOpenBank = () => {
        setIsShow(true);
    };

    const handleCloseBank = () => {
        setIsShow(false);
    };


    const payment = (
        <div style={modalStyle} className={`${classesModal.paper} ${classes.paper}`}>
            <div className={classes.modal}>
                <div className={classes.payment_channel}>
                    <div className={classes.payment_heading}>Thêm Thẻ</div>
                    <div className={classes.payment_content}>
                        <div className={classes.security}>
                            <VerifiedUserIcon className={classes.security_icon}/>
                            <div className={classes.security_text}>
                                <div className={classes.security_text__up}>Thông tin thẻ của bạn được bảo mật.</div>
                                <div className={classes.security_text__down}>Chúng tôi hợp tác với CyberSource để đảm bảo thông tin thẻ của bạn được giữ an toàn và bảo mật. Shopee sẽ không có quyền truy cập vào thông tin thẻ của bạn.</div>
                            </div>
                        </div>
                        
                        <div className={classes.payment_block}>
                            <div className={classes.block_title}>Chi tiết thẻ</div>
                            <div className={classes.block_input__wrap}>
                                <input className={classes.block_input} placeholder="Họ tên trên thẻ" type="text"></input>
                            </div>
                            <div className={classes.credit}>
                                <div className={`${classes.block_input__wrap} ${classes.credit_input}`}>
                                    <input className={classes.block_input} placeholder="Số thẻ" type="text"></input>
                                </div>
                                <div className={classes.credit_list}>
                                    <div className={`${classes.credit_item} ${classes.credit_item__visa}`}></div>
                                    <div className={`${classes.credit_item} ${classes.credit_item__round}`}></div>
                                    <div className={`${classes.credit_item} ${classes.credit_item__jcb}`}></div>
                                    <div className={`${classes.credit_item} ${classes.credit_item__express}`}></div>
                                </div>
                            </div>
                            <div className={classes.inputs}>
                                <div className={`${classes.block_input__wrap} ${classes.wrap_left}`}>
                                    <input className={classes.block_input} placeholder="Ngày hết hạn (MM / YY)" type="text"></input>
                                </div>
                                <div className={`${classes.block_input__wrap} ${classes.wrap_right}`}>
                                    <input className={classes.block_input} placeholder="Mã CVV" type="text"></input>
                                </div>
                            </div>
                        </div>

                        <div className={classes.payment_block}>
                            <div className={classes.block_title}>Địa chỉ đăng ký thẻ tín dụng/ghi nợ</div>
                            <div className={classes.block_input__wrap}>
                                <input className={classes.block_input} placeholder="Địa chỉ hóa đơn" type="text"></input>
                            </div>
                            <div className={classes.block_input__wrap}>
                                <input className={classes.block_input} placeholder="Postal Code" type="text"></input>
                            </div>
                        </div>

                        <div className={classes.block_buttons}>
                            <button onClick={handleClosePayment} className={classes.button_back}>Trở Lại</button>
                            <button className={classes.button_submit} disabled>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const bank = (
        <div style={modalStyle} className={`${classesModal.paper} ${classes.paper}`}>
            <div className={classes.modal}>
                <div className={classes.payment_channel}>
                    <div className={classes.payment_heading}>Thông tin người dùng</div>
                </div>
                <div className={classes.payment_block}>
                    <div className={classes.block_input__wrap}>
                        <input className={classes.block_input} placeholder="Tên" type="text"></input>
                    </div>
                    <div className={classes.block_input__wrap}>
                        <input className={classes.block_input} placeholder="Số CMND" type="text"></input>
                    </div>
                </div>
                <div className={classes.block_buttons}>
                    <button onClick={handleCloseBank} className={classes.button_back}>Trở Lại</button>
                    <button className={`${classes.button_back} ${classes.button_complete}`} disabled>Hoàn Thành</button>
                </div>
            </div>
        </div>
    );

    return (
        <div className={classes.payment}>
            <Header />
            <div className={classes.container}>
                <div className={classes.wide}>
                    <NavBarProfile />
                    
                    <div className={classes.content}>
                        <div className={classes.header}>
                            <div className={classes.header_heading}>Thẻ Tín Dụng/Ghi Nợ</div>
                            
                            <div>
                                <button type="button" onClick={handleOpenPayment} className={classes.header_button}>
                                    <AddIcon className={classes.header_icon}/>
                                    <div className={classes.header_button__text}>Thêm Thẻ Mới</div>
                                </button>
                                <Modal
                                    open={open}
                                    onClose={handleClosePayment}
                                    aria-labelledby="simple-modal-title"
                                    aria-describedby="simple-modal-description"
                                >
                                    {payment}
                                </Modal>
                            </div>
                        </div>
                        <div className={classes.payment_body}>Bạn chưa liên kết thẻ.</div>
                    
                        <div className={classes.header}>
                            <div className={classes.header_heading}>Tài Khoản Ngân Hàng Của Tôi</div>
                            
                            <div>
                                <button type="button" onClick={handleOpenBank} className={classes.header_button}>
                                    <AddIcon className={classes.header_icon}/>
                                    <div className={classes.header_button__text}>Thêm Tài Khoản Ngân Hàng</div>
                                </button>
                                <Modal
                                    open={isShow}
                                    onClose={handleCloseBank}
                                    aria-labelledby="simple-modal-title"
                                    aria-describedby="simple-modal-description"
                                >
                                    {bank}
                                </Modal>
                            </div>
                        </div>
                        <div className={classes.payment_body}>Bạn chưa có tài khoản ngân hàng.</div>
                    
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default withStyles(styles)(PaymentProfile);