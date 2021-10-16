import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.js";
import Header from "../../partials/shopee/Header";
import Footer from "../../partials/auth/Footer";
import IconCar from "../../assets/svg/IconCar";
import { NavLink } from "react-router-dom";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Grid from '@mui/material/Grid';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import CheckIcon from '@material-ui/icons/Check';
import ButtonPrimary from '../../UI/BtnPrimary';
import Mall from '../../assets/svg/Mall';
import CartMessage from '../../assets/svg/CartMessage';
import WarningCart from '../../assets/svg/WarningCart';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import VoucherItem from "../../components/VoucherChildProfile/VoucherItem";

const types = [
    {id: 1, name: "Space Grey"},
    {id: 2, name: "Sliver"},
    {id: 3, name: "Gold"},
];

const vouchersPopular = [
    {id: 1, img: "https://cf.shopee.vn/file/162123b2e64ffefa2c42d367bb45bda0"},
    {id: 2, img: "https://cf.shopee.vn/file/a6ff372c86c4e242c76fb75f65ae7579"},
    {id: 3, img: "https://cf.shopee.vn/file/a6ff372c86c4e242c76fb75f65ae7579"},
    {id: 4, img: "https://cf.shopee.vn/file/a6ff372c86c4e242c76fb75f65ae7579"},
    {id: 5, img: "https://cf.shopee.vn/file/a6ff372c86c4e242c76fb75f65ae7579"},
    {id: 6, img: "https://cf.shopee.vn/file/a6ff372c86c4e242c76fb75f65ae7579"},
    {id: 7, img: "https://cf.shopee.vn/file/a6ff372c86c4e242c76fb75f65ae7579"},
    {id: 8, img: "https://cf.shopee.vn/file/a6ff372c86c4e242c76fb75f65ae7579"},
];

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
    buy: {
        position: 'absolute',
        width: 540,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        borderRadius: "3px",
        outline: "0",
    },
    voucher: {
        position: 'absolute',
        width: 620,
        height: 620,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        borderRadius: "3px",
        outline: "0",
    },
    minus: {
        position: 'absolute',
        width: 540,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        borderRadius: "3px",
        outline: "0",
    },
}));

