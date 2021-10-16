const styles = (theme) => ({
    tech_zone: {
        margin: "20px 0",
    },
    container: {
        maxWidth: '1200px',
        margin: "0 auto",
    },
    header: {},
    header_img: {
        width: "100%",
        height: "100px",
        display: "block",
    },
    content: {
        backgroundImage: "url(https://cf.shopee.vn/file/6b5408f757ca37be489669fe7ec961fa)",
        padding: "0 0.9375rem",
    },
    title_wrap: {
        display: "flex",
        justifyContent: "space-between",
        padding: "0 24px",
        height: "3.75rem",
        alignItems: "center",
    },
    title: {
        fontSize: "1rem",
        color: "#ee4d2d",
    },
    view_more: {
        textDecoration: "none",
        color: "#ee4d2d",
    },
    view_more__text: {
        marginRight: "4px",
    },
    products: {
        backgroundColor: "#fff",
        display: "flex",
        width: "100%",
    },
    card_item: {
        flex: "0 0 16.66667%",
        maxWidth: "16.66667%",
        boxSizing: "border-box",
        position: "relative",
        borderRight: "1px solid #ffedcc",
    },
    card_item__link: {
        width: "173px",
        display: "block",
        margin: "5px auto",
        textDecoration: "none",
    },
    item_img: {
        width: "100%",
        transition: "opacity .2s ease",
        display: "block",
    },
    item_view: {
        padding: "10px 15px 15px",
        textAlign: "center",
    },
    item_price: {
        color: "#ee4d2d",
    },
    item_price__value: {
        fontSize: "120%",
        maxWidth: "130px",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
    label_wrap: {
        transform: "scale(1.4)",
        padding: "7px 8px",
        fontWeight: 400,
        position: "absolute",
        top: "0",
        right: "0",
        zIndex: "3",
    },
    label: {
        width: "36px",
        height: "32px",
        backgroundColor: "rgba(255,212,36,.9)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 2px 3px",
        boxSizing: "border-box",
        fontSize: "14px",
        textAlign: "center",
        position: "relative",   
    },
    label_percent: {
        color: "#ee4d2d",
        lineHeight: "0.8125rem",
    },
    label_sale: {
        color: "#fff",
        lineHeight: "0.8125rem",
    },
    label_after: {
        width: "0",
        height: "0",
        left: "0",
        bottom: "-4px",
        position: "absolute",
        borderColor: "transparent rgba(255,212,36,.9)",
        borderStyle: "solid",
        borderWidth: "0 18px 4px",
    },
    footer_img: {
        height: "50px",
        width: "100%",
        display: "block",
    },
});

export default styles;