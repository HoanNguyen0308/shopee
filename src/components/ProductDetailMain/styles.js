const styles = (theme) => ({
    main: {
        backgroundColor: '#fff',
        padding: '15px',
        boxShadow: '0 1px 2px #ddd',
        '& sup': {
            textDecoration: 'underline',
            textTransform: 'lowercase'
        }
    },
    // right
    right: {
        '& $title': {
            '& span': {
                color: '#fff',
                padding: '3px',
                fontSize: '12px',
                backgroundColor: theme.color.primary,
                marginRight: '8px',
                float: 'left',
            },
            '& p': {
                fontSize: '20px',
                color: '#000000CC',
            },
        }
    },
    title: {},
    shipOto: {
        textTransform: 'capitalize',
        display: 'flex',
        '& svg': {
            color: theme.color.secondary,
            marginRight: '6px',
        },
        '& div': {
            fontSize: '14px',
            '& p': {
                color: '#222222',
                marginBottom: '6px',
            },
            '& span': {
                color: '#0000008a',
            }
        }
    },
    shipAbroad: {
        textTransform: 'capitalize',
        display: 'flex',
        fontSize: '14px',
        alignItems: 'flex-start',
        marginTop: '10px',
        '& svg': {
            color: theme.color.secondary,
            marginRight: '6px',
        },
    },
    center: {
        color: '#0000008a',
        '& p': {
            marginBottom: '6px',
        }
    },
    rightShipAbroad: {
        color: '#222',
        marginLeft: '10px',
        '& > div': {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '6px',
            '& span': {
                display: 'flex',
                alignItems: 'center',
                marginLeft: '4px'
            }
        },
        '& > span': {
            display: 'inline-flex !important',
            cursor: 'pointer',
            position: 'relative',
            '&:hover $shipFastHover': {
                color: theme.color.primary,
            },
            '&:hover $shipFast': {
                display: 'block',
            }
        },
        '& $shipFastHover': {
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            marginLeft: '10px',
            '& sup': {
                textTransform: 'lowercase',
                position: 'absolute',
                left: '-8px',
                top: '-2px',
            }
        },
        '& svg': {
            fontSize: '16px',
            color: '#000'
        }
    },
    shipFastHover: {},
    shipFast: {
        position: 'absolute',
        backgroundColor: '#fff',
        width: '360px',
        boxShadow: '0 0 3px #aaa',
        display: 'none',
        top: '20px',
        zIndex: '10',
        padding: '20px',
        fontSize: '14px',
        textTransform: 'none',
        '& $cost': {
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '10px',
            "& p": {
                display: 'flex',
            }
        },
        '& $header': {
            paddingBottom: '20px',
            borderBottom: '1px solid #ddd',
        },
        '& $contentShipFast': {
            fontSize: '12px', 
            color: '#666'
        }
    },
    cost: {},
    header: {},
    contentShipFast: {},
    boxMaterial: {
        color: '#000000CC',
        border: '1px solid #ddd',
        display: 'inline-block',
        padding: '8px 12px', 
        margin: '0 8px 10px 0',
        cursor: 'pointer',
        fontSize: '14px',
        borderRadius: '2px',
        minWidth: '80px',
        textAlign: 'center',
        // checked kind of
        '&$active': {
            color: theme.color.primary,
            border: `1px solid ${theme.color.primary}`,
            position: 'relative',
            '& $boxMaterialActive': {
                content: '""',
                position: 'absolute',
                right: 0,
                bottom: 0,
                borderStyle: 'solid',
                borderWidth: '15px 15px 0 0',
                borderColor: `transparent ${theme.color.primary}`,
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    display: 'block',
                    top: '-4px',
                    transform: 'rotate(45deg)',
                    left: '6.8px',
                    width: '4px',
                    height: '1.3px',
                    backgroundColor: 'white'
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    display: 'block',
                    top: '-5px',
                    transform: 'rotate(120deg)',
                    left: '8px',
                    width: '7px',
                    height: '1.3px',
                    backgroundColor: 'white'
                },
            },
        },
        '&:hover': {
            color: theme.color.primary,
            border: `1px solid ${theme.color.primary}`
        }
    },
    boxMaterialActive: {},
    quantity: {
        display: 'flex',
        alignItems: 'center',
        '& p': {
            marginLeft: '20px',
            fontSize: '14px',
            color: '#757575',
        },
    },
    guaranteed: {
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
        padding: '26px 20px 0 20px',
        borderTop: '1px solid #eee',
        marginTop: '16px',
        textDecoration: 'none',
        '& img': {
            width: '20px'
        },
        '& p': {
            color: '#222',
            margin: '0 22px 0 6px'
        },
        '& span': {
            color: '#0000008a'
        }
    },
    feature: {
        display: 'flex',
        alignItems: 'center',
        '& svg': {
            fontSize: '16px',
        },
        '& div': {
            border: '1px solid #ddd',
            width: '32px',
            height: '32px',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            cursor: 'pointer'
        },
        '& $amount': {
            width: '50px',
            margin: '0 -1px',
            cursor: 'text',
            useSelect: 'none',
        },

    },
    amount: {},
    moreCartBtn: {
        fontSize: '14px',
        color: theme.color.primary,
        display: 'flex',
        alignItems: 'center',
        border: `1px solid ${theme.color.primary}`,
        backgroundColor: '#fceee8',
        width: '180px',
        justifyContent: 'center',
        height: '48px',
        textTransform: 'capitalize',
        cursor: 'pointer',
        '& svg': {
            marginRight: '6px',
        },
        '&:hover': {
            backgroundColor: '#FFF8F5',
        }
    },
    buyBtn: {
        fontSize: '14px',
        color: '#fff',
        border: `1px solid ${theme.color.primary}`,
        backgroundColor: theme.color.primary,
        width: '180px',
        justifyContent: 'center',
        height: '48px',
        lineHeight: '48px',
        textAlign: 'center',
        textTransform: 'capitalize',
        cursor: 'pointer',
        textDecoration: 'none',
        '&:hover': {
            backgroundColor: '#dd4d2d',
        }
    },
    // voucher
    voucherSale: {
        display: 'inline',
        cursor: 'pointer',
        position: 'relative',
        '&:hover $codeSale': {
            display: 'block',
        },
    },
    codeSale: {
        display: 'none',
        position: 'absolute',
        padding: '24px',
        boxShadow: '0 0 3px #ccc',
        backgroundColor: '#fff',
        width: '400px',
        zIndex: '10',
        left: '-110px',
        top: '40px',
        '& span': {
            fontSize: '14px',
            color: '#0000008a',
        },
        '&::before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            borderWidth: '8px',
            borderColor: '#fff',
            borderStyle: 'solid',
            top: '-8px',
            left: '130px',
            boxShadow: '-1px -1px 1px #ddd',
            transform: 'rotate(45deg)',
        },
        '&::after': {
            content: '""',
            display: 'block',
            position: 'absolute',
            width: '200px',
            height: '20px',
            backgroundColor: 'transparent',
            top: '-20px',
            left: '100px',
        },
    },
    voucher: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '1px solid #ddd',
        boxShadow: '1px 1px 2px #eee',
        padding: '0 12px',
        marginTop: '15px',
        position: 'relative',
        '&::before': {
            content: '""',
            display: 'block',
            width: '20px',
            height: '100%',
            position: 'absolute',
            // border saw
            backgroundImage: 'linear-gradient(144deg, white 50%, transparent 50%), linear-gradient(34deg, white 50%, transparent 50%), linear-gradient(90deg, white 60%, transparent 50%)',
            backgroundSize: '10px 10px',
            backgroundPosition: 'top left',
            backgroundRepeat: 'repeat-y',
            filter: 'drop-shadow(1px 0 0 #ddd) drop-shadow(0px 1px 0 #ddd) drop-shadow(0px -1px 0 #ddd)',
            transform: 'rotate(180deg)',
            left: '-16px',
        },
    },
    img: {
        width: '60px',
        '& div': {
            borderRadius: '50%',
            paddingBottom: '100%',
            background: 'no-repeat center / cover',
            backgroundImage: 'url(https://cf.shopee.vn/file/68907ddf90f3863b138e67c6f68f7de5_tn)',
        },
    },
    content: {
        borderLeft: '1px dashed #ddd',
        padding: '20px 10px',
        '& span': {
            fontSize: '10px',
            display: 'inline-block',
            marginTop: '8px',
        },
        '& p': {
            fontSize: '14px',
            marginTop: '6px',
        }
    },
    // left
    left: {
        '& $imgProduct': {
            cursor: 'pointer',
            '& div': {
                width: '100%',
                paddingBottom: '100%',
                background: 'no-repeat center / cover',
                backgroundImage: 'url(https://cf.shopee.vn/file/a4bbef611b0e66ba2e9f55f2f8cf9dd4)',
            },
        }
    },
    imgProduct: {},
    wrapSlider: {
        position: 'relative',
        overflow: 'hidden',
    },
    sliderImg: {
        display: 'flex',
        margin: '10px -5px 0 -5px',
    },
    itemImg: {
        width: '20%',
        flexShrink: '0',
        padding: '0 5px',
        '& div': {
            cursor: 'pointer',
            width: '100%',
            paddingBottom: '100%',
            background: 'no-repeat center / cover',
            '&$active': {
                border: `2px solid ${theme.color.primary}`,
                paddingBottom: 'calc(100% - 4px)',
            }
        },
    },
    itemImgOnModal: {
        width: '33.33%',
        padding: '0 5px',
        cursor: 'pointer',
        marginBottom: '10px',
        '& div': {
            width: '100%',
            paddingBottom: '100%',
            background: 'no-repeat center / cover',
            '&$active': {
                border: `2px solid ${theme.color.primary}`,
                paddingBottom: 'calc(100% - 4px)',
            },
            '&:hover': {
                opacity: 0.8,
            }
        }
    },
    active: {},
    arrowSlider: {
        position: 'absolute',
        top: '55%',
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba( 0, 0, 0, 0.2)',
        padding: '4px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    },
    arrowSliderLeft:{
        left: '0',
        color: '#fff',
    },
    arrowSliderRight: {
        right: '0',
        color: '#fff',
    },
    // 
    line: {
        width: '1px',
        height: '20px',
        margin: '0 12px',
        backgroundColor: '#ccc',
    },
    textBlur: {
        fontSize: '14px',
        color: '#767676',
    },
    textBlurTitle: {
        fontSize: '14px',
        color: '#757575',
        display: 'inline',
    },
    hightLine: {
        padding: '2px',
        backgroundColor: theme.color.primary,
        fontSize: '12px',
        color: '#fff',
        '& span': {
            fontWeight: 'bold'
        }
    },
    hightLineBlure: {
        padding: '1px 5px',
        color: theme.color.primary,
        backgroundColor: '#fbecec',
        fontSize: '14px',
        display: 'inline-block',
        marginRight: '8px',
    },
    primaryColor: {
        color: theme.color.primary,
    },

    // part 2 info shop
    infoShop: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: '15px',
        padding: 25,
        boxShadow: '0 1px 1px #ddd'
    },
    favouriteInfoShop: {
        position: 'absolute',
        bottom: '0',
        fontSize: 12,
        color: '#fff',
        backgroundColor: theme.color.primary,
        padding: 2,
        whiteSpace: 'nowrap',
        left: '50%',
        transform: 'translateX(-50%)'
    },
    btnInfoShop: {
        textDecoration: 'none',
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
        padding: '8px 15px',
        '& svg': {
            fontSize: '16px',
            marginRight: '4px',
        }
    },
    btnPrimaryShop: {
        border: `1px solid ${theme.color.primary}`,
        color: theme.color.primary,
        backgroundColor: '#fceee8',
        marginRight: '10px'
    },
    btnNormalShop: {
        border: '1px solid #ddd',
        color: '#555',
    },
    contentInfoShop: {
        display: 'flex',
        justifyContent: 'space-between',
        flex: '1',
        padding: ' 20px 0 20px 100px',
        borderLeft: '1px solid #eee',
    },
    textContentInfo: {
        fontSize: 14,
        color: '#00000066',
        display: 'flex',
        flexDirection: 'column',
        height: '54px',
        justifyContent: 'space-between',
        '& span': {
            color: theme.color.primary,
            marginLeft: '10px',
        }
    },
    // description
    description: {
        padding: 25,
        backgroundColor: '#fff',
        fontSize: 14,
        boxShadow: '0 1px 1px #ddd',
        '& table': {
            paddingLeft: '10px',
        },
        '& tr':{
            color: '#000000cc'
        },
        '& table tr td:first-child': {
            color: '#00000066',
            height: '40px',
            paddingRight: '60px'
        }
    },
    descripTitle: {
        fontSize: 18,
        textTransform: 'uppercase',
        backgroundColor: '#00000005',
        color: '#000000DE',
        padding: 14,
        
    },
    contentDescript: {
        fontSize: 14,
        color: '#000000cc',
        '& p': {
            lineHeight:'32px'
        },
    },
    // voucher 2
    voucher2: {
        boxShadow: '0 1px 1px #ddd'
    },
    voucherShop: {
        display: 'flex',
        marginLeft: '12px',
        border: `1px solid #f6c9c0`,
        backgroundColor: '#fdf4f4',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: theme.color.primary,
        boxShadow: '0 1px 4px #ddd',
        position: 'relative',
        zIndex: '1',
        '&::before': {
            content: '""',
            display: 'block',
            width: '20px',
            height: '100%',
            position: 'absolute',
            // border saw
            backgroundImage: 'linear-gradient(144deg, #fdf4f4 50%, transparent 50%), linear-gradient(34deg, #fdf4f4 50%, transparent 50%), linear-gradient(90deg, #fdf4f4 60%, transparent 50%)',
            backgroundSize: '10px 10px',
            backgroundPosition: 'top left',
            backgroundRepeat: 'repeat-y',
            filter: 'drop-shadow(1px 0 0 #f6c9c0) drop-shadow(0px 1px 0 #f6c9c0) drop-shadow(0px -1px 0 #f6c9c0)',
            transform: 'rotate(180deg)',
            left: '-16px',
        },
    },
    voucherShopLeft: {
        marginLeft: '12px'
    },
    voucherShopRight: {
        padding: '30px 8px',
        borderLeft: '1px dashed #ddd',
        '& div': {
            padding: '8px 18px',
            fontSize: '13px'
        }
    },
    // 
    wrapTopProduct: {
        backgroundColor: '#fff',
        marginTop: '15px',
        boxShadow: '0 1px 1px #ddd'
    },
    topProduct: {
        padding: '20px',
        borderBottom: `2px solid ${theme.color.bgColor}`,
        '& div': {
            paddingBottom: '100%',
            background: 'no-repeat center / cover',
            backgroundImage: 'url(https://cf.shopee.vn/file/668bd2a90a6f9f9754d8e8816fbbfea0_tn)'
        },
        '& p': {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            '-webkit-box-orient': 'vertical',
            '-webkit-line-clamp': '2',
            fontSize: '14px',
            color: '#000000cc',
            margin: '10px',
            marginBottom: '6px'
        },
        '& span': {
            margin: '0 10px',
            color: theme.color.primary,
            '& sup': {
                fontSize: '12px'
            }
        }
    },
    // rate
    rate: {
        backgroundColor: '#fff',
        padding: '25px',
        marginTop: '15px',
        boxShadow: '0 1px 1px #ddd',
    },
    filterRate: {
        padding: '30px',
        border: '1px solid #f9ede5',
        backgroundColor: '#fffbf8',
        display: 'flex',
        justifyContent: 'space-between',
        '& svg': {
            fontSize: '28px',
            marginRight: '-3px'
        }
    },
    rateNumber: {
        fontSize: '18px',
        '& span': {
            fontSize: '30px'
        }
    },
    tagFilterRate: {
        padding: '7px 10px',
        minWidth: '100px',
        textAlign: 'center',
        color: '#000000de',
        fontSize: '14px',
        border: '1px solid #ddd',
        whiteSpace: 'nowrap',
        margin: '0 10px 10px 0',
        cursor: 'pointer',
        backgroundColor: '#fff',
        '&$active': {
            border: `1px solid ${theme.color.primary}`,
            color: theme.color.primary,
        }
    },
    // comment
    commentRate: {
        display: 'flex',
        borderBottom: '1px solid #ddd',
        padding: '20px 0 20px 20px',
    },
    avatarComment: {
        width: 50,
        marginRight: '10px',
        cursor: 'pointer',
        '& div': {
            width: '40px',
            borderRadius: '50%',
            paddingTop: 40,
            background: 'no-repeat center / cover',
            backgroundImage: 'url(https://cf.shopee.vn/file/72d6a80e4d3cf4cd200806b9895d0b66_tn)',
        }
    },
    iconStar: {
        color: theme.color.primary,
        '& svg': {
            fontSize: '16px',
            marginRight: '-2px'
        }
    },
    tagComment: {
        fontSize: '14px',
        color: '#00000066',
        padding: '4px 10px',
        border: '1px solid rgba(0, 0, 0, 0.4)',
        borderRadius: '20px',
        display: 'inline-block',
        margin: '0 10px 5px 0',
        cursor: 'pointer',
    },
    imgComment: {
        width: 72,
        margin: '0 10px 10px 0',
        '& div': {
            paddingBottom: '100%',
            background: 'no-repeat center / cover',
            backgroundImage: 'url(https://cf.shopee.vn/file/3342bca10ec0369f357be0521e4816a7_tn)',
        }
    },
    pageNumber: {
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'flex-end',
        '& div': {
            color: '#000000de',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 24,
            height: 24,
            cursor: 'pointer',
            margin: '0 2px',
            borderRadius: '2px',
            '&$active': {
                backgroundColor: theme.color.primary,
                color: '#fff',
            },
            '&:first-child, &:last-child': {
                color: '#ccc',
                border: '1px solid #ddd',
                margin: '0 12px',
            }
        }
    },
    socialNetwork: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        '&::before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            width: '1px',
            height: '24px',
            backgroundColor: '#eee',
            right: '-32px'
        }
    },
    iconTwiter: {
        width: 24,
        height: 24,
        borderRadius: '50%',
        backgroundColor: '#57c3ff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        margin: '0 3.2px'
    }
})

export default styles
