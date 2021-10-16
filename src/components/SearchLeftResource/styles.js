const styles = (theme) => ({
    search_left__title: {
        display: 'flex',
        alignItems: 'center',
    },
    title_icon: {
        height: "1rem",
        width: "1rem",
        marginRight: "0.625rem",
    },
    title_text: {
        fontWeight: "700",
    },
    search_left__group: {
        padding: "1.25rem 0",
        borderBottom: "1px solid rgba(0,0,0,.09)",
        color: "rgba(0, 0, 0, 0.8)",
        fontSize: "14px",
    },
    group_header: {
        marginBottom: "0.625rem",
        fontWeight: "500",
    },
    category_item: {
        cursor: "pointer",
        padding: "0.5rem 0",
    },
    group_dropdown: {
        display: "flex",
        alignItems: "center",
        padding: ".5rem .625rem .5rem 1.25rem",
    },
    group_dropdown__icon: {
        fontSize: "14px",
        marginLeft: "4px",
    },
    content_price: {
        display: "flex",
        alignItems: "center",
    },
    price_input: {
        width: "5rem",
        fontSize: "0.75rem",
        height: "1.875rem",
        backgroundColor: "#fff",
        outline: "none",
        border: "1px solid rgba(0,0,0,.26)",
        borderRadius: ".125rem",
        boxShadow: "inset 0 1px 0 0 rgb(0 0 0 / 5%)",
        paddingLeft: ".3125rem",
    },
    price_dash: {
        flex: "1",
        height: "1px",
        background: "#bdbdbd",
        margin: "0 .625rem",
    },
    price_button: {
        height: "1.875rem",
        margin: "1.25rem 0 0",
        fontWeight: "400",
        width: "100%",
        boxShadow: "0 1px 1px 0 rgb(0 0 0 / 9%)",
        backgroundColor: "#ee4d2d",
        color: "#fff",
        borderRadius: "2px",
        border: "0",
        cursor: "pointer",
    },
    delete_all: {
        height: "1.875rem",
        margin: "1.25rem 0 0",
        width: "100%",
        backgroundColor: "#ee4d2d",
        color: "#fff",
        borderRadius: "2px",
        border: "0",
        fontSize: "14px",
        cursor: "pointer",
        lineHeight: "1.875rem",
    },
    rate_list: {
        marginLeft: "12px",
    },
    rate_item: {
        display: "flex",
        alignItems: "center",
        marginTop: "8px",
    },
    item_star: {
        margin: "0 3px 0 0",
        color: "#ffce3d",
        fontSize: "18px",
    },
});

export default styles;