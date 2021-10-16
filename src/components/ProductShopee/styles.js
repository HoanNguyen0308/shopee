const styles = (theme) => ({
    shopee_product: {
        backgroundColor: "#f5f5f5",
    },
    container: {
        width: "1200px",
        margin: "0 auto",
    },
    image_slider: {
        height: "100%",
        width: "100%",
        objectFit: "cover",
    },
    link: {
        textDecoration: "none",
        cursor: "pointer",
        color: "#222222",
        "&:hover": {
            color: "#ee4d2d",
            fontSize: "16px",
        }
    },
    link_text: {
        fontSize: "14px",
        textAlign: "center",
        textTransform: "capitalize",
    },
    stores: {
        marginTop: "24px"
    },
    link_img: {
        width: "50%",
        height: "114px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center"
    },
    heading: {
        color: "rgba(0, 0, 0, 0.54)",
        fontWeight: 500,
        textTransform: "uppercase",
        fontSize: "24px",
        marginTop: "24px"
    },
    button_view: {
        padding: "1.25rem 0 70px",
        display: "flex",
        justifyContent: "center",
    },
    button_view__link: {
        textDecoration: "none",
        minWidth: "24.375rem",
        height: "2.5rem",
        maxWidth: "220px",
        padding: "0 20px",
        background: "#fff",
        border: "1px solid rgba(0,0,0,.09)",
        boxShadow: "0 1px 1px 0 rgb(0 0 0 / 3%)",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#555",
    },
});

export default styles;