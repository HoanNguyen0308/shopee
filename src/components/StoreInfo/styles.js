const styles = (theme) => ({
    store_info: {
        padding: "1.25rem 0 0",
        boxShadow: "0 1px 1px rgb(0 0 0 / 5%)",
        marginBottom: "1px",
    },
    wide: {
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "1.25rem 0",
        display: "flex",
    },
    content: {
        display: "flex",
        height: "8.375rem",
    },
    overview: {
        position: "relative",
        width: "24.375rem",
        height: "134px",
        overflow: "hidden",
        borderRadius: ".25rem",
    },
    overview_side: {
        position: "absolute",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat no-repeat",
        filter: "blur(2px)",
        margin: "-4px",
    },
    overview_mask: {
        position: "absolute",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
        backgroundColor: "rgba(0,0,0,0.6)",
    },
    overview_content: {
        position: "absolute",
        top: ".625rem",
        left: "1.25rem",
        right: ".875rem",
        bottom: ".625rem",
    },
    overview_content__up: {
        display: "flex",
    },
    up_img__link: {
        height: "5rem",
        width: "5rem",
        boxSizing: "border-box",
        borderWidth: ".25rem",
        borderColor: "rgba(255,255,255,0.4)",
        display: "inline-block",
        position: "relative",
        borderRadius: "50%",
    },
    up_img__border: {
        width: "5rem",
        height: "5rem",
        borderWidth: ".25rem",
        borderColor: "rgba(255,255,255,0.4)",
        border: ".0625rem solid rgba(0,0,0,0.09)",
        position: "relative",
        borderRadius: "50%",
    },
    up_img: {
        borderRadius: "50%",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        display: "block",
    },
    up_name__wrap: {
        marginLeft: ".625rem",
        marginTop: ".625rem",
    },
    up_name: {
        fontSize: "20px",
        fontWeight: "500",
        color: "#fff",
        marginBottom: "0.3125rem",
    },
    up_status: {
        fontSize: "12px",
        color: "rgba(255,255,255,0.7)",
        margin: ".3125rem 0 .375rem",
    },
    overview_content__down: {
        marginTop: "0.625rem",
        display: "flex",
        justifyContent: "space-between"
    },
    down_button: {
        marginRight: "0.625rem",
        flex: "1",
        height: "1.5625rem",
        color: "#fff",
        borderColor: "#fff",
        fontSize: ".75rem",
        fontWeight: "500",
        padding: ".3125rem 0",
        border: "1px solid rgba(0,0,0,0.09)",
        borderRadius: "2px",
        background: "transparent",
        outline: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    button_icon: {
        fontSize: "18px",
        marginRight: "4px",
    },
    info_list: {
        padding: "0.625rem 0 0 1.875rem",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
    },
    info_item: {
        display: "flex",
        alignItems: "center",
        fontSize: "14px",
        padding: "1px 0",
        color: "rgba(0, 0, 0, 0.7)",
        marginRight: "20px",
    },
    item_icon: {
        fontSize: "22px",
        margin: "6px",
        padding: "0 0 4px",
    },
    item_name: {
        marginRight: "4px",
    },
    item_value: {
        color: "#ee4d2d",
        fontWeight: "500",
    },
    button_help: {
        border: "none",
        backgroundColor: "transparent",
        outline: "0",
        display: "flex",
        alignItems: "center",
        marginLeft: "3px",
        cursor: "pointer",
    },
    icon_help: {
        fontSize: "14px",
        color: "rgba(0, 0, 0, 0.54)",
    },
})

export default styles