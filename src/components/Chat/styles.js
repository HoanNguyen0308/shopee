export default (theme) =>({
    collapsed: {
        position: 'fixed',
        bottom: 0,
        right: 10,
        width: 100,
        height: 48,
        backgroundColor: '#fff',
        boxShadow: '0 0 15px #ddd',
        color: theme.color.primary,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '18px',
        fontWeight: '400',
        zIndex: '1000',
        cursor: 'pointer',
        '& span': {
            marginRight: '6px',
            fontSize: '26px',
        },
        '& svg': {
            width: '44px',
        }
    },
    enlarge: {
        position: 'fixed',
        bottom: 0,
        right: 10,
        backgroundColor: '#fff',
        borderRadius: '4px',
        boxShadow: '0 0 4px #ccc',
        transform: 'scale(0)',
        transition: 'all 0.3s linear',
        transformOrigin: 'right bottom',
        opacity: '0',
        zIndex: '1001'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '8px 10px',
        borderBottom: '1px solid #ddd',
        alignItems: 'center',
    },
    arrow: {
        width: '14px',
        height: '14px',
        color: '#333',
        border: '1px solid #333',
        display: 'flex',
        justifyContent: 'center',
        cursor: 'pointer',
        alignItems: 'center',
        '& svg': {
            fontSize: '22px'
        }
    },
    body: {
        height: 342,
        display: 'flex',
        transition: 'all 0.2s linear'
    },
    // body left
    bodyLeft: {
        width: 286,
        borderRight: '1px solid #ddd',
        transition: 'all 0.2s linear',
        position: 'relative',
    },
    bodyLeft_top: {
        position: 'absolute',
        height: 40,
        top: 0,
        left: 0,
        right: 0,
        boxShadow: '0 1px 1px #ccc',
        paddingLeft: '10px',
        display: 'flex',
        alignItems: 'center',
    },
    shopNameMess: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        color: '#333',
        fontSize: '15px',
        fontWeight: '700',
        lineHeight: '40px',
        backgroundColor: '#fff',
        border: 'none',
        '&:focus ~ $infoShop': {
            display: 'block'
        }
    },
    infoShop: {
        display: 'none',
        padding: '10px 0',
        position: 'absolute',
        width: '200px',
        backgroundColor: '#fff',
        top: '40px',
        boxShadow: '0 4px 8px #999',
        '& p': {
            fontSize: '15px',
            color: '#000000cc',
            fontWeight: '550',
            marginLeft: '10px',
        }
    },
    infoShopLink: {
        display: 'block',
        textDecoration: 'none',
        color: '#333',
        fontSize: 12,
        textAlign: 'center',
        padding: '9px 0',
        borderTop: '1px solid #eee',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#eee'
        }
    },
    bodyLeft_body: {
        overflowY: 'scroll',
        height: 'calc(100% - 100px)',
        marginTop: '40px',
        padding: '8px',
        '&::-webkit-scrollbar': {
            width: '4px',
            borderRadius: '4px'

        },
        '&::-webkit-scrollbar-track': {
            background: '#fff',
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#999',
            borderRadius: '5px'

        },
    },
    bodyLeft_bottom: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        padding: '6px 0 6px 8px',
        borderTop: '1px solid #ddd',
        '& input': {
            height: 26,
            width: '100%',
            border: 'none',
            outline: 'none',
            fontSize: '12px',
            color: '#333',
            marginBottom: '4px'
        }
    },
    iconMessage: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& svg': {
            fontSize: '18px',
            color: '#8ea4d1',
            marginRight: '8px',
            cursor: 'pointer',
        },
    },
    // body right
    bodyRight: {
        width: 222,
    },
    search: {
        position: 'relative',
        width: '100%',
        '& input': {
            backgroundColor: '#f4f4f6',
            border: 'none',
            height: 24,
            borderRadius: '2px',
            color: '#333',
            paddingLeft: '30px',
            outline: 'none',
            fontSize: '12px',
            width: '100%',
            '&:focus': {
                border: '1px solid #4185f4'
            },
            '&::placeholder': {
                color: '#bbb'
            }
        },
        '& svg': {
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#bbb',
        },
    },
    iconSearchInput: {
        fontSize: '19px !important',
        left: '8px'
    },
    iconCloseInput: {
        fontSize: '15px !important',
        right: '4px',
        cursor: 'pointer',
    },
    selectedShop: {
        marginLeft: '8px',
        cursor: 'pointer',
        fontSize: '12px',
        fontWeight: 'bold',
        border: 'none',
        outline: 'none',
        backgroundColor: '#fff',
        maxWidth: '100%',
        position: 'relative',
        whiteSpace: 'nowrap',
        display: 'flex',
        alignItems: 'center',
        flexShrink: '0',
        '&:focus ~ $listSelect': {
            display: 'block',
        }
    },
    listSelect: {
        backgroundColor: '#fff',
        position: 'absolute',
        display: 'none',
        borderRadius: '2px',
        boxShadow: '0 5px 15px #ccc',
        right: 8,
        padding: '8px 0',
        '& div': {
            padding: '6px 16px',
            fontSize: 12,
            color: '#555',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: '#f5f5f5'
            }
        }
    },
    shopMessage: {
        padding: '8px 12px',
        display: 'flex',
        cursor: 'pointer',
        '&$active': {
            backgroundColor: '#ebedf1'
        }
    },
    active: {},
    imgShop: {
        width: '32px',
        flexShrink: '0',
        '& div': {
            paddingTop: '100%',
            backgroundImage: 'url(https://cf.shopee.vn/file/16e97ea38ce1a31e8a3cec8ee2807988_tn)',
            background: 'no-repeat center / cover'
        }
    },
    titleShop: {
        fontSize: '13px',
        fontWeight: '700',
        color: '#333',
    },
    messShop: {
        fontSize: '12px',
        color: '#888',
        overflow: "hidden",
        display: "-webkit-box",
        textOverflow: "ellipsis",
        "-webkit-box-orient": "vertical",
        "-webkit-line-clamp": "1",
        marginTop: '3px',
    },
    dateMess: {
        fontSize: 12, 
        color: '#bbb',
        whiteSpace: 'nowrap',
        display: 'flex',
        alignItems: 'flex-end'
    },
})
