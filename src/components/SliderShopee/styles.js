const styles = (theme) => ({
    slider_wrap: {
        background: "#fff",
        zIndex: "0",
    },
    slider: {
        width: "1200px",
        margin: "0 auto",
        paddingTop: "30px",
    },
    image_slider: {
        height: "235px",
        width: "100%",
        objectFit: "cover",
    },
    link: {
        textDecoration: "none",
        cursor: "pointer",
        color: "#222222",
        "&:hover": {
            color: "#ee4d2d",
            fontSize: "16px"
        }
    },
    link_text: {
        fontSize: "14px",
        textAlign: "center",
    },
    stores: {
        marginTop: "24px"
    },
    link_img: {
        width: "100%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center"
    },
    sale_img__wrap: {
        backgroundColor: "#f5f5f5",
        paddingTop: "20px",
    },
    sale_img: {
        width: "1200px",
        margin: "0 auto",
        display: "block",
    },
});

export default styles;