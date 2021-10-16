import React, { useRef, useEffect, useState } from 'react';
import { withStyles } from "@material-ui/core";
import { Box } from '@mui/system';
import styles from './styles.js';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import { Link } from 'react-router-dom';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import Modal from '@mui/material/Modal';
import BtnPrimary from '../../UI/BtnPrimary';
import Button from '../../UI/Button';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 440,
    bgcolor: '#fff',
    border: '2px solid #000',
    boxShadow: 24,
    padding: '21px',
    border: 'none',
    borderRadius: '4px',
    '& span': {
        fontSize: '20px',
        color: '#333',
    },
    '& p': {
        padding: '44px 0',
        color: '#555',
        lineHeight: '1.5'
    },
    '& div': {
        fontSize: '14px',
        textAlign: 'right',
        '& div': {
            padding: '12px 32px'
        }
    }
  };

const Chat = (props) => {
    const { classes } = props;

    const formChat = useRef(null)
    const message = useRef(null)
    const chooseShopChat = useRef(null)
    const inputSearch = useRef(null)
    const iconCloseInputShopChat = useRef(null)
    const [showMessage, setShowMessage] = useState(true)
    const [indexShopChat, setIndexShopChat] = useState(0);

    // modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const openChat = () => {
        formChat.current.style.transform = 'scale(1)';
        formChat.current.style.opacity = '1';
    }

    const closeChat = () => {
        formChat.current.style.transform = 'scale(0)';
        formChat.current.style.opacity = '0';
    }

    const closeMessage = () => {
        setShowMessage(!showMessage);
        
    }

    // get index shop chat
    const getIndexShopChat = (index) => {
        setIndexShopChat(index);
    }

    // focus input search
    const focusInputSearch = () => {
        chooseShopChat.current.style.display = 'none';
        iconCloseInputShopChat.current.style.display = 'block';
    }
    
    // event click icon close on input
    const focusOutInput = () => {
        inputSearch.current.value = ''
        chooseShopChat.current.style.display = 'flex';
        iconCloseInputShopChat.current.style.display = 'none';

    }

    // event blur input
    const handleBlurInput = (e) => {
        if(e.target.value.trim().length === 0) {
            inputSearch.current.value = e.target.value.trim()
            chooseShopChat.current.style.display = 'flex';
            iconCloseInputShopChat.current.style.display = 'none';
        }
    }

    const handlePreventDefautl = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        if(showMessage === true){
            message.current.style.display = 'block';
            setTimeout(() => {
                message.current.style.width = '286px';
                message.current.style.opacity = '1'
            }, 1)
        } else {
            message.current.style.width = '0'
            setTimeout(() => {
                message.current.style.display = 'none';
                message.current.style.opacity = '0'
            }, 180)
        }
    })

    const shopChat = ['Tất cả', 'Chưa đọc', 'Đã ghim']
    const chooseKindShopChat = shopChat.map((child, index) => <div onMouseDown={()=>getIndexShopChat(index)} key={index}>{child}</div>)
    
    return (
        <div>
            <div className={classes.collapsed} onClick={openChat}>
                <span class="material-icons">question_answer</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 22"><path fill="#EE4D2D" d="M9.286 6.001c1.161 0 2.276.365 3.164 1.033.092.064.137.107.252.194.09.085.158.064.203 0 .046-.043.182-.194.251-.26.182-.17.433-.43.752-.752a.445.445 0 00.159-.323c0-.172-.092-.3-.227-.365A7.517 7.517 0 009.286 4C5.278 4 2 7.077 2 10.885s3.256 6.885 7.286 6.885a7.49 7.49 0 004.508-1.484l.022-.043a.411.411 0 00.046-.71v-.022a25.083 25.083 0 00-.957-.946.156.156 0 00-.227 0c-.933.796-2.117 1.205-3.392 1.205-2.846 0-5.169-2.196-5.169-4.885C4.117 8.195 6.417 6 9.286 6zm32.27 9.998h-.736c-.69 0-1.247-.54-1.247-1.209v-3.715h1.96a.44.44 0 00.445-.433V9.347h-2.45V7.035c-.021-.043-.066-.065-.111-.043l-1.603.583a.423.423 0 00-.29.41v1.362h-1.781v1.295c0 .238.2.433.445.433h1.337v4.19c0 1.382 1.158 2.505 2.583 2.505H42v-1.339a.44.44 0 00-.445-.432zm-21.901-6.62c-.739 0-1.41.172-2.013.496V4.43a.44.44 0 00-.446-.43h-1.788v13.77h2.234v-4.303c0-1.076.895-1.936 2.013-1.936 1.117 0 2.01.86 2.01 1.936v4.239h2.234v-4.561l-.021-.043c-.202-2.088-2.012-3.723-4.223-3.723zm10.054 6.785c-1.475 0-2.681-1.12-2.681-2.525 0-1.383 1.206-2.524 2.681-2.524 1.476 0 2.682 1.12 2.682 2.524 0 1.405-1.206 2.525-2.682 2.525zm2.884-6.224v.603a4.786 4.786 0 00-2.985-1.035c-2.533 0-4.591 1.897-4.591 4.246 0 2.35 2.058 4.246 4.59 4.246 1.131 0 2.194-.388 2.986-1.035v.604c0 .237.203.431.453.431h1.356V9.508h-1.356c-.25 0-.453.173-.453.432z"></path></svg>
            </div>
            <div className={classes.enlarge} ref={formChat}>
                <div className={classes.header}>
                    <Box sx={{width: '46px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 22"><path fill="#EE4D2D" d="M9.286 6.001c1.161 0 2.276.365 3.164 1.033.092.064.137.107.252.194.09.085.158.064.203 0 .046-.043.182-.194.251-.26.182-.17.433-.43.752-.752a.445.445 0 00.159-.323c0-.172-.092-.3-.227-.365A7.517 7.517 0 009.286 4C5.278 4 2 7.077 2 10.885s3.256 6.885 7.286 6.885a7.49 7.49 0 004.508-1.484l.022-.043a.411.411 0 00.046-.71v-.022a25.083 25.083 0 00-.957-.946.156.156 0 00-.227 0c-.933.796-2.117 1.205-3.392 1.205-2.846 0-5.169-2.196-5.169-4.885C4.117 8.195 6.417 6 9.286 6zm32.27 9.998h-.736c-.69 0-1.247-.54-1.247-1.209v-3.715h1.96a.44.44 0 00.445-.433V9.347h-2.45V7.035c-.021-.043-.066-.065-.111-.043l-1.603.583a.423.423 0 00-.29.41v1.362h-1.781v1.295c0 .238.2.433.445.433h1.337v4.19c0 1.382 1.158 2.505 2.583 2.505H42v-1.339a.44.44 0 00-.445-.432zm-21.901-6.62c-.739 0-1.41.172-2.013.496V4.43a.44.44 0 00-.446-.43h-1.788v13.77h2.234v-4.303c0-1.076.895-1.936 2.013-1.936 1.117 0 2.01.86 2.01 1.936v4.239h2.234v-4.561l-.021-.043c-.202-2.088-2.012-3.723-4.223-3.723zm10.054 6.785c-1.475 0-2.681-1.12-2.681-2.525 0-1.383 1.206-2.524 2.681-2.524 1.476 0 2.682 1.12 2.682 2.524 0 1.405-1.206 2.525-2.682 2.525zm2.884-6.224v.603a4.786 4.786 0 00-2.985-1.035c-2.533 0-4.591 1.897-4.591 4.246 0 2.35 2.058 4.246 4.59 4.246 1.131 0 2.194-.388 2.986-1.035v.604c0 .237.203.431.453.431h1.356V9.508h-1.356c-.25 0-.453.173-.453.432z"></path></svg>
                    </Box>
                    <Box sx={{display: 'flex'}}>
                        <Box mr={2} className={classes.arrow} onClick={closeMessage} >
                            {showMessage ? <ArrowForwardIcon style={{fontSize:'10px'}} /> : <ArrowBackIcon style={{fontSize:'10px'}} />}
                        </Box>
                        <Box className={classes.arrow} onClick={closeChat} >
                            <KeyboardArrowDownIcon style={{fontSize:'14px'}} />
                        </Box>
                    </Box>
                </div>
                <div className={classes.body}>
                    <div className={classes.bodyLeft} ref={message}>
                        <div className={classes.bodyLeft_top}>
                            <button className={classes.shopNameMess}>
                                shop.online24
                                <KeyboardArrowDownIcon style={{fontSize:'14px', color: '#999', marginLeft: '2px'}} />
                            </button>
                            <div onMouseDown={handlePreventDefautl} className={classes.infoShop}>
                                <Box display="flex" alignItems="center" mb={1.5}>
                                    <Box ml={1.5} className={classes.imgShop}>
                                        <div></div>
                                    </Box>
                                    <p>
                                        shop.online24
                                    </p>
                                </Box>
                                <div>
                                    <Link to="/shopee-store" className={classes.infoShopLink}>
                                        Xem thông tin cá nhân
                                    </Link>
                                    <div className={classes.infoShopLink} onClick={handleOpen}>
                                        Chặn người dùng
                                    </div>
                                    {/* modal */}
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style}>
                                            <span>
                                                Bạn có chắc muốn chặn shop.online24?
                                            </span>
                                            <p>
                                                Người dùng shop.online24 sẽ không thể nói chuyện với bạn, để lại lời bình hay mua hàng của bạn
                                            </p>
                                            <div>
                                                <Button onClick={handleClose} style={{marginRight: '10px', border: 'none'}}>Hủy</Button>
                                                <BtnPrimary>Đồng ý</BtnPrimary>
                                            </div>
                                        </Box>
                                    </Modal>
                                    {/* /modal */}
                                    <Link to="/report" className={classes.infoShopLink}>
                                        Báo cáo
                                    </Link>
                                </div>
                            </div>
                            
                        </div>
                        <div className={classes.bodyLeft_body}>
                            <p>text text text text text text text text text text</p>
                            <p>text text text text text text text text text text</p>
                            <p>text text text text text text text text text text</p>
                            <p>text text text text text text text text text text</p>
                            <p>text text text text text text text text text text</p>
                            <p>text text text text text text text text text text</p>
                            <p>text text text text text text text text text text</p>
                            <p>text text text text text text text text text text</p>
                            <p>text text text text text text text text text text</p>
                            <p>text text text text text text text text text text</p>
                            <p>text text text text text text text text text text</p>
                            <p>text text text text text text text text text text</p>
                            <p>text text text text text text text text text text</p>
                            <p>text text text text text text text text text text</p>
                            <p>text text text text text text text text text text</p>
                            <p>text text text text text text text text text text</p>
                            <p>text text text text text text text text text text</p>
                            <p>text text text text text text text text text text</p>
                            <p>text text text text text text text text text text</p>
                            <p>text text text text text text text text text text</p>
                            <p>text text text text text text text text text text</p>
                            <p>text text text text text text text text text text</p>
                            <p>text text text text text text text text text text</p>
                            <p>text text text text text text text text text text</p>
                            <p>text text text text text text text text text text</p>
                            <p>text text text text text text text text text text</p>
                            <p>text text text text text text text text text text</p>
                            <p>text text text text text text text text text text</p>
                            <p>text text text text text text text text text text</p>
                            <p>text text text text text text text text text text</p>
                            <p>text text text text text text text text text text</p>
                            <p>text text text text text text text text text text</p>
                        </div>
                        <div className={classes.bodyLeft_bottom}>
                            <input type="text" placeholder="Gửi tin nhắn"/>
                            <Box className={classes.iconMessage} >
                                <Box display="flex" alignItems="flex-end">
                                    <div title="Stickers">
                                        <InsertEmoticonIcon />
                                    </div>
                                    <div title="Hình ảnh" >
                                        <ImageOutlinedIcon />
                                    </div>
                                    <div title="Video">
                                        <VideoLibraryOutlinedIcon />
                                    </div>
                                    <div title="Sản phẩm">
                                        <LocalMallOutlinedIcon />
                                    </div>
                                    <div title="Đơn hàng">
                                        <DescriptionOutlinedIcon />
                                    </div>
                                </Box>
                                <Box display="flex" alignItems="flex-end">
                                    <div>
                                        <SendOutlinedIcon />
                                    </div>
                                </Box>
                            </Box>
                        </div>
                    </div>
                    <div className={classes.bodyRight}>
                        <Box sx={{display: 'flex', alignItems: 'center', padding: '8px 10px 8px 12px'}}>
                            <div className={classes.search}>
                                <input type="text" placeholder="Tìm theo tên khách hàng" ref={inputSearch} onBlur={handleBlurInput} onFocus={focusInputSearch} />
                                <SearchIcon className={classes.iconSearchInput} />
                                <CancelIcon style={{display: 'none'}} className={classes.iconCloseInput} ref={iconCloseInputShopChat} onClick={focusOutInput} />
                            </div>
                            <Box >
                                <button className={classes.selectedShop} ref={chooseShopChat}>
                                    {shopChat[indexShopChat]}
                                    <KeyboardArrowDownIcon sx={{fontSize: '16px'}} />
                                </button>
                                <div className={classes.listSelect} >
                                    {chooseKindShopChat}
                                </div>
                            </Box>
                        </Box>
                        {/* item shops */}
                        <div className={classes.shopMessage}>
                            <div className={classes.imgShop}>
                                <div></div>
                            </div>
                            <Box ml={1}>
                                <div className={classes.titleShop}>
                                    shop.online.24
                                </div>
                                <div className={classes.messShop}>
                                    MAU MAU NHANH NHANH !
                                    MAU MAU NHANH NHANH !
                                </div>
                            </Box>
                            <div className={classes.dateMess}>
                                4 Th08
                            </div>
                        </div>
                        <div className={classes.shopMessage}>
                            <div className={classes.imgShop}>
                                <div></div>
                            </div>
                            <Box ml={1}>
                                <div className={classes.titleShop}>
                                    shop.online.24
                                </div>
                                <div className={classes.messShop}>
                                    MAU MAU NHANH NHANH !
                                    MAU MAU NHANH NHANH !
                                </div>
                            </Box>
                            <div className={classes.dateMess}>
                                4 Th08
                            </div>
                        </div>
                        <div className={`${classes.shopMessage} ${classes.active}`}>
                            <div className={classes.imgShop}>
                                <div></div>
                            </div>
                            <Box ml={1}>
                                <div className={classes.titleShop}>
                                    shop.online.24
                                </div>
                                <div className={classes.messShop}>
                                    MAU MAU NHANH NHANH !
                                    MAU MAU NHANH NHANH !
                                </div>
                            </Box>
                            <div className={classes.dateMess}>
                                4 Th08
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(Chat)
