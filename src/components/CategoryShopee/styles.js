const styles = (theme) => ({
    container_slider: {
        margin: "0 auto",
        marginTop: "20px",
        boxSizing: "border-box",
        width: "1200px",
        backgroundColor: "#fff",
    },
    category_double: {
        boxSizing: "border-box",
    },
    category_link: {
        textDecoration: "none",
        borderRight: "1px solid rgba(0,0,0,.05)",
        borderBottom: "1px solid rgba(0,0,0,.05)",
        display: "block",
        boxSizing: "border-box",
        position: "relative",
        "&:hover $category_after": {
            display: "block",
        },
    },
    category_after: {
        position: "absolute",
        top: "0",
        bottom: "-1px",
        right: "-1px",
        left: "0",
        zIndex: "1",
        borderColor: "rgba(0,0,0,.12)",
        boxShadow: "0 0 0.8125rem 0 rgb(0 0 0 / 5%)",
        borderRight: "1px solid rgba(0,0,0,.05)",
        borderBottom: "1px solid rgba(0,0,0,.05)",
        transform: "translateZ(0)",
        outline: "0",
        display: "none",
        boxSizing: "border-box",
    },
    category: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    category_img: {
        height: "89px",
        width: "70%",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
    },
    category_text: {
        height: "3.125rem",
        textAlign: "center",
        padding: "0 8px",
        color: "rgba(0,0,0,.8)",
        fontSize: ".875rem",
        lineHeight: "1.25rem",
        marginBottom: ".625rem",
        wordBreak: "break-word",
        overflow: "hidden",
        display: "-webkit-box",
        textOverflow: "ellipsis",
        "-webkit-box-orient": "vertical",
        "-webkit-line-clamp": "2",
    },
    heading: {
        background: "#fff",
        height: "3.75rem",
        borderBottom: "1px solid rgba(0,0,0,.05)",
        padding: "0 1.25rem",
        fontSize: "18px",
        color: "rgba(0,0,0,.54)",
        fontWeight: "500",
        alignItems: "center",
        display: "flex",
    },
})

export default styles;