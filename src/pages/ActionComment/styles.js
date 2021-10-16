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
    body: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flex: "1",
    },
    body_img: {
        width: "6.25rem",
        height: "6.25rem",
        marginBottom: "14px",
        objectFit: "contain",
    },
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "2.5rem",
        padding: "0 30px",
        borderBottom: "1px solid rgba(0,0,0,.09)",
    },
    header_left: {
        display: "flex",
        alignItems: "center",
        fontSize: "14px",
        color: "rgba(0,0,0,.8)",
        cursor: "pointer",
    },
    header_input: {
        width: "1rem",
        height: "1rem",
        cursor: "pointer",
        border: "none",
        marginRight: "10px",
    },
    header_right: {
        color: "rgba(0,0,0,.26)",
        fontSize: "14px",
    },
})

export default styles;