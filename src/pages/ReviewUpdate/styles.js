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
        padding: "0 1.875rem .625rem",
        width: "980px",
        display: "flex",
        justifyContent: "center",
    },
    body: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    body_img: {
        width: "6.25rem",
        height: "6.25rem",
        marginBottom: "14px",
    },
})

export default styles;