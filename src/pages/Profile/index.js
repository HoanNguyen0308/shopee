import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.js";
import Header from "../../partials/shopee/Header";
import NavBarProfile from "../../components/NavBarProfile";
import Footer from "../../partials/auth/Footer";
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

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
        width: 450,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const date = [
    { title: "1"}, { title: "2"}, { title: "3"}, { title: "4"}, { title: "5"}, { title: "6"}, { title: "7"}, { title: "8"}, { title: "9"}, { title: "10"}, { title: "11"}, { title: "12"}, { title: "13"}, { title: "14"}, { title: "15"}, { title: "16"}, { title: "17"}, { title: "18"}, { title: "19"}, { title: "20"}, { title: "21"}, { title: "22"}, { title: "23"}, { title: "24"}, { title: "25"}, { title: "26"}, { title: "27"}, { title: "28"}, { title: "29"}, { title: "30"}, { title: "31"},
];

const month = [
    { title: "1"}, { title: "2"}, { title: "3"}, { title: "4"}, { title: "5"}, { title: "6"}, { title: "7"}, { title: "8"}, { title: "9"}, { title: "10"}, { title: "11"}, { title: "12"},
];

const year = [
    { title: "1990"}, { title: "1991"}, { title: "1992"}, { title: "1993"}, { title: "1994"}, { title: "1995"}, { title: "1996"}, { title: "1997"}, { title: "1998"}, { title: "1999"}, { title: "2000"}, { title: "2001"}, { title: "2002"}, { title: "2003"}, { title: "2004"}, { title: "2005"}, { title: "2006"}, { title: "2007"}, { title: "2008"}, { title: "2009"}, { title: "2010"},
];