const ShopeeCart = (props) => {
    const { classes } = props;
    const [openType, setOpenType] = React.useState(false);
    const [openToast, setOpenToast] = React.useState(false);
    const [quantity, setQuantity] = React.useState(1);
    const newPrice = "6950000";

    const handleToggleType = () => {
        setOpenType(!openType);
    };
    const handleCloseType = () => {
        setOpenType(false);
    };
    const handleStopType = (e) => {
        e.stopPropagation();
    };
    const handleShowToast = () => {
        setOpenToast(true);
        setTimeout(() => {
            setOpenToast(false);
        }, 1800);
    };
    const handleAddQuantity = () => {
        setQuantity(quantity + 1);
    };
    const handleMinusQuantity = () => {
        setQuantity(quantity - 1);
    };
    
    const initType = "Gold";
    const [type, setType] = React.useState(initType);
    const handleChangeType = (newType) => {
        setType(newType);
    };

    const classesModal = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [openBuy, setOpenBuy] = React.useState(false);
    const [openVoucher, setOpenVoucher] = React.useState(false);
    const [openMinus, setOpenMinus] = React.useState(false);

    const handleOpenBuy = () => {
        setOpenBuy(true);
    };

    const handleCloseBuy = () => {
        setOpenBuy(false);
    };

    const handleOpenVoucher = () => {
        setOpenVoucher(true);
    };

    const handleCloseVoucher = () => {
        setOpenVoucher(false);
    };

    const handleOpenMinus = () => {
        setOpenMinus(true);
    };

    const handleCloseMinus = () => {
        setOpenMinus(false);
    };

    const handleMinusAll = () => {
        handleMinusQuantity();
        if (quantity <= 1) {
            handleOpenMinus();
            setQuantity(1);
        }
    };

    const BuyModal = (
        <div style={modalStyle} className={classesModal.buy}>
            <div className={classes.cart_empty}>
                <div className={classes.cart_empty__heading}>Bạn vẫn chưa chọn sản phẩm nào để mua.</div>
                <button onClick={handleCloseBuy} className={classes.cart_empty__button}>OK</button>
            </div>
        </div>
    );

    const VoucherModal = (
        <div style={modalStyle} className={classesModal.voucher}>
            <div className={classes.form}>
                <div className={classes.form_header}>
                    <div className={classes.header_heading}>Chọn Shopee Voucher</div>
                    <div className={classes.header_help}>
                        Hỗ Trợ
                        <HelpOutlineIcon className={classes.header_help__icon}/>
                    </div>
                </div>

                <div className={classes.form_main}>
                    <div className={classes.form_search}>
                        <span className={classes.search_left}>Mã Voucher</span>
                        <div className={classes.search_center}>
                            <input className={classes.search_center__input}/>
                        </div>
                        <button className={classes.search_right}>ÁP DỤNG</button>
                    </div>
                    <div className={classes.form_content}>
                        <div className={classes.content_note}>Chọn sản phẩm trong giỏ trước khi chọn áp dụng voucher nhé!</div>
                        <div className={classes.content_text}>Voucher chưa thể áp dụng</div>
                        <Grid container spacing={2}>
                            {vouchersPopular.map(voucher => {
                                return (
                                    <Grid item md={12} xs={12} key={voucher.id}>
                                        <VoucherItem voucher={voucher}/>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </div>
                    <div className={classes.modal_buttons}>
                        <button onClick={handleCloseVoucher} className={classes.voucher_button__back}>TRỞ LẠI</button>
                        <ButtonPrimary className={classes.modal_button__item}>XÁC NHẬN</ButtonPrimary>
                    </div>
                </div>
            </div>
        </div>
    ); 

    const MinusModal = (
        <div style={modalStyle} className={classesModal.buy}>
            <div className={classes.popup}>
                <div className={classes.popup_heading}>Bạn chắc chắn muốn bỏ sản phẩm này?</div>
                <div className={classes.popup_message}>Apple Magic Mouse 2 Multi-Touch (Space Grey)</div>
                <Grid container spacing={2} className={classes.popup_buttons}>
                    <Grid item xs={6} md={6}>
                        <button className={classes.popup_yes}>Có</button>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <button onClick={handleCloseMinus} className={classes.popup_no}>Không</button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );

    return (
        <div onClick={handleCloseType} className={classes.shopee_cart}>
            <Header />

            <div className={classes.container}>
                <div className={classes.wide}>
                    <div className={classes.content}>
                        <div className={classes.counter}>
                            <div className={classes.counter_suggestion}>
                                <IconCar />
                                <span className={classes.counter_suggestion__text}>Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển bạn nhé!</span>
                            </div>

                            <div className={classes.counter_category}>
                                <div className={classes.counter_input__wrap}>
                                    <label className={classes.counter_input__label}>
                                        <input type="checkbox" className={classes.counter_input}/>
                                        <div className={classes.counter_input__check}>
                                            <div className={classes.counter_input__tick}></div>
                                        </div>
                                    </label>
                                </div>
                                <div className={classes.counter_category__title}>Sản Phẩm</div>
                                <div className={classes.counter_category__item}>Đơn Giá</div>
                                <div className={classes.counter_category__item}>Số Lượng</div>
                                <div className={classes.counter_category__item}>Số Tiền</div>
                                <div className={classes.counter_category__item}>Thao Tác</div>
                            </div>
                        
                            <div className={classes.cart_item}>
                                <div className={classes.cart_product__store}>
                                    <div className={classes.counter_input__wrap}>
                                        <label className={classes.counter_input__label}>
                                            <input type="checkbox" className={classes.counter_input}/>
                                            <div className={classes.counter_input__check}>
                                                <div className={classes.counter_input__tick}></div>
                                            </div>
                                        </label>
                                    </div>
                                    <NavLink className={classes.counter_store__link} to="/shopee-store">
                                        <div className={classes.mall_wrap}>
                                            <Mall />
                                        </div>
                                        <NavLink to="/shopee-store" className={classes.counter_store__text}>Apple Flagship Store</NavLink>
                                        <div className={classes.cart_messages}>
                                            <CartMessage />
                                        </div>
                                    </NavLink>
                                </div>

                                <div className={classes.cart_item__product}>
                                    <div className={classes.counter_input__wrap}>
                                        <label className={classes.counter_input__label}>
                                            <input type="checkbox" className={classes.counter_input}/>
                                            <div className={classes.counter_input__check}>
                                                <div className={classes.counter_input__tick}></div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className={classes.product_detail}>
                                        <NavLink className={classes.detail_img__link} to="/product-detail">
                                            <div style={{backgroundImage: "url(https://cf.shopee.vn/file/2cdd32851133dc37e5b3b92745e96071_tn)"}} className={classes.detail_img}></div>
                                        </NavLink>
                                        <div className={classes.detail_list}>
                                            <NavLink className={classes.detail_description} to="/product-detail">{"[Mã ELAP1TR giảm 5% đơn 3TR] Apple Watch SE 40mm GPS Sport Band"}</NavLink>
                                            <div className={classes.detail_list__img}></div>
                                            <div className={classes.detail_sale}>
                                                <img className={classes.detail_sale__img} src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/cart/91167e001db60b62d4f85c3e0ea919b6.png" alt="cart-product-sale"/>
                                                <div className={classes.detail_sale__text}>7 Ngày Miễn Phí Trả Hàng</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div onClick={handleStopType} className={classes.product_type}>
                                        <div onClick={handleToggleType} className={classes.product_type__wrap}>
                                            <div className={classes.type_title__wrap}>
                                                <div className={classes.type_title}>Phân Loại Hàng: </div>
                                                {openType ? <ArrowDropUpIcon className={classes.type_icon}/> : <ArrowDropDownIcon className={classes.type_icon}/>}
                                            </div>
                                            <div className={classes.type_name}>{type}</div>
                                        </div>
                                        <div style={{display: openType ? "block" : "none"}} className={classes.product_type__modal}>
                                            <div className={classes.type_modal__title}>Màu Sắc:</div>
                                            {types.map(item => {
                                                return (
                                                    <button onClick={() => {handleChangeType(item.name)}} className={`${classes.modal_item__selector} ${classes.type_modal__item}`} key={type.id}>
                                                        {item.name}
                                                        <div className={classes.modal_tick}>
                                                            <CheckIcon className={classes.modal_tick__icon}/>
                                                        </div>
                                                    </button>
                                                )
                                            })}
                                            <div className={classes.modal_buttons}>
                                                <ButtonPrimary onClick={handleCloseType} className={`${classes.modal_button__item} ${classes.modal_button_back}`}>TRỞ LẠI</ButtonPrimary>
                                                <ButtonPrimary className={classes.modal_button__item}>XÁC NHẬN</ButtonPrimary>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classes.product_price}>
                                        <span className={classes.price_old}>₫8.990.000</span>
                                        <span className={classes.price_new}>₫{newPrice}</span>
                                    </div>
                                    <div className={classes.product_quantity}>
                                        <button onClick={() => {handleMinusAll()}} type="button" className={classes.quantity_button}>–</button>
                                        <Modal
                                            open={openMinus}
                                            onClose={handleCloseMinus}
                                            aria-labelledby="simple-modal-title"
                                            aria-describedby="simple-modal-description"
                                        >
                                        {MinusModal}
                                        </Modal>
                                        <input className={classes.quantity_input} type="text" value={quantity}/>
                                        <button onClick={handleAddQuantity} className={classes.quantity_button}>+</button>
                                    </div>
                                    <div className={classes.product_price__total}>
                                        <span>₫{(newPrice * quantity).toString()}</span>
                                    </div>
                                    <div className={classes.product_similar}>
                                        <button className={classes.similar_delete}>Xóa</button>
                                        <button className={classes.similar_search}>
                                            <span>Tìm sản phẩm tương tự</span>
                                            <ArrowDropDownIcon className={classes.similar_icon}/>
                                        </button>
                                    </div>
                                </div>     
                            
                                <div className={classes.cart_item_service}>
                                    <IconCar />
                                    <div className={classes.service_text}>Miễn Phí Vận Chuyển cho đơn hàng từ ₫50.000 {"(giảm tối đa ₫25.000)"}</div>
                                    <div className={classes.drawer}>
                                        <span className={classes.drawer_text}>Tìm hiểu thêm</span>
                                        <div className={classes.drawer_bridge}></div>
                                        <div className={classes.drawer_detail}>
                                            <div className={classes.drawer_detail__heading}>Khuyến mãi vận chuyển</div>
                                            <div className={classes.drawer_detail__name}>Apple Flagship Store</div>
                                            <Grid container space={0}>
                                                <Grid item xs={3}>
                                                    <div className={classes.drawer_column__category}>Đơn hàng tối thiểu</div>
                                                    <div className={classes.drawer_column__value}>₫50.000</div>
                                                    <div className={classes.drawer_column__value}>₫50.000</div>
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <div className={classes.drawer_column__category}>Ưu đãi</div>
                                                    <div className={classes.drawer_column__value}>₫20.000</div>
                                                    <div className={classes.drawer_column__value}>₫50.000</div>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <div className={classes.drawer_column__category}>Phương thức vận chuyển</div>
                                                    <div className={classes.drawer_column__value}>Nhanh</div>
                                                    <div className={classes.drawer_column__value}>Nhanh</div>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={classes.pay}>
                                <div className={classes.pay_up}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={7}></Grid>
                                        <Grid className={classes.pay_up__right} item xs={5}>
                                            <ConfirmationNumberIcon className={classes.pay_up__icon}/>
                                            <div className={classes.pay_up__title}>Shopee Voucher</div>
                                            <button type="button" onClick={handleOpenVoucher} className={classes.pay_up__button}>Áp Dụng Mã Giảm Giá Ngay!</button>
                                            <Modal
                                                open={openVoucher}
                                                onClose={handleCloseVoucher}
                                                aria-labelledby="simple-modal-title"
                                                aria-describedby="simple-modal-description"
                                            >
                                            {VoucherModal}
                                            </Modal>
                                        </Grid>
                                    </Grid>
                                </div>
                            
                                <div className={classes.pay_center}>
                                    <Grid container spacing={0}>
                                        <Grid className={classes.pay_center__left} item xs={7}>
                                            <div className={`${classes.counter_input__wrap} ${classes.input_wrap__disabled}`}>
                                                <label className={`${classes.counter_input__label} ${classes.label_disabled}`}>
                                                    <input type="checkbox" className={`${classes.counter_input} ${classes.counter_input__disabled}`}/>
                                                    <div className={`${classes.counter_input__check} ${classes.check_disabled}`}>
                                                        <div className={`${classes.counter_input__tick} ${classes.tick_disabled}`}></div>
                                                    </div>
                                                </label>
                                            </div>
                                        </Grid>
                                        <Grid className={classes.pay_center__right} item xs={5}>
                                            <div className={classes.right_wrap}>
                                                <MonetizationOnIcon className={classes.pay_center__xu}/>
                                                <div className={classes.pay_center__text}>Shopee Xu</div>
                                                <div className={classes.pay_center__title}>Bạn chưa có Shopee Xu</div>
                                                <HelpOutlineIcon className={classes.pay_center__help}/>
                                            </div>
                                            <div className={classes.pay_center__sale}>-₫0</div>
                                        </Grid>
                                    </Grid>
                                </div>

                                <div className={classes.pay_down}>
                                    <div className={classes.pay_down__left}>
                                        <div className={classes.counter_input__wrap}>
                                            <label className={classes.counter_input__label}>
                                                <input type="checkbox" className={classes.counter_input}/>
                                                <div className={classes.counter_input__check}>
                                                    <div className={classes.counter_input__tick}></div>
                                                </div>
                                            </label>
                                        </div>
                                        <button className={`${classes.down_left__button} ${classes.left_all}`}>Chọn Tất Cả {"(2)"}</button>
                                        <button onClick={handleShowToast} className={`${classes.down_left__button} ${classes.left_delete}`}>Xóa</button>
                                        <button onClick={handleShowToast} className={`${classes.down_left__button} ${classes.left_save}`}>Lưu vào mục Đã thích</button>
                                    </div>
                                    <div className={classes.pay_down__right}>
                                        <div className={classes.down_right__price}>
                                            <div className={classes.right_price__up}>
                                                <div className={classes.down_right__title}>Tổng thanh toán {"(0 Sản phẩm)"}:</div>
                                                <div className={classes.down_right__total}>₫0</div>
                                            </div>
                                            <div className={classes.right_price__down}>
                                                <div className={classes.price_down__text}>Tiết kiệm</div>
                                                <span className={classes.price_down__value}>₫2,04tr</span>
                                            </div>
                                        </div>
                                        <button type="button" onClick={handleOpenBuy} className={classes.down_right__buy}>Mua Hàng</button>
                                        <Modal
                                            open={openBuy}
                                            onClose={handleCloseBuy}
                                            aria-labelledby="simple-modal-title"
                                            aria-describedby="simple-modal-description"
                                        >
                                            {BuyModal}
                                        </Modal>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{display: openToast ? "block" : "none"}} className={classes.toast}>
                            <WarningCart />
                            <div className={classes.toast_text}>Vui lòng chọn sản phẩm</div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default withStyles(styles)(ShopeeCart); 