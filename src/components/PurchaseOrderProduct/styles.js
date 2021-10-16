const styles = (theme) => ({
    product: {
        backgroundColor: '#fff',
        boxShadow: '0 0 2px #ccc',
        '& sup': {
            textDecoration: 'underline',
        },
    },
    // header
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid #ddd',
        paddingBottom: '10px',
        fontSize: '14px',
        margin: '0 20px',
        padding: '20px 0 10px',
    },
    headerShop: {
        display: 'flex',
        alignItems: 'center',
        '& li': {
            marginRight: '6px',
        },
        '& $favourte': {
            backgroundColor: 'rgb(238, 77, 45)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            padding: '0 1px',
            cursor: 'default',
        },
        '& $shopName': {
            color: '#666',
            fontWeight: 'bold',
        },
        '& $chat': {
            '& a': {
                display: 'flex',
                alignItems: 'center',
                color: 'white',
                backgroundColor: 'rgb(238, 77, 45)',
                padding: '4px',
                textDecoration: 'none',
            }
        },
        '& $visit': {
            '& a': {
                textDecoration: 'none',
                color: '#666',
                border: '1px solid rgb(210, 210, 210)',
                display: 'flex',
                alignItems: 'center',
                padding: '4px',
            }
        }
    },
    headerShip: {
        display: 'flex',
        alignItems: 'center',
        color: theme.color.primary,
        '& li': {
            marginLeft: '8px',
        },
        '& $ship': {
            '& a': {
                display: 'flex',
                alignItems: 'center',
                color: theme.color.secondary,
                textDecoration: 'none',
            }
        },
        '& $help': {
            color: '#666',
            marginRight: '4px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            '&::before': {
                content: '""',
                position: 'absolute',
                right: '-4px',
                display: 'block',
                height: '16px',
                width: '1px',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgb(210, 210, 210)',
            }
        }
    },

    // right
    favourte: {},
    shopName: {},
    chat: {},
    visit: {},
    // left
    ship: {},
    help: {},

    // body
    body: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px',
        borderBottom: '1px solid #ddd',
        textDecoration: 'none',
    },
    sanpham: {
        display: 'flex',
        alignItems: 'flex-start',
    },
    wrapImg: {
        width: '80px',
        border: '1px solid rgb(220, 220, 220)',
    },
    img: {
        background: 'no-repeat center / cover',
        backgroundImage: 'url("https://cf.shopee.vn/file/a3970173d692be0f033e4f2597ae432d_tn")',
        paddingBottom: '100%',
        display: 'block',
    },
    info: {
        marginLeft: '8px',
    },
    title: {
        color: '#000000DE',
    },
    classify: {
        fontSize: '14px',
        color: '#000000ba',
        margin: '6px 0',
    },
    quantity: {
        color: '#000000DE',
    },

    price: {
        display: 'flex',
        fontSize: '14px',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.color.primary,
    },
    priceOld: {
        color: '#999',
        marginRight: '6px',
        textDecoration: 'line-through',
    },

    // footer
    footer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        padding: '24px',
    },
    total: {
        display: 'flex',
        alignItems: 'center',
        color: theme.color.primary,
        '& p': {
            fontSize: '14px',
            margin: '0 8px 0 2px',
            color: '#333',
        },
        '& span': {
            fontSize: '24px',
            marginBottom: '4px',
            '& sup': {
                fontSize: '18px',
            }
        }
    },
    feature: {
        display: 'flex',
        marginTop: '28px',
    },
    button: {
        padding: '8px 30px',
        color: '#555',
        border: '1px solid #ccc',
        borderRadius: '2px',
        marginLeft: '10px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        '&:hover': {
            color: 'rgb(238, 77, 45)',
        }
    },
    primaryBtn: {
        backgroundColor: 'rgb(238, 77, 45)',
        color: '#fff',
        border: 'none',
        '&:hover': {
            backgroundColor: 'rgb(230, 70, 40)',
            color: '#fff',
        }
    },
    more: {
        position: 'relative',
        '&::before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            backgroundColor: 'transparent',
            width: '100%',
            height: '10px',
            bottom: '-5px',
        },
        '&:hover $listMore': {
            display: 'block',
        }
    },
    listMore: {
        position: 'absolute',
        top: '110%',
        right: '0',
        backgroundColor: '#fff',
        boxShadow: '0 0 3px #ccc',
        color: '#555',
        cursor: 'pointer',
        display: 'none',
        '& li': {
            padding: '14px',
            whiteSpace: 'nowrap',
            '&:hover': {
                color: 'rgb(230, 70, 40)',
                backgroundColor: 'rgb(248, 248, 248)',
            }
        },
    },
});

export default styles