const Profile = (props) => {
    const { classes } = props;
    const classesModal = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [isShow, setIsShow] = React.useState(false);
    
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpenSave = () => {
        setIsShow(true);
    }

    const handleCloseSave = () => {
        setIsShow(false);
    }

    const body = (
        <div style={modalStyle} className={`${classesModal.paper} ${classes.paper}`}>
            <div className={classes.paper_header}>
                <HighlightOffIcon className={classes.paper_icon}/>
                <div className={classes.paper_title}>Xác thực thất bại</div>
            </div>
            <div className={classes.paper_description}>
                Để bảo mật tài khoản, đầu tiên vui lòng cài đặt mật khẩu cho tài khoản của bạn
            </div>
            <NavLink to="/change-password-profile">
                <button className={classes.paper_button}>OK</button>
            </NavLink>
        </div>
    );

    const update = (
        <div style={modalStyle} className={`${classesModal.paper} ${classes.paper}`}>
            <div className={classes.save_wrap}>
                <CheckCircleOutlineIcon className={classes.save_icon}/>
                <div className={classes.save_text}>Cập nhập hồ sơ</div>
            </div>
        </div>
    );

    return (
        <div className={classes.my_file}>
            <Header />
            <div className={classes.container}>
                <div className={classes.wide}>
                    <NavBarProfile />
                    
                    <div className={classes.content}>
                        <div className={classes.header}>
                            <h1 className={classes.header_heading}>Hồ Sơ Của Tôi</h1>
                            <div className={classes.header_description}>Quản lý thông tin hồ sơ để bảo mật tài khoản</div> 
                        </div>

                        <div className={classes.body}>
                            <div className={classes.body_left}>
                                <form className={classes.form}>
                                    <div className={classes.field_wrap}>
                                        <div className={classes.field}>
                                            <div className={classes.field_title}>
                                                <label className={classes.field_label}>Tên Đăng Nhập</label>
                                            </div>
                                            <div className={classes.field_input__wrap}>
                                                <input type="text" className={classes.field_input} placeholder="Nhập tên đăng nhập"></input>
                                            </div>
                                        </div>
                                        <div className={classes.field_note}>Tên đăng nhập chỉ có thể thay đổi một lần</div>
                                    </div>
                                    <div className={classes.field_wrap}>
                                        <div className={classes.field}>
                                            <div className={classes.field_title}>
                                                <label className={classes.field_label}>Tên</label>
                                            </div>
                                            <div className={classes.field_input__wrap}>
                                                <input type="text" className={classes.field_input}></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classes.field_wrap}>
                                        <div className={classes.field}>
                                            <div className={classes.field_title}>
                                                <label className={classes.field_label}>Email</label>
                                            </div>
                                            <div className={classes.field_email__wrap}>
                                                <div className={classes.field_email}>hoantn0308.f8@gmail.com</div>
                                                <div>
                                                    <button type="button" onClick={handleOpen} className={classes.field_button}>
                                                        Thay Đổi
                                                    </button>
                                                    <Modal
                                                        open={open}
                                                        onClose={handleClose}
                                                        aria-labelledby="simple-modal-title"
                                                        aria-describedby="simple-modal-description"
                                                    >
                                                        {body}
                                                    </Modal>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classes.field_wrap}>
                                        <div className={classes.field}>
                                            <div className={classes.field_title}>
                                                <label className={classes.field_label}>Số Điện Thoại</label>
                                            </div>  
                                            <div className={classes.field_email__wrap}>
                                                <div className={classes.field_email}>0984.894.098</div>
                                                <button className={classes.field_button}>
                                                    <NavLink to="/add-phone-profile" className={classes.field_button__link}>Thay Đổi</NavLink>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classes.field_wrap}>
                                        <div className={classes.field}>
                                            <div className={classes.field_title}>
                                                <label className={classes.field_label}>Tên Shop</label>
                                            </div>
                                            <div className={classes.field_input__wrap}>
                                                <input type="text" className={classes.field_input} placeholder="huuvdshop"></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classes.field_wrap}>
                                        <div className={classes.field}>
                                            <div className={classes.field_title}>
                                                <label className={classes.field_label}>Giới Tính</label>
                                            </div>
                                            <div className={classes.field_radios}>
                                                <div className={classes.field_radio}>
                                                    <input className={classes.field_radio__input} type="radio" name="radio" id="male"></input>
                                                    <label htmlFor="male">Nam</label>
                                                </div>
                                                <div className={classes.field_radio}>
                                                    <input className={classes.field_radio__input} type="radio" name="radio" id="female"></input>
                                                    <label htmlFor="female">Nữ</label>
                                                </div>
                                                <div className={classes.field_radio}>
                                                    <input className={classes.field_radio__input} type="radio" name="radio" id="other"></input>
                                                    <label htmlFor="other">Khác</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classes.field_wrap}>
                                        <div className={classes.field}>
                                            <div className={classes.field_title}>
                                                <label className={classes.field_label}>Ngày Sinh</label>
                                            </div>

                                            <div className={classes.field_selects}>
                                                <Autocomplete className={classes.autocomplete}
                                                    id="combo-box-demo"
                                                    options={date}
                                                    getOptionLabel={(option) => option.title}
                                                    style={{ width: 144 }}
                                                    renderInput={(params) =><TextField className={classes.textField} {...params} label="Ngày" size="small" id="outlined-size-small" defaultValue="Small" variant="outlined" />}
                                                />
                                                <Autocomplete className={classes.autocomplete}
                                                    id="combo-box-demo"
                                                    options={month}
                                                    getOptionLabel={(option) => option.title}
                                                    style={{ width: 144 }}
                                                    renderInput={(params) => <TextField {...params} label="Tháng" size="small" id="outlined-size-small" defaultValue="Small" variant="outlined" />}
                                                />
                                                <Autocomplete className={classes.autocomplete}
                                                    id="combo-box-demo"
                                                    options={year}
                                                    getOptionLabel={(option) => option.title}
                                                    style={{ width: 144 }}
                                                    renderInput={(params) => <TextField {...params} label="Năm" size="small" id="outlined-size-small" defaultValue="Small" variant="outlined" />}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={classes.button_save__wrap}>
                                            <button type="button" onClick={handleOpenSave} className={classes.button_save}>
                                                Lưu
                                            </button>
                                        </div>
                                        <Modal
                                            open={isShow}
                                            onClose={handleCloseSave}
                                            aria-labelledby="simple-modal-title"
                                            aria-describedby="simple-modal-description"
                                        >
                                            {update}
                                        </Modal>
                                    </div>
                                </form>
                            </div>
                            <div className={classes.body_right}>
                                <div className={classes.right}>
                                    <div className={classes.right_img__wrap}>
                                        <div className={classes.right_img}></div>
                                    </div>
                                    <input type="file" accept=".jpg,.jpeg,.png" className={classes.right_input}></input>
                                    <button type="button" className={classes.right_button}>Chọn Ảnh</button>
                                    <div className={classes.view}>
                                        <div className={classes.view_text}>Dụng lượng file tối đa 1 MB</div>
                                        <div className={classes.view_text}>Định dạng:.JPEG, .PNG</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default withStyles(styles)(Profile);