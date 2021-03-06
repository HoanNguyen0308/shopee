const styles = (theme) => ({
    header: {
        position: props => props.position === 'static' ? 'static' : 'sticky',
        top: "0",
        left: "0",
        right: "0",
        zIndex: "100",
        height: "119px",
        transform: "translateZ(0)",
        background: "linear-gradient(-180deg,#f53d2d,#f63)",
        transition: "transform .2s cubic-bezier(.4,0,.2,1),-webkit-transform .2s cubic-bezier(.4,0,.2,1)",
    },
    header_container: {
        width: "1200px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
    },
    header_nav: {
        display: "flex",
        justifyContent: "space-between",
        height: "34px",
        alignItems: "center",
        fontSize: "15px",
    },
    header_nav__left: {
        position: "relative",
    },
    nav_store: {
        textDecoration: "none",
        color: "#fff",
        padding: "0 .4375rem",
        borderRight: "2px solid hsla(0,0%,100%,.22)",
        "&:hover": {
            color: "hsla(0,0%,100%,.7)",
        },
        fontSize: "13px",
    },
    download_wrap: {
        position: "relative",
        "&:hover $download": {
            display: "block",
        },
    },
    download: {
        position: "absolute",
        top: "180%",
        left: "0",
        zIndex: "1",
        background: "#fff",
        borderRadius: "4px",
        display: "none",
        padding: "2px",
    },
    img_qr: {
        width: "200px",
        height: "200px",
    },
    img_list: {
        padding: "0px 10px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    img_item: {
        width: "80px",
        marginBottom: "10px",
    },
    nav_connect: {
        display: "inline-block",
        color: "#fff",    
        padding: "0 7px",
        fontSize: "13px",
    },
    nav_socials: {
        display: "inline-block",
        alignItems: "center",
        position: "absolute",
        top: "0",
        right: "-9%",
    },
    nav_social: {
        backgroundImage: "url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/ed2b884858e3014955cf8d7473d79082.png)",
        height: "16px",
        width: "16px",
        display: "inline-block",
    },
    nav_social__facebook: {
        backgroundSize: "487.5% 293.75%",
        backgroundPosition: "8.064516129032258% 16.129032258064516%",    
    },
    nav_social__instagram: {
        backgroundSize: "487.5% 293.75%",
        backgroundPosition: "58.064516129032256% 16.129032258064516%",
        marginLeft: "8px",
    },
    header_nav__right: {
        display: "flex",
        alignItems: "center",
    },
    nav_services: {
        display: "flex",
        alignItems: "center",
        color: "#fff",
        textDecoration: "none",
        position: "relative",
        "&:hover": {
            color: "hsla(0,0%,100%,.7)",
        },
        '&:hover path': {
            fill: "hsla(0,0%,100%,.7)",
        },
        '&:hover $notify': {
            transform: "scale(1)",
            opacity: 1,
        }
    },
    // notify
    notify: {
        width: 400,
        transform: "scale(0)",
        borderRadius: '2px',
        backgroundColor: '#fff',
        position: 'absolute',
        boxShadow: '0 0 3px #ccc',
        zIndex: '10',
        top: 28,
        right: 0,
        transition: 'all 0.2s linear ',
        transformOrigin: '90% 0',
        opacity: 0,
        '&::before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: -20,
            right: 28,
            borderWidth: '10px 16px',
            borderStyle: 'solid',
            borderColor: 'transparent transparent white transparent',
        },
        '&::after': {
            content: '""',
            display: 'block',
            position: 'absolute',
            width: 100,
            height: 20,
            backgroundColor: 'transparent',
            top: -10,
            right: 0
        }
    },
    notifyHeader: {
        textDecoration: "none",
        display: "block",
        height: '40px',
        color: '#ccc',
        padding: 10,
        fontSize: 15,
    },
    notifyItem: {
        padding: '6px 10px',
        display: 'flex',
        textDecoration: "none",
        background: '#fcefea',
        '&:hover': {
            backgroundColor: '#fafafa',
        }
    },
    notifyItemImg: {
        width: '40px',
        marginRight: '10px',
        flexShrink: '0',
        '& div': {
            paddingTop: '100%',
            background: '#333 no-repeat center / cover',
            backgroundImage: 'url("https://cf.shopee.vn/file/a5615885c63f4c1304afdfda28a64b29_tn")',
        }
    },
    notifyItemTitle: {
        color: '#333',
        fontSize: '14px',
        marginBottom: '4px'
    },
    notifyItemContent: {
        color: '#75676e',
        fontSize: '12px'
    },
    notifyFooter: {
        display: "block",
        textDecoration: "none",
        height: '40px',
        color: '#333',
        lineHeight: '40px',
        textAlign: 'center'
    },
    nav_services__support: {
        padding: "0 10px",
    },
    nav_services__text: {
        marginLeft: "5px",
        fontSize: "13px",
    },
    nav_user: {
        textDecoration: "none",
        color: "#fff",
        padding: "0 10px",
        "&:hover": {
            color: "hsla(0,0%,100%,.7)",
        }
    },
    nav_separator: {
        borderRight: "1px solid hsla(0,0%,100%,.4)",
        height: "13px",
    },
    header_search: {
        padding: "16px 10px 0",
        display: "flex",
    },
    header_search__logo: {
        display: "block",
        paddingRight: "2.5rem",
    },
    header_search__content: {
        justifyContent: "flex-start",
        width: "840px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
    },
    search_tool: {
        width: "100%",
        display: "flex",
        boxShadow: "0 0.125rem 0.25rem rgb(0 0 0 / 9%)",
        height: "2.5rem",
        alignItems: "stretch",
        justifyContent: "space-between",
        boxSizing: "border-box",
        padding: "0.1875rem",
        borderRadius: "2px",
        background: "#fff",
    },
    search_bar: {
        display: "flex",
        flex: "1",
    },
    search_form: {
        backgroundColor: "#fff",
        borderColor: "#fff",
        boxSizing: "border-box",
        paddingLeft: "0.625rem",
        display: "flex",
        flex: "1",
    },
    search_input: {
        display: "flex",
        flex: "1",
        alignItems: "center",
        outline: "none",
        border: 0,
        padding: "0",
        margin: "0",
    },
    search_button: {
        height: "34px",
        padding: "0 15px",
        minWidth: "60px",
        maxWidth: "190px",
        background: "#fb5533",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        boxShadow: "0 1px 1px 0 rgb(0 0 0 / 9%)",
        borderRadius: "2px",
        border: "0",
        cursor: "pointer",
    },
    header_search__cart: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "1",
        "&:hover $cart": {
            display: "block",
        },
    },
    cart_link: {
        position: "relative",
        color: "#fff",
        textDecoration: "none",
        display: "block",
    },
    cart_counter: {
        position: "absolute",
        top: "-10px",
        right: "-10px",
        fontSize: "14px",
        border: "0.125rem solid #ee4d2d",
        color: "#ee4d2d",
        backgroundColor: "#fff",
        borderRadius: "2.75rem",
        width: "26px",
        padding: "0 .3125rem",
        height: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    cart: {
        position: "absolute",
        top: "120%",
        right: "-20px",
        zIndex: "1",
        backgroundColor: "#fff",
        color: "#555",
        borderRadius: "4px",
        padding: "12px 10px",
        border: "1px solid rgba(0,0,0,.09)",
        boxShadow: "0 1px 3.125rem 0 rgb(0 0 0 / 40%)",
        animation: "appear linear 0.3s",
        width: "400px",
        display: "none",    
        maxHeight: "56vh",
    },
    cart_heading: {
        fontSize: "14px",
        color: "rgba(0,0,0,.26)",
    },
    cart_list: {
        overflowY: "auto",
        maxHeight: "56vh",
        margin: "10px 0"
    },
    cart_item: {
        padding: "10px 0",
        margin: "0",
        display: "flex",
        "&:hover": {
            backgroundColor: "#f8f8f8",
        },
    },
    cart_item__img: {
        margin: "0 10px 0 0",
        backgroundPosition: "50%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "40px",
        height: "40px",
        border: "1px solid rgba(0,0,0,.09)",
    },
    a: {
        flex: "1",
        display: "flex",
    },
    cart_name: {
        fontSize: "14px",
        lineHeight: "16px",
        maxHeight: "16px",
        "-webkit-line-clamp": "1",
        textOverflow: "ellipsis",
        overflow: "hidden",
        "-webkit-box-orient": "vertical",
        "word-break": "break-word",
        display: "-webkit-box",
    },  
    cart_price: {
        fontSize: "14px",
        color: "#f53d2d",
        marginLeft: "16px",
    },
    cart_more: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    cart_more__text: {
        fontSize: "12px",   
    },
    cart_more__button: {
        padding: "8px 14px",
        fontSize: "14px",
    },
    search_category__wrap: {
        display: "flex",
        flex: "1",
        width: "100%",
    },
    search_category: {
        marginTop: "6px",
        height: "0.875rem",
        fontSize: "0.75rem",
        fontWeight: "300",
        lineHeight: "0.875rem",
        flexWrap: "wrap",
        overflow: "hidden",
        display: "flex",
    },
    search_category__link: {
        fontFamily: "font-family: 'Roboto', sans-serif;",
        textDecoration: "none",
        display: "block",
        margin: "0 13px 0 0",
        fontSize: "12px",
        color: "hsla(0,0%,100%,.9)",
        fontWeight: "400",
    },
    nav_login: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    nav_user__img: {
        width: "20px",
        height: "20px",
        borderRadius: "50%",
    },
    nav_user__name: {
        paddingLeft: "0.325rem",
        fontSize: "13px",
    },
    user_item: {
        fontSize: "16px",
    },
    user_item__link: {
        "&:hover": {
            color: "#ee4d2d",
        },
        color: "#555",
        textDecoration: "none",
        fontSize: "14px",
    },
    save_wrap: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
    },
});

export default styles;
