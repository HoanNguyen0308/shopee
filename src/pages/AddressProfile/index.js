import React from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles.js";
import Header from "../../partials/shopee/Header";
import NavBarProfile from "../../components/NavBarProfile";
import Footer from "../../partials/auth/Footer";
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';

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

const AddressProfile = (props) => {
    const { classes } = props;
    const classesModal = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    const address = (
        <div style={modalStyle} className={`${classesModal.paper} ${classes.paper}`}>
            <div className={classes.modal}>
                <div className={classes.payment_channel}>
                    <div className={classes.payment_heading}>Địa Chỉ Mới</div>
                
                    <div className={classes.payment_block}>
                        <div className={classes.inputs}>
                            <div className={`${classes.block_input__wrap} ${classes.wrap_left}`}>
                                <input className={classes.block_input} placeholder="Ngày hết hạn (MM / YY)" type="text"></input>
                            </div>
                            <div className={`${classes.block_input__wrap} ${classes.wrap_right}`}>
                                <input className={classes.block_input} placeholder="Mã CVV" type="text"></input>
                            </div>
                        </div>
                        <div className={classes.block_input__wrap}>
                                <input className={classes.block_input} placeholder="Tỉnh/Thành phố, Quận/Huyện, Phường/Xã" type="text"></input>
                        </div>
                        <div className={classes.block_input__wrap}>
                                <input className={classes.block_input} placeholder="Địa chỉ cụ thể" type="text"></input>
                        </div>
                    </div>
                    <div className={classes.payment_block}>
                        <div className={classes.map_address__wrap}>
                            <img src="/images/shopees/map_address.png" className={classes.map_address} alt="map-address"/>
                            <button type="button" className={`${classes.header_button} ${classes.map_address__button}`}>
                                <AddIcon className={classes.header_icon}/>
                                <div className={classes.header_button__text}>Thêm vị trí</div>
                            </button>
                        </div>
                        <div className={classes.block_title}>Loại địa chỉ</div>
                        <button className={classes.button_address}>Nhà Riêng</button>
                        <button className={classes.button_address}>Văn Phòng</button>
                        <div className={classes.address_checkbox__wrap}>
                            <input className={classes.address_checkbox} type="checkbox" checked/>
                            <div className={classes.address_checkbox__text}>Đặt làm địa chỉ mặc định</div>
                        </div>
                    </div>
                    <div className={classes.block_buttons}>
                            <button onClick={handleClose} className={classes.button_back}>Trở Lại</button>
                            <button className={classes.button_submit} disabled>Hoàn Thành</button>
                    </div>
                </div>
            </div>
        </div>
    ); 

    return (
        <div className={classes.profile}>
            <Header />
            <div className={classes.container}>
                <div className={classes.wide}>
                    <NavBarProfile />
                    
                    <div className={classes.content}>
                        <div className={classes.header}>
                            <div className={classes.header_heading}>Thẻ Tín Dụng/Ghi Nợ</div>

                            <div>
                                <button type="button" onClick={handleOpen} className={classes.header_button}>
                                    <AddIcon className={classes.header_icon}/>
                                    <div className={classes.header_button__text}>Thêm Địa Chỉ Mới</div>
                                </button>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="simple-modal-title"
                                    aria-describedby="simple-modal-description"
                                >
                                    {address}
                                </Modal>
                            </div>
                        </div>
                        <div className={classes.payment_body}>Bạn chưa có địa chỉ.</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default withStyles(styles)(AddressProfile);