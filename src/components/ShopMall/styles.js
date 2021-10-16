const styles = (theme) => ({
    container: {
        backgroundColor: "#f5f5f5",
        padding: "0 0 20px",
    },
    shop_mall: {
        width: "1200px",
        margin: "0 auto",
    },
    header: {
        background: "#fff",
        height: "3.75rem",
        borderBottom: "1px solid rgba(0,0,0,.05)",
        padding: "0 1.25rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    header_title: {
        display: "flex",
        alignItems: "center",
    },
    title_link: {
        textDecoration: "none",
        color: "#d0011b",
        fontWeight: "500",
        fontSize: "1.0625rem",
    },
    title_services: {
        display: "flex",
        alignItems: "center",
        borderLeft: "1px solid #d8d8d8",
        margin: "0 0 0 15px",
        padding: "0 0 0 15px",
    },
    services_block: {
        marginRight: "15px",
        display: "flex",
        fontSize: "18px",
    },
    services_wrap: {
        marginRight: "6px",
        height: "1.0625rem",
        width: "1.0625rem",
        backgroundImage: "url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/1ce96743fb9e3d51ca703e17eb491283.png)",
    },
    services_sale: {
        backgroundSize: "284.72222222222223% 241.0958904109589%",
        backgroundPosition: "7.518796992481203% 9.70873786407767%",
    },
    services_quantity: {
        backgroundSize: "280.82191780821915% 241.0958904109589%",
        backgroundPosition: "84.84848484848484% 9.70873786407767%",
    },
    services_ship: {
        backgroundSize: "284.72222222222223% 241.0958904109589%",
        backgroundPosition: "7.518796992481203% 100%",
    },
    view_link: {
        display: "flex",
        textDecoration: "none",
        color: "#ee4d2d",
    },
    view_icon__wrap: {
        marginLeft: "8px",
        height: "1.25rem",
        width: "1.25rem",
        backgroundColor: "#d0011b",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        borderRadius: "50%",
        color: "#fff",
    },
    view_icon: {
        fontSize: "20px"
    },
    content: {
        display: "flex",
        backgroundColor: "#fff",
    },
    content_left: {
        flex: "0 0 33.33334%",
        maxWidth: "33.33334%",
        padding: "10px 0 10px 10px",
    },
    content_right: {
        flex: "0 0 66.66667%",
        maxWidth: "66.66667%",
    },
    product_double: {
        display: "flex",
        flexDirection: "column",
    },
    product: {
        padding: "10px",
        boxSizing: "border-box",
        position: "relative",
    },
    product_link: {
        textDecoration: "none",
        display: "block",
    },
    content_img: {
        width: "100%",
    },
    content_text: {
        position: "absolute",
        top: "80%",
        left: "0",
        textAlign: "center",
        fontSize: "20px",
        width: "100%",
        color: "#d0011b",
    },
});

export default styles;