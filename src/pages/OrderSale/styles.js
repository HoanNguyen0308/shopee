const styles = (theme) => ({
    container: {
        background: "#f5f5f5",
    },
    wide: {
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "1.25rem 0 3.125rem",
        display: "flex",
    },
    content: {
        background: "#fff",
        boxShadow: "0 1px 2px 0 rgb(0 0 0 / 13%)",
        borderRadius: ".125rem",
        marginLeft: "1.6875rem",
        width: "980px",
        display: "flex",
        flexDirection: "column",
    },
    header: {
        height: "2.5rem",
        padding: "0 30px",
        borderBottom: "1px solid rgba(0,0,0,.09)",
    },
    header_right: {
        color: "rgba(0,0,0,.26)",
        fontSize: "14px",
        float: "right",
        lineHeight: "2.5rem",
    },
    sale: {
        display: "flex",
        padding: "1.25rem",
        textDecoration: "none",
        "&:hover": {
            backgroundColor: "#f8f8f8",
        },
    },
    left_img__wrap: {
        marginRight: "1.25rem",
        width: "5rem",
        height: "5rem",
        display: "flex",
        backgroundColor: "#f5f5f5",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
    },
    left_img: {
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
    },
    sale_center: {
        marginRight: "1.25rem",
    },
    center_heading: {
        color: "rgba(0,0,0,.8)",
        fontSize: "16px",
        fontWeight: "400",
        marginBottom: "0.625rem",
    },
    center_description: {
        fontSize: "0.875rem",
        marginBottom: "0.3125rem",
        color: "rgba(0,0,0,.54)",
    },
    center_time: {
        color: "rgba(0,0,0,.54)",
        fontSize: "0.875rem",
    },
    right_button: {
        border: "1px solid rgba(0,0,0,.09)",
        color: "rgba(0,0,0,.8)",
        minWidth: "5rem",
        height: "1.875rem",
        marginLeft: "auto",
        padding: "0 .4375rem",
        backgroundColor: "#fff",
        fontSize: ".75rem",
        fontWeight: "300",
        borderRadius: "2px",
        cursor: "pointer",
        "&:hover": {
            color: "#ee4d2d",
            borderColor: "#ee4d2d",
        },
    },
})

export default styles;