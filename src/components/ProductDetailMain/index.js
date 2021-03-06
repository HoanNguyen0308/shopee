import React,{useRef, useState, useEffect, Fragment} from 'react';
import { withStyles } from "@material-ui/core";
import styles from './styles.js'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FlightIcon from '@mui/icons-material/Flight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Modal from '@mui/material/Modal';
import ForumIcon from '@mui/icons-material/Forum';
import StorefrontIcon from '@mui/icons-material/Storefront';
import BtnPrimary from '../../UI/BtnPrimary';
import PathProduct from '../PathProduct';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';

const ProductDetailMain = (props) => {
    const { classes } = props;

    const arrSliderImg = [
        'https://cf.shopee.vn/file/a2b7dc89a74702eed0eb66931e5fa85b_tn',
        'https://cf.shopee.vn/file/3854adb09e856ff6a613f4d7d90148fc_tn',
        'https://cf.shopee.vn/file/41edd2df748537baeb90352f95c22106_tn',
        'https://cf.shopee.vn/file/4be5a771c64c1a22b839dc05e4a4ab44_tn',
        'https://cf.shopee.vn/file/af5f144942e5ce39ca8ae9b6067f0299_tn',
        'https://cf.shopee.vn/file/a4bbef611b0e66ba2e9f55f2f8cf9dd4_tn',
        'https://cf.shopee.vn/file/f062df88e9491af70e2445196ba3d196_tn',
        'https://cf.shopee.vn/file/5b342d0963f0c53dec82ffcbf92b5002_tn',
        'https://cf.shopee.vn/file/3d505277fd3e0f7741d69ba79ab724ec_tn',
    ];

    const filterRate = [
        'T???t c???',
        '5 Sao (3,4k)',
        '4 Sao (60)',
        '3 Sao (47)',
        '2 Sao (40)',
        '1 Sao (120)',
        'C?? B??nh Lu???n (2,9k)',
        'C?? h??nh ???nh / Video (1,1k)',
    ]

    const styleModal = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 836,
        height: 540,
        bgcolor: '#fff',
        padding: '12px',
        borderRadius: '4px',
        outline: 'none',
    };

    const kindColor = [
        '#Black',
        '#Army Green',
        '#Day Green',
        'Navy',
        '#Red'
    ]

    const kindProduct = [
        'IP 6/6s',
        'IP 6PLUS/6SPLUS',
        'IP 7/8',
        'IP 7PLUS/8PLUS',
        'IP X/XS',
        'IP XS MAX',
        'IP 11',
        'IP 11 Prp',
        'IP 11 Pro Max'
    ]

    const style2Line = {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        '-webkit-box-orient': 'vertical',
        '-webkit-line-clamp': '2', 
    }

    const sliderImgRef = useRef()
    const [amount, setAmount] = useState(1);
    const [indexSlider, setIndexSlider] = useState(0);
    const [indexHoverSlider, setIndexHoverSlider] = useState(0);
    const [indexFilterRate, setIndexFilterRate] = useState(0);
    const [indexKindColor, setIndexKindColor] = useState(undefined);
    const [indexKindProduct, setIndexKindProduct] = useState(undefined);
    const comment = useRef()

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleClickAdd = () => {
        setAmount(amount + 1)
    }
    const handleClickRemove = () => {
        if(amount <= 1) {
            setAmount(1)
            return
        }
        setAmount(amount - 1)
    }
    
    // slider
    const prevSlider = () => {
        if(indexSlider <= 0) {
            setIndexSlider(0)
            return;
        }
        setIndexSlider(indexSlider - 1)
    }
    
    const nextSlider = () => {
        if(indexSlider >= arrSliderImg.length - 5) {
            setIndexSlider(arrSliderImg.length - 5)
            return;
        }
        setIndexSlider(indexSlider + 1)
    }

    // modal slider
    const hoverItemSlider = (index) => {
        setIndexHoverSlider(index)
    }

    const prevSliderModal = () => {
        if(indexHoverSlider <= 0) {
            setIndexHoverSlider(arrSliderImg.length - 1)
            return;
        }
        setIndexHoverSlider(indexHoverSlider - 1)
    }

    const nextSliderModal = () => {
        if(indexHoverSlider >= arrSliderImg.length - 1) {
            setIndexHoverSlider(0)
            return;
        }
        setIndexHoverSlider(indexHoverSlider + 1)
    }

    //filter rate
    const handleClickTagFilterRate = (index) => {
        setIndexFilterRate(index)
    }

    // scroll comment
    const scrollComment = () => {
        comment.current.scrollIntoView({behavior: "smooth", block: "start"})
    }

    // handle click kind of color
    const handleClickKindColor = (index) => {
        if(index === indexKindColor) {
            setIndexKindColor(undefined)
            return;
        }
        setIndexKindColor(index)
    }

    // handle click kind of product
    const handleClickKindProduct = (index) => {
        if(index === indexKindProduct) {
            setIndexKindProduct(undefined)
            return;
        }
        setIndexKindProduct(index)
    }

    useEffect(() => {
        sliderImgRef.current.style.transform = `translateX(-${20*indexSlider}%)`
    }, [indexSlider])

    const renderSlider = arrSliderImg.map((child, index) => 
        <div key={index} className={`${classes.itemImg} `}>
            <div className={indexHoverSlider === index ? classes.active : ''} onClick={handleOpen} onMouseEnter={()=>hoverItemSlider(index)} style={{backgroundImage: `url(${child})`}}></div>
        </div>)

    const renderSliderModal = arrSliderImg.map((child, index) => 
        <div key={index} className={`${classes.itemImgOnModal} `}>
            <div className={indexHoverSlider === index ? classes.active : ''} onClick={()=>hoverItemSlider(index)} style={{backgroundImage: `url(${child})`}}></div>
        </div>)

    const renderFilterRate = filterRate.map((child, index) => 
                                        <div key={index} 
                                        className={`${classes.tagFilterRate} ${indexFilterRate === index ? classes.active : ''}`} 
                                        onClick={()=>handleClickTagFilterRate(index)}
                                        >
                                            {child}
                                        </div>)
    const renderKindColor = kindColor.map((child, index) => 
    <div key={index} onClick={()=>handleClickKindColor(index)} className={`${classes.boxMaterial} ${indexKindColor === index ? classes.active : ''}`}>
        <div className={classes.boxMaterialActive}></div>
        {child}
    </div>
    )
    
    const renderKindProduct = kindProduct.map((child, index) => 
                    <div key={index} onClick={()=>handleClickKindProduct(index)} className={`${classes.boxMaterial} ${indexKindProduct === index ? classes.active : ''}`}>
                        <div className={classes.boxMaterialActive}></div>
                        {child}
                    </div>
                    )
    return(
        <Fragment>
        <div className={classes.main}>
            <Grid container spacing={3}>
                <Grid item xs={5}>
                   <div className={classes.left}>
                        <div className={classes.imgProduct} onClick={handleOpen}>
                            <div style={{backgroundImage: `url(${arrSliderImg[indexHoverSlider]})`,}}></div>
                        </div>
                        <div className={classes.wrapSlider}>
                            <div className={classes.sliderImg} ref={sliderImgRef}>
                                {renderSlider}
                            </div>
                            {/* arrow */}
                            <div className={`${classes.arrowSliderLeft} ${classes.arrowSlider}`} onClick={prevSlider}>
                                <ArrowBackIosNewIcon />
                            </div>
                            <div className={`${classes.arrowSliderRight} ${classes.arrowSlider}`} onClick={nextSlider}>
                                <ArrowForwardIosIcon />
                            </div>
                        </div>
                        <Box sx={{display: 'flex',
                            justifyContent: 'space-between',
                            px: 4,
                            color: '#222',
                            mt: 2
                            }}
                        >
                            <Box className={classes.socialNetwork}>
                                Chia s???:
                                <Box sx={{fontSize: '23px', mx: 0.4, color: '#2b84ff'}}>
                                    <i class="fab fa-facebook-messenger"></i>
                                </Box>
                                <FacebookSharpIcon sx={{fontSize: 28, color: '#3b5999'}} />
                                <Box sx={{fontSize: '23px', mx: 0.4, color: '#de2716'}}>
                                    <i class="fab fa-pinterest"></i>
                                </Box>
                                <Box className={classes.iconTwiter}>
                                    <i class="fab fa-twitter"></i>
                                </Box>
                            </Box>
                            <Box>
                                <Box>
                                
                                </Box>
                                <Box sx={{display: 'flex', alignItems: 'center'}}>
                                    <FavoriteBorderIcon sx={{mx: 1, color: '#e93f4e', fontSize: 30}} />
                                    ???? th??ch (1,5k)
                                </Box>
                            </Box>
                        </Box>
                   </div>
                </Grid>
                <Grid item xs={7}>
                    <div className={classes.right}>
                        <div className={classes.title}>
                            <span>Y??u th??ch</span>
                            <p>
                                ???p l??ng trong su???t nh??m ch???ng s???c th???i trang cho IPHONE X XS MAX XR 9 8 7 6 6S PLUS 11 PRO MAX
                            </p>
                        </div>
                        <Box display="flex"  my={2} sx={{ alignItems: 'center'}}>
                            <Box onClick={scrollComment} style={{display: 'flex', alignItems: 'center', color: 'red', cursor: 'pointer'}}>
                                <Box sx={{textDecoration: 'underline'}} mr={1}>4.8</Box>
                                <Box sx={{fontSize: '10px'}}>
                                    <StarIcon sx={{fontSize: '18px'}}/>
                                    <StarIcon sx={{fontSize: '18px'}}/>
                                    <StarIcon sx={{fontSize: '18px'}}/>
                                    <StarIcon sx={{fontSize: '18px'}}/>
                                    <StarIcon sx={{fontSize: '18px'}}/>
                                </Box>
                            </Box>
                            <div className={classes.line}></div>
                            <Box onClick={scrollComment} sx={{display: 'flex', alignItems: 'flex-end', cursor: 'pointer' }}>
                                <Box mr={1} sx={{textDecoration: 'underline'}}>5.9k</Box>
                                <Box className={classes.textBlur}>????nh gi??</Box>
                            </Box>
                            <div className={classes.line}></div>
                            <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                                <Box mr={1}>20.1k</Box>
                                <Box className={classes.textBlur}>???? b??n</Box>
                            </Box>
                        </Box>        
                        <Box p={2} alignItems="center" display="flex" backgroundColor="#fafafa">
                            <Box sx={{textDecoration: 'line-through', color: '#929292'}}>
                                <sup>??</sup>
                                <span>20.000</span>
                            </Box>
                            <Box fontSize="30px" color="#ee4d2d" mb={0.5} mx={2}>
                                <sup style={{fontSize:'22px', textDecoration: 'underline'}}>??</sup>
                                <span style={{marginTop: '-4px'}}>16.000</span>
                            </Box>
                            <Box>
                                <p className={classes.hightLine}>
                                    20% <span>Gi???m</span>
                                </p>
                            </Box>
                        </Box>
                        <Grid container p={2} spacing={1}>
                            <Grid item xs={2} mb={1}>
                                <Box className={classes.textBlurTitle}>
                                    M?? Gi???m Gi?? C???a Shop
                                </Box>
                            </Grid>
                            <Grid item xs={10}>
                                <div className={classes.voucherSale}>
                                    <Box className={classes.hightLineBlure}>
                                        Gi???m <sup>??</sup>2,1k
                                    </Box>
                                    <Box className={classes.hightLineBlure}>
                                        Gi???m <sup>??</sup>4,1k
                                    </Box>
                                    <div className={classes.codeSale}>
                                        <p>
                                            M?? gi???m gi?? c???a Shop
                                        </p>
                                        <span>
                                            Ti???t ki???m h??n khi ??p d???ng m?? gi???m gi?? c???a Shop. Li??n h??? v???i Shop n???u g???p tr???c tr???c v??? m?? gi???m gi?? do Shop t??? t???o.
                                        </span>
                                        <div className={classes.voucher}>
                                            <div className={classes.img}>
                                                <div></div>
                                            </div>
                                            <div className={classes.content}>
                                                <Box mb={-0.5}>Gi???m <sup>??</sup>2,099k</Box>
                                                <p>????n T???i Thi???u <sup>??</sup>60k</p>
                                                <span>HSD: 07.10.2021</span>
                                            </div>
                                            <BtnPrimary>L??u</BtnPrimary>
                                        </div>
                                        <div className={classes.voucher}>
                                            <div className={classes.img}>
                                                <div></div>
                                            </div>
                                            <div className={classes.content}>
                                                <Box mb={-0.5}>Gi???m <sup>??</sup>2,099k</Box>
                                                <p>????n T???i Thi???u <sup>??</sup>60k</p>
                                                <span>HSD: 07.10.2021</span>
                                            </div>
                                            <BtnPrimary>L??u</BtnPrimary>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={2} mb={2}>
                                <Box className={classes.textBlurTitle}>
                                    Deal S???c
                                </Box>
                            </Grid>
                            <Grid item xs={10}>
                                <Box className={classes.hightLineBlure}>
                                    Mua K??m Deal S???c
                                </Box>
                            </Grid>
                            <Grid item xs={2}>
                                <Box className={classes.textBlurTitle}>
                                    V???n chuy???n
                                </Box>
                            </Grid>
                            <Grid item xs={10} mb={2}>
                                <Box >
                                    <div className={classes.shipOto}>
                                        <LocalShippingIcon />
                                        <div>
                                            <p>Mi???n ph?? v???n chuy???n</p>
                                            <span>Mi???n Ph?? V???n Chuy???n khi ????n ?????t gi?? tr??? t???i thi???u</span>
                                        </div>
                                    </div>
                                    <div className={classes.shipAbroad}>
                                        <FlightIcon />
                                        <div className={classes.center}>
                                            <p>V???n Chuy???n T???</p>
                                            <span>Ph?? V???n Chuy???n</span>
                                        </div>
                                        <div className={classes.rightShipAbroad}>
                                            <div>N?????c ngo??i t???i <span>huy???n ba v?? <KeyboardArrowDownIcon /></span></div>
                                            <span>
                                                <span className={classes.shipFastHover}><sup>??</sup>1000 <KeyboardArrowDownIcon/></span>
                                                <div className={classes.shipFast}>
                                                    <p className={classes.header}>V???n chuy???n nhanh qu???c t???</p>
                                                    <div className={classes.cost}>
                                                        <Box mb={2}>Standard Express</Box>
                                                        <div>
                                                            <sup>??</sup>10.000
                                                        </div>
                                                    </div>
                                                    <div className={classes.contentShipFast}>
                                                        <p>Nh???n h??ng v??o 26 Th09 - 8 Th10</p>
                                                        <Box my={1}>
                                                            <span className={classes.primaryColor}>Mi???n Ph?? V???n Chuy???n</span> cho ????n h??ng t??? <span className={classes.primaryColor}><sup>??</sup>50.000</span> (gi???m t???i ??a <span className={classes.primaryColor}><sup>??</sup>15.000</span>)</Box>
                                                        <p>H??nh th???c thanh to??n khi nh???n h??ng s??? kh??ng kh??? d???ng ??? khu v???c gi??n c??ch</p>
                                                        <p></p>
                                                    </div>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                </Box>
                            </Grid>
                            <Grid item xs={2}>
                                <Box className={classes.textBlurTitle}>
                                    Color
                                </Box>
                            </Grid>
                            <Grid item xs={10}>
                                {renderKindColor}
                            </Grid>
                            <Grid item xs={2}>
                                <Box className={classes.textBlurTitle}>
                                    Material
                                </Box>
                            </Grid>
                            <Grid item xs={10}>
                                {renderKindProduct}
                            </Grid>
                            <Grid item xs={2} display="flex" alignItems="center">
                                <Box className={classes.textBlurTitle} >
                                    S??? L?????ng
                                </Box>
                            </Grid>
                            <Grid item xs={10} className={classes.quantity}>
                                <Box className={classes.feature}>
                                    <div onClick={handleClickRemove}>
                                        <RemoveIcon />
                                    </div>
                                    <div className={classes.amount}>
                                        {amount}
                                    </div>
                                    <div onClick={handleClickAdd}>
                                        <AddIcon />
                                    </div>
                                </Box>
                                <p>92455 s???n ph???m c?? s???n</p>
                            </Grid>
                            <Grid item xs={12} display="flex">
                                <Box className={classes.moreCartBtn} mr={2}>
                                    <AddShoppingCartOutlinedIcon />
                                    Th??m v??o gi??? h??ng
                                </Box>
                                <Link to="/cart" className={classes.buyBtn}>
                                    Mua ngay
                                </Link>
                            </Grid>
                        </Grid>
                        <Link to="help" className={classes.guaranteed}>
                            <img src="/images/shopees/shopeeIcon.png" alt="icon shopee" />
                            <p>Shopee ?????m b???o</p>
                            <span>3 ng??y tr??? h??ng / ho??n ti???n</span>
                        </Link>
                    </div>
                </Grid>
            </Grid>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
                <Box sx={styleModal}>
                    <Grid container spacing={1}>
                        <Grid item xs={8} style={{paddingRight: '20px'}}>
                            <Box fontSize='large' style={{ paddingBottom: 'calc(100% - 2px)',position:'relative', background: 'no-repeat center / cover', backgroundImage: `url(${arrSliderImg[indexHoverSlider]})`}}>
                                <Box px={1} py={3} className={`${classes.arrowSliderLeft} ${classes.arrowSlider}`} onClick={prevSliderModal}>
                                    <ArrowBackIosNewIcon fontSize='large'/>
                                </Box>
                                <Box px={1} py={3} className={`${classes.arrowSliderRight} ${classes.arrowSlider}`} onClick={nextSliderModal}>
                                    <ArrowForwardIosIcon fontSize='large'/>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={4} style={{margin: '0 -18px'}}>
                            <Box fontSize='17px' style={style2Line} my={3}>
                                ???p l??ng trong su???t nh??m ch???ng s???c th???i trang cho IPHONE X XS MAX XR 9 8 7 6 6S PLUS 11 PRO MAX
                            </Box>
                            <Box display="flex" flexWrap="wrap">
                                {renderSliderModal}
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
      </div>
        {/* info shop */}
        <div className={classes.infoShop}>
            <Box display="flex" alignItems="center" flex="3">
                <Box width="78px" position="relative" style={{cursor: 'pointer'}}>
                    <Box style={{paddingBottom: '100%', borderRadius: '50%', width: '100%', background: 'no-repeat center / cover',backgroundImage: 'url(https://cf.shopee.vn/file/68907ddf90f3863b138e67c6f68f7de5_tn)'}}></Box>
                    <div className={classes.favouriteInfoShop}>Y??u Th??ch</div>
                </Box>
                <Box ml={3}>
                    <div>
                        3cgogo.vn
                    </div>
                    <Box fontSize="14px" color="#0000008a" mb={1}>Online 4 gi??? tr?????c</Box>
                    <Box display="flex">
                        <Link to="/chat" className={`${classes.btnInfoShop} ${classes.btnPrimaryShop}`} >
                            <ForumIcon />
                            Chat Ngay
                        </Link>
                        <Link to="/shopee-store" className={`${classes.btnInfoShop} ${classes.btnNormalShop}`}>
                            <StorefrontIcon />
                            Xem Shop
                        </Link>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.contentInfoShop} flex="4">
                <div className={classes.textContentInfo}>
                    <div>????nh gi?? <span>16,8k</span></div>
                    <div>S???n Ph???m <span>658</span></div>
                </div>
                <div className={classes.textContentInfo}>
                    <div>T??? L??? Ph???n H???i <span>98%</span></div>
                    <div>Th???i Gian Ph???n H???i <span>trong v??i ph??t</span></div>
                </div>
                <div className={classes.textContentInfo}>
                    <div>Tham Gia <span>10 th??ng tr?????c</span></div>
                    <div>Ng?????i Theo D??i <span>16,7k</span></div>
                </div>
            </Box>
        </div>
        {/* description */}
        <Grid container spacing={1} mt={1}>
            <Grid item xs={9.6}>
                <div className={classes.description}>
                    <div className={classes.descripTitle}>
                        Chi ti???t s???n ph???m
                    </div>
                    <table>
                        <tr>
                            <td width="15%">Danh M???c</td>
                            <td>
                                <PathProduct />
                            </td>
                        </tr>
                        <tr>
                            <td>Th????ng hi???u ??i???n tho???i</td>
                            <td>Apple</td>
                        </tr>
                        <tr>
                            <td>Kho h??ng</td>
                            <td>92238</td>
                        </tr>
                    </table>
                    <Box my={2} className={classes.descripTitle}>
                        M?? T??? S???N PH???M
                    </Box>
                    <Box pl={1} className={classes.contentDescript}>
                        <p>Th???i gian giao h??ng d??? ki???n cho s???n ph???m n??y l?? t??? 7-9 ng??y</p>
                        <p>Th????ng hi???u: SANSUNQI</p>
                        <p>Lo???i s???n ph???m: ???p ??i???n tho???i</p>
                        <p>?????c ??i???m: ???p ??i???n tho???i cho iPhone 11 Pro Max</p>
                        <p>Th????ng hi???u t????ng th??ch: Apple iPhone</p>
                        <p>M???u iPhone t????ng th??ch: iPhone 6</p>
                        <p>M???u iPhone t????ng th??ch: iPhone 6 Plus</p>
                        <p>M???u iPhone t????ng th??ch: iPhone 6S</p>
                        <p>M???u iPhone t????ng th??ch: iPhone 6S Plus</p>
                        <p>M???u iPhone t????ng th??ch: iPhone 7</p>
                        <p>M???u iPhone t????ng th??ch: iPhone 7 Plus</p>
                        <p>M???u iPhone t????ng th??ch: iPhone 8 Plus</p>
                        <p>M???u iPhone t????ng th??ch: iPhone 8</p>
                        <p>M???u iPhone t????ng th??ch: iPhone X</p>
                        <p>M???u iPhone t????ng th??ch: iPhone XS Max</p>
                        <p>M???u iPhone t????ng th??ch: iPhone XR</p>
                        <p>M???u iPhone t????ng th??ch: iPhone XS</p>
                        <p>M???u iPhone t????ng th??ch: iPhone 11</p>
                        <p>M???u iPhone t????ng th??ch: iPhone 11 Pro Max</p>
                        <p>M???u t????ng th??ch 3: D??nh cho Apple iPhone 10 11 Pro 11 Pro Max</p>
                        <p>Ch???t li???u: PC c???ng ch???t l?????ng cao</p>
                        <p>Th??ch h???p cho: Qu?? t???ng cho ph??? n???, ????n ??ng, n???, nam</p>
                        <p>?????c ??i???m: ???p ??i???n tho???i ch???ng s???c vi???n m??u s???c t????ng ph???n th???i trang</p>
                        <p>?????c ??i???m 1: ???p ??i???n tho???i ch???ng s???c ch???ng va ?????p ch???ng b???i b???n</p>
                        <p>?????c ??i???m 2: ???p ??i???n tho???i nh??m</p>
                    </Box>
                </div>
                <div ref={comment} className={classes.rate}>
                    <Box sx={{fontSize: 18, color: '#000000DE', mb: 2}}>
                        ????NH GI?? S???N PH???M
                    </Box>
                    <Box className={classes.filterRate}>
                        <Box width="280px" color="#EE4D2D">
                            <Box className={classes.rateNumber}>
                                <span>4.9</span> tr??n 5
                            </Box>
                            <div>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </div>
                        </Box>
                        <Box display="flex" alignItems="flex-start" flexWrap="wrap">
                            {renderFilterRate}
                        </Box>
                    </Box>
                    {/*  */}
                    <Box className={classes.commentRate}>
                        <div className={classes.avatarComment}>
                            <div></div>
                        </div>
                        <Box>
                            <Box sx={{color: "#000000DE", cursor: "pointer", fontSize: "12px"}}>ngocren</Box>
                            <Box className={classes.iconStar} mt={0.6}>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </Box>
                            <Box color="#00000066" fontSize="14px">
                                Ph??n lo???i h??ng: M??u v??ng h???ng,iPhone XS Max
                            </Box>
                            <Box color="#000000cc" fontSize="14px" my={1.8}>
                                M??u n??y v??? n l?? m??u cam cam
                            </Box>
                            <Box>
                                <Box className={classes.tagComment}>
                                    Ch???t l?????ng s???n ph???m tuy???t v???i
                                </Box>
                                <Box className={classes.tagComment}>
                                    ????ng g??i s???n ph???m r???t ?????p v?? ch???c ch???n
                                </Box>
                                <Box className={classes.tagComment}>
                                    Shop ph???c v??? r???t t???t
                                </Box>
                                <Box className={classes.tagComment}>
                                    R???t ????ng ti???n
                                </Box>
                                <Box className={classes.tagComment}>
                                    Th???i gian giao h??ng r???t nhanh
                                </Box>
                            </Box>
                            <Box display="flex" my={1.5}>
                                <Box className={classes.imgComment}>
                                    <div></div>
                                </Box>
                                <Box className={classes.imgComment}>
                                    <div></div>
                                </Box>
                                <Box className={classes.imgComment}>
                                    <div></div>
                                </Box>
                                <Box className={classes.imgComment}>
                                    <div></div>
                                </Box>
                            </Box>
                            <Box fontSize="12px" color="#0000008a">
                                2021-08-28 20:42
                            </Box>
                            <Box mt={1.5} sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#00000066'}}>
                                <Box sx={{display: 'flex'}} >
                                    <ThumbUpIcon sx={{ cursor: 'pointer', fontSize: 16, color: '#00000044', mr: 1 }} />
                                    <Box fontSize="14px">H???u ??ch?</Box>
                                </Box>
                                <Box>
                                    <MoreVertIcon sx={{ color: '#00000044', cursor: 'pointer' }} />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className={classes.commentRate}>
                        <div className={classes.avatarComment}>
                            <div></div>
                        </div>
                        <Box>
                            <Box color="#000000DE" fontSize="12px">ngocren</Box>
                            <Box className={classes.iconStar} mt={0.6}>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </Box>
                            <Box color="#00000066" fontSize="14px">
                                Ph??n lo???i h??ng: M??u v??ng h???ng,iPhone XS Max
                            </Box>
                            <Box color="#000000cc" fontSize="14px" my={1.8}>
                                M??u n??y v??? n l?? m??u cam cam
                            </Box>
                            <Box>
                                <Box className={classes.tagComment}>
                                    Ch???t l?????ng s???n ph???m tuy???t v???i
                                </Box>
                                <Box className={classes.tagComment}>
                                    ????ng g??i s???n ph???m r???t ?????p v?? ch???c ch???n
                                </Box>
                                <Box className={classes.tagComment}>
                                    Shop ph???c v??? r???t t???t
                                </Box>
                                <Box className={classes.tagComment}>
                                    R???t ????ng ti???n
                                </Box>
                                <Box className={classes.tagComment}>
                                    Th???i gian giao h??ng r???t nhanh
                                </Box>
                            </Box>
                            <Box display="flex" my={1.5}>
                                <Box className={classes.imgComment}>
                                    <div></div>
                                </Box>
                                <Box className={classes.imgComment}>
                                    <div></div>
                                </Box>
                                <Box className={classes.imgComment}>
                                    <div></div>
                                </Box>
                                <Box className={classes.imgComment}>
                                    <div></div>
                                </Box>
                            </Box>
                            <Box fontSize="12px" color="#0000008a">
                                2021-08-28 20:42
                            </Box>
                            <Box mt={1.5} sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#00000066'}}>
                                <Box sx={{display: 'flex'}} >
                                    <ThumbUpIcon sx={{ fontSize: 16, color: '#00000044', mr: 1 }} />
                                    <Box fontSize="14px">H???u ??ch?</Box>
                                </Box>
                                <Box>
                                    <MoreVertIcon sx={{ color: '#00000044' }} />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className={classes.commentRate}>
                        <div className={classes.avatarComment}>
                            <div></div>
                        </div>
                        <Box>
                            <Box color="#000000DE" fontSize="12px">ngocren</Box>
                            <Box className={classes.iconStar} mt={0.6}>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </Box>
                            <Box color="#00000066" fontSize="14px">
                                Ph??n lo???i h??ng: M??u v??ng h???ng,iPhone XS Max
                            </Box>
                            <Box color="#000000cc" fontSize="14px" my={1.8}>
                                M??u n??y v??? n l?? m??u cam cam
                            </Box>
                            <Box>
                                <Box className={classes.tagComment}>
                                    Ch???t l?????ng s???n ph???m tuy???t v???i
                                </Box>
                                <Box className={classes.tagComment}>
                                    ????ng g??i s???n ph???m r???t ?????p v?? ch???c ch???n
                                </Box>
                                <Box className={classes.tagComment}>
                                    Shop ph???c v??? r???t t???t
                                </Box>
                                <Box className={classes.tagComment}>
                                    R???t ????ng ti???n
                                </Box>
                                <Box className={classes.tagComment}>
                                    Th???i gian giao h??ng r???t nhanh
                                </Box>
                            </Box>
                            <Box display="flex" my={1.5}>
                                <Box className={classes.imgComment}>
                                    <div></div>
                                </Box>
                                <Box className={classes.imgComment}>
                                    <div></div>
                                </Box>
                                <Box className={classes.imgComment}>
                                    <div></div>
                                </Box>
                                <Box className={classes.imgComment}>
                                    <div></div>
                                </Box>
                            </Box>
                            <Box fontSize="12px" color="#0000008a">
                                2021-08-28 20:42
                            </Box>
                            <Box mt={1.5} sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#00000066'}}>
                                <Box sx={{display: 'flex'}} >
                                    <ThumbUpIcon sx={{ fontSize: 16, color: '#00000044', mr: 1 }} />
                                    <Box fontSize="14px">H???u ??ch?</Box>
                                </Box>
                                <Box>
                                    <MoreVertIcon sx={{ color: '#00000044' }} />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    {/* page comment */}
                    <div className={classes.pageNumber}>
                        <div>
                            <KeyboardArrowLeftIcon />
                        </div>
                        <div className={classes.active}>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>...</div>
                        <div>
                            <KeyboardArrowRightIcon />
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item xs={2.4}>
                <Box className={classes.voucher2} backgroundColor="#fff" px={1.5} py={2}>
                    <Box fontSize="14px" color="#0000006a" mb={2}>
                        M?? gi???m gi?? c???a Shop
                    </Box>
                    <Box className={classes.voucherShop} mb={2}>
                        <div className={classes.voucherShopLeft}>
                            <Box fontSize="14px">Gi???m 50%</Box>
                            <Box fontSize="12px">????n T???i Thi???u <sup>??</sup>0</Box>
                            <Box fontSize="12px">Gi???m T???i ??a <sup>??</sup>5k</Box>
                            <Box fontSize='10px' mt={1} color="#0000008a">HSD 01.10.2021</Box>
                        </div>
                        <div className={classes.voucherShopRight}>
                            <BtnPrimary>L??u</BtnPrimary>
                        </div>
                    </Box>
                    <Box className={classes.voucherShop} mb={2}>
                        <div className={classes.voucherShopLeft}>
                            <Box fontSize="14px">Gi???m 50%</Box>
                            <Box fontSize="12px">????n T???i Thi???u <sup>??</sup>0</Box>
                            <Box fontSize="12px">Gi???m T???i ??a <sup>??</sup>5k</Box>
                            <Box fontSize='10px' mt={1} color="#0000008a">HSD 01.10.2021</Box>
                        </div>
                        <div className={classes.voucherShopRight}>
                            <BtnPrimary>L??u</BtnPrimary>
                        </div>
                    </Box>
                    <Box className={classes.voucherShop}>
                        <div className={classes.voucherShopLeft}>
                            <Box fontSize="14px">Gi???m 50%</Box>
                            <Box fontSize="12px">????n T???i Thi???u <sup>??</sup>0</Box>
                            <Box fontSize="12px">Gi???m T???i ??a <sup>??</sup>5k</Box>
                            <Box fontSize='10px' mt={1} color="#0000008a">HSD 01.10.2021</Box>
                        </div>
                        <div className={classes.voucherShopRight}>
                            <BtnPrimary>L??u</BtnPrimary>
                        </div>
                    </Box>
                </Box>
                <Box className={classes.wrapTopProduct}>
                    <Box fontSize="14px" color="#0000006a" pt={2} style={{paddingLeft: '20px'}}>
                        M?? gi???m gi?? c???a Shop
                    </Box>
                    <Box className={classes.topProduct}>
                        <div></div>
                        <p>???p iphone m???t l??ng k??nh c?????ng l???c 6/6plus 6s/6splus 6/7/7plus 8/8plus/x/xs/xs max/11/11 pro/11 promax ??? Pee store</p>
                        <span>
                            <sup>??</sup>19.000 - <sup>??</sup>31.900
                        </span>
                    </Box>
                    <Box className={classes.topProduct}>
                        <div></div>
                        <p>???p iphone m???t l??ng k??nh c?????ng l???c 6/6plus 6s/6splus 6/7/7plus 8/8plus/x/xs/xs max/11/11 pro/11 promax ??? Pee store</p>
                        <span>
                            <sup>??</sup>19.000 - <sup>??</sup>31.900
                        </span>
                    </Box>
                    <Box className={classes.topProduct}>
                        <div></div>
                        <p>???p iphone m???t l??ng k??nh c?????ng l???c 6/6plus 6s/6splus 6/7/7plus 8/8plus/x/xs/xs max/11/11 pro/11 promax ??? Pee store</p>
                        <span>
                            <sup>??</sup>19.000 - <sup>??</sup>31.900
                        </span>
                    </Box>
                    <Box className={classes.topProduct}>
                        <div></div>
                        <p>???p iphone m???t l??ng k??nh c?????ng l???c 6/6plus 6s/6splus 6/7/7plus 8/8plus/x/xs/xs max/11/11 pro/11 promax ??? Pee store</p>
                        <span>
                            <sup>??</sup>19.000 - <sup>??</sup>31.900
                        </span>
                    </Box>
                </Box>
            </Grid>
        </Grid>
        
      </Fragment>
    )
}

export default withStyles(styles)(ProductDetailMain)
