const styles = (theme) => ({
    shopee_trend: {
        backgroundColor: "#f5f5f5",
    },
    container: {
        maxWidth: "1200px",
        margin: "0 auto",
        backgroundColor: "#fff",
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "3.75rem",
        borderBottom: "1px solid rgba(0,0,0,.05)",
        padding: "0 24px",
        color: "rgba(0,0,0,.54)",
        fontSize: "16px",
        fontWeight: "500",
    },
    header_link: {
        display: "flex",
        textDecoration: "none",
        alignItems: "center",
        color: "#ee4d2d",
    },
    header_icon: {
        fontSize: "16px",
        marginRight: "4px",
    },
    content: {
        display: "flex",
    },
    product: {
        flex: "0 0 20%",
        maxWidth: "20%",
        borderRight: "1px solid rgba(0,0,0,.05)",
        paddingRight: "0.625rem",
        boxSizing: "border-box",
    },
    product_link: {
        display: "flex",
        textDecoration: "none",
    },
    product_view: {
        padding: "1.25rem .625rem 1.25rem 1.25rem",
        color: "#222",
    },
    product_quantity: {
        marginTop: "2px",
        color: "#757575",
    },
    product_img: {
        height: "100px",
    },
});

export default styles;