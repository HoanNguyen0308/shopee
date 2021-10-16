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
        'Tất cả',
        '5 Sao (3,4k)',
        '4 Sao (60)',
        '3 Sao (47)',
        '2 Sao (40)',
        '1 Sao (120)',
        'Có Bình Luận (2,9k)',
        'Có hình ảnh / Video (1,1k)',
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
                                Chia sẻ:
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
                                    Đã thích (1,5k)
                                </Box>
                            </Box>
                        </Box>
                   </div>
                </Grid>
                <Grid item xs={7}>
                    <div className={classes.right}>
                        <div className={classes.title}>
                            <span>Yêu thích</span>
                            <p>
                                Ốp lưng trong suốt nhám chống sốc thời trang cho IPHONE X XS MAX XR 9 8 7 6 6S PLUS 11 PRO MAX
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
                                <Box className={classes.textBlur}>Đánh giá</Box>
                            </Box>
                            <div className={classes.line}></div>
                            <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                                <Box mr={1}>20.1k</Box>
                                <Box className={classes.textBlur}>Đã bán</Box>
                            </Box>
                        </Box>        
                        <Box p={2} alignItems="center" display="flex" backgroundColor="#fafafa">
                            <Box sx={{textDecoration: 'line-through', color: '#929292'}}>
                                <sup>đ</sup>
                                <span>20.000</span>
                            </Box>
                            <Box fontSize="30px" color="#ee4d2d" mb={0.5} mx={2}>
                                <sup style={{fontSize:'22px', textDecoration: 'underline'}}>đ</sup>
                                <span style={{marginTop: '-4px'}}>16.000</span>
                            </Box>
                            <Box>
                                <p className={classes.hightLine}>
                                    20% <span>Giảm</span>
                                </p>
                            </Box>
                        </Box>
                        <Grid container p={2} spacing={1}>
                            <Grid item xs={2} mb={1}>
                                <Box className={classes.textBlurTitle}>
                                    Mã Giảm Giá Của Shop
                                </Box>
                            </Grid>
                            <Grid item xs={10}>
                                <div className={classes.voucherSale}>
                                    <Box className={classes.hightLineBlure}>
                                        Giảm <sup>đ</sup>2,1k
                                    </Box>
                                    <Box className={classes.hightLineBlure}>
                                        Giảm <sup>đ</sup>4,1k
                                    </Box>
                                    <div className={classes.codeSale}>
                                        <p>
                                            Mã giảm giá của Shop
                                        </p>
                                        <span>
                                            Tiết kiệm hơn khi áp dụng mã giảm giá của Shop. Liên hệ với Shop nếu gặp trục trặc về mã giảm giá do Shop tự tạo.
                                        </span>
                                        <div className={classes.voucher}>
                                            <div className={classes.img}>
                                                <div></div>
                                            </div>
                                            <div className={classes.content}>
                                                <Box mb={-0.5}>Giảm <sup>đ</sup>2,099k</Box>
                                                <p>Đơn Tối Thiểu <sup>đ</sup>60k</p>
                                                <span>HSD: 07.10.2021</span>
                                            </div>
                                            <BtnPrimary>Lưu</BtnPrimary>
                                        </div>
                                        <div className={classes.voucher}>
                                            <div className={classes.img}>
                                                <div></div>
                                            </div>
                                            <div className={classes.content}>
                                                <Box mb={-0.5}>Giảm <sup>đ</sup>2,099k</Box>
                                                <p>Đơn Tối Thiểu <sup>đ</sup>60k</p>
                                                <span>HSD: 07.10.2021</span>
                                            </div>
                                            <BtnPrimary>Lưu</BtnPrimary>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={2} mb={2}>
                                <Box className={classes.textBlurTitle}>
                                    Deal Sốc
                                </Box>
                            </Grid>
                            <Grid item xs={10}>
                                <Box className={classes.hightLineBlure}>
                                    Mua Kèm Deal Sốc
                                </Box>
                            </Grid>
                            <Grid item xs={2}>
                                <Box className={classes.textBlurTitle}>
                                    Vận chuyển
                                </Box>
                            </Grid>
                            <Grid item xs={10} mb={2}>
                                <Box >
                                    <div className={classes.shipOto}>
                                        <LocalShippingIcon />
                                        <div>
                                            <p>Miễn phí vận chuyển</p>
                                            <span>Miễn Phí Vận Chuyển khi đơn đạt giá trị tối thiểu</span>
                                        </div>
                                    </div>
                                    <div className={classes.shipAbroad}>
                                        <FlightIcon />
                                        <div className={classes.center}>
                                            <p>Vận Chuyển Từ</p>
                                            <span>Phí Vận Chuyển</span>
                                        </div>
                                        <div className={classes.rightShipAbroad}>
                                            <div>Nước ngoài tới <span>huyện ba vì <KeyboardArrowDownIcon /></span></div>
                                            <span>
                                                <span className={classes.shipFastHover}><sup>đ</sup>1000 <KeyboardArrowDownIcon/></span>
                                                <div className={classes.shipFast}>
                                                    <p className={classes.header}>Vận chuyển nhanh quốc tế</p>
                                                    <div className={classes.cost}>
                                                        <Box mb={2}>Standard Express</Box>
                                                        <div>
                                                            <sup>đ</sup>10.000
                                                        </div>
                                                    </div>
                                                    <div className={classes.contentShipFast}>
                                                        <p>Nhận hàng vào 26 Th09 - 8 Th10</p>
                                                        <Box my={1}>
                                                            <span className={classes.primaryColor}>Miễn Phí Vận Chuyển</span> cho đơn hàng từ <span className={classes.primaryColor}><sup>đ</sup>50.000</span> (giảm tối đa <span className={classes.primaryColor}><sup>đ</sup>15.000</span>)</Box>
                                                        <p>Hình thức thanh toán khi nhận hàng sẽ không khả dụng ở khu vực giãn cách</p>
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
                                    Số Lượng
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
                                <p>92455 sản phẩm có sẵn</p>
                            </Grid>
                            <Grid item xs={12} display="flex">
                                <Box className={classes.moreCartBtn} mr={2}>
                                    <AddShoppingCartOutlinedIcon />
                                    Thêm vào giỏ hàng
                                </Box>
                                <Link to="/cart" className={classes.buyBtn}>
                                    Mua ngay
                                </Link>
                            </Grid>
                        </Grid>
                        <Link to="help" className={classes.guaranteed}>
                            <img src="/images/shopees/shopeeIcon.png" alt="icon shopee" />
                            <p>Shopee đảm bảo</p>
                            <span>3 ngày trả hàng / hoàn tiền</span>
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
                                Ốp lưng trong suốt nhám chống sốc thời trang cho IPHONE X XS MAX XR 9 8 7 6 6S PLUS 11 PRO MAX
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
                    <div className={classes.favouriteInfoShop}>Yêu Thích</div>
                </Box>
                <Box ml={3}>
                    <div>
                        3cgogo.vn
                    </div>
                    <Box fontSize="14px" color="#0000008a" mb={1}>Online 4 giờ trước</Box>
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
                    <div>Đánh giá <span>16,8k</span></div>
                    <div>Sản Phẩm <span>658</span></div>
                </div>
                <div className={classes.textContentInfo}>
                    <div>Tỉ Lệ Phản Hồi <span>98%</span></div>
                    <div>Thời Gian Phản Hồi <span>trong vài phút</span></div>
                </div>
                <div className={classes.textContentInfo}>
                    <div>Tham Gia <span>10 tháng trước</span></div>
                    <div>Người Theo Dõi <span>16,7k</span></div>
                </div>
            </Box>
        </div>
        {/* description */}
        <Grid container spacing={1} mt={1}>
            <Grid item xs={9.6}>
                <div className={classes.description}>
                    <div className={classes.descripTitle}>
                        Chi tiết sản phẩm
                    </div>
                    <table>
                        <tr>
                            <td width="15%">Danh Mục</td>
                            <td>
                                <PathProduct />
                            </td>
                        </tr>
                        <tr>
                            <td>Thương hiệu điện thoại</td>
                            <td>Apple</td>
                        </tr>
                        <tr>
                            <td>Kho hàng</td>
                            <td>92238</td>
                        </tr>
                    </table>
                    <Box my={2} className={classes.descripTitle}>
                        MÔ TẢ SẢN PHẨM
                    </Box>
                    <Box pl={1} className={classes.contentDescript}>
                        <p>Thời gian giao hàng dự kiến cho sản phẩm này là từ 7-9 ngày</p>
                        <p>Thương hiệu: SANSUNQI</p>
                        <p>Loại sản phẩm: Ốp điện thoại</p>
                        <p>Đặc điểm: Ốp điện thoại cho iPhone 11 Pro Max</p>
                        <p>Thương hiệu tương thích: Apple iPhone</p>
                        <p>Mẫu iPhone tương thích: iPhone 6</p>
                        <p>Mẫu iPhone tương thích: iPhone 6 Plus</p>
                        <p>Mẫu iPhone tương thích: iPhone 6S</p>
                        <p>Mẫu iPhone tương thích: iPhone 6S Plus</p>
                        <p>Mẫu iPhone tương thích: iPhone 7</p>
                        <p>Mẫu iPhone tương thích: iPhone 7 Plus</p>
                        <p>Mẫu iPhone tương thích: iPhone 8 Plus</p>
                        <p>Mẫu iPhone tương thích: iPhone 8</p>
                        <p>Mẫu iPhone tương thích: iPhone X</p>
                        <p>Mẫu iPhone tương thích: iPhone XS Max</p>
                        <p>Mẫu iPhone tương thích: iPhone XR</p>
                        <p>Mẫu iPhone tương thích: iPhone XS</p>
                        <p>Mẫu iPhone tương thích: iPhone 11</p>
                        <p>Mẫu iPhone tương thích: iPhone 11 Pro Max</p>
                        <p>Mẫu tương thích 3: Dành cho Apple iPhone 10 11 Pro 11 Pro Max</p>
                        <p>Chất liệu: PC cứng chất lượng cao</p>
                        <p>Thích hợp cho: Quà tặng cho phụ nữ, đàn ông, nữ, nam</p>
                        <p>Đặc điểm: Ốp điện thoại chống sốc viền màu sắc tương phản thời trang</p>
                        <p>Đặc điểm 1: Ốp điện thoại chống sốc chống va đập chống bụi bẩn</p>
                        <p>Đặc điểm 2: Ốp điện thoại nhám</p>
                    </Box>
                </div>
                <div ref={comment} className={classes.rate}>
                    <Box sx={{fontSize: 18, color: '#000000DE', mb: 2}}>
                        ĐÁNH GIÁ SẢN PHẨM
                    </Box>
                    <Box className={classes.filterRate}>
                        <Box width="280px" color="#EE4D2D">
                            <Box className={classes.rateNumber}>
                                <span>4.9</span> trên 5
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
                                Phân loại hàng: Màu vàng hồng,iPhone XS Max
                            </Box>
                            <Box color="#000000cc" fontSize="14px" my={1.8}>
                                Màu này về n là màu cam cam
                            </Box>
                            <Box>
                                <Box className={classes.tagComment}>
                                    Chất lượng sản phẩm tuyệt vời
                                </Box>
                                <Box className={classes.tagComment}>
                                    Đóng gói sản phẩm rất đẹp và chắc chắn
                                </Box>
                                <Box className={classes.tagComment}>
                                    Shop phục vụ rất tốt
                                </Box>
                                <Box className={classes.tagComment}>
                                    Rất đáng tiền
                                </Box>
                                <Box className={classes.tagComment}>
                                    Thời gian giao hàng rất nhanh
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
                                    <Box fontSize="14px">Hữu Ích?</Box>
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
                                Phân loại hàng: Màu vàng hồng,iPhone XS Max
                            </Box>
                            <Box color="#000000cc" fontSize="14px" my={1.8}>
                                Màu này về n là màu cam cam
                            </Box>
                            <Box>
                                <Box className={classes.tagComment}>
                                    Chất lượng sản phẩm tuyệt vời
                                </Box>
                                <Box className={classes.tagComment}>
                                    Đóng gói sản phẩm rất đẹp và chắc chắn
                                </Box>
                                <Box className={classes.tagComment}>
                                    Shop phục vụ rất tốt
                                </Box>
                                <Box className={classes.tagComment}>
                                    Rất đáng tiền
                                </Box>
                                <Box className={classes.tagComment}>
                                    Thời gian giao hàng rất nhanh
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
                                    <Box fontSize="14px">Hữu Ích?</Box>
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
                                Phân loại hàng: Màu vàng hồng,iPhone XS Max
                            </Box>
                            <Box color="#000000cc" fontSize="14px" my={1.8}>
                                Màu này về n là màu cam cam
                            </Box>
                            <Box>
                                <Box className={classes.tagComment}>
                                    Chất lượng sản phẩm tuyệt vời
                                </Box>
                                <Box className={classes.tagComment}>
                                    Đóng gói sản phẩm rất đẹp và chắc chắn
                                </Box>
                                <Box className={classes.tagComment}>
                                    Shop phục vụ rất tốt
                                </Box>
                                <Box className={classes.tagComment}>
                                    Rất đáng tiền
                                </Box>
                                <Box className={classes.tagComment}>
                                    Thời gian giao hàng rất nhanh
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
                                    <Box fontSize="14px">Hữu Ích?</Box>
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
                        Mã giảm giá của Shop
                    </Box>
                    <Box className={classes.voucherShop} mb={2}>
                        <div className={classes.voucherShopLeft}>
                            <Box fontSize="14px">Giảm 50%</Box>
                            <Box fontSize="12px">Đơn Tối Thiểu <sup>đ</sup>0</Box>
                            <Box fontSize="12px">Giảm Tối Đa <sup>đ</sup>5k</Box>
                            <Box fontSize='10px' mt={1} color="#0000008a">HSD 01.10.2021</Box>
                        </div>
                        <div className={classes.voucherShopRight}>
                            <BtnPrimary>Lưu</BtnPrimary>
                        </div>
                    </Box>
                    <Box className={classes.voucherShop} mb={2}>
                        <div className={classes.voucherShopLeft}>
                            <Box fontSize="14px">Giảm 50%</Box>
                            <Box fontSize="12px">Đơn Tối Thiểu <sup>đ</sup>0</Box>
                            <Box fontSize="12px">Giảm Tối Đa <sup>đ</sup>5k</Box>
                            <Box fontSize='10px' mt={1} color="#0000008a">HSD 01.10.2021</Box>
                        </div>
                        <div className={classes.voucherShopRight}>
                            <BtnPrimary>Lưu</BtnPrimary>
                        </div>
                    </Box>
                    <Box className={classes.voucherShop}>
                        <div className={classes.voucherShopLeft}>
                            <Box fontSize="14px">Giảm 50%</Box>
                            <Box fontSize="12px">Đơn Tối Thiểu <sup>đ</sup>0</Box>
                            <Box fontSize="12px">Giảm Tối Đa <sup>đ</sup>5k</Box>
                            <Box fontSize='10px' mt={1} color="#0000008a">HSD 01.10.2021</Box>
                        </div>
                        <div className={classes.voucherShopRight}>
                            <BtnPrimary>Lưu</BtnPrimary>
                        </div>
                    </Box>
                </Box>
                <Box className={classes.wrapTopProduct}>
                    <Box fontSize="14px" color="#0000006a" pt={2} style={{paddingLeft: '20px'}}>
                        Mã giảm giá của Shop
                    </Box>
                    <Box className={classes.topProduct}>
                        <div></div>
                        <p>Ốp iphone mặt lưng kính cường lực 6/6plus 6s/6splus 6/7/7plus 8/8plus/x/xs/xs max/11/11 pro/11 promax – Pee store</p>
                        <span>
                            <sup>đ</sup>19.000 - <sup>đ</sup>31.900
                        </span>
                    </Box>
                    <Box className={classes.topProduct}>
                        <div></div>
                        <p>Ốp iphone mặt lưng kính cường lực 6/6plus 6s/6splus 6/7/7plus 8/8plus/x/xs/xs max/11/11 pro/11 promax – Pee store</p>
                        <span>
                            <sup>đ</sup>19.000 - <sup>đ</sup>31.900
                        </span>
                    </Box>
                    <Box className={classes.topProduct}>
                        <div></div>
                        <p>Ốp iphone mặt lưng kính cường lực 6/6plus 6s/6splus 6/7/7plus 8/8plus/x/xs/xs max/11/11 pro/11 promax – Pee store</p>
                        <span>
                            <sup>đ</sup>19.000 - <sup>đ</sup>31.900
                        </span>
                    </Box>
                    <Box className={classes.topProduct}>
                        <div></div>
                        <p>Ốp iphone mặt lưng kính cường lực 6/6plus 6s/6splus 6/7/7plus 8/8plus/x/xs/xs max/11/11 pro/11 promax – Pee store</p>
                        <span>
                            <sup>đ</sup>19.000 - <sup>đ</sup>31.900
                        </span>
                    </Box>
                </Box>
            </Grid>
        </Grid>
        
      </Fragment>
    )
}

export default withStyles(styles)(ProductDetailMain)
