const styles = (theme) => ({
    navbar: {
        width: "180px",
    },
    my_profile: {
        display: "flex",
        padding: "15px 0",
        borderBottom: "1px solid #efefef",
        alignItems: "center",
    },
    avatar: {
        borderRadius: "50%",
    },
    edit_wrap: {
        paddingLeft: "15px",
        flex: "1",
    },
    user_name: {
        fontWeight: "600",
        color: "#333",
    },
    edit_link: {
        color: "#888",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
    },
    edit_icon: {    
        fontSize: "16px",
        marginRight: "4px",
    },
    body: {
        margin: "20px 0",
    },
    account: {
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        color: "rgba(0,0,0,.8)",
        marginBottom: "7px", 
    },
    account_title: {
        display: "flex",
        padding: "0",
        alignItems: "center",
    },
    account_icon: {
        fontSize: "24px",
        marginRight: "6px",
        color: "#ee4d2d",
    },
    account_text: {
        fontSize: "14px",
    },
    account_icon__profile: {
        color: "#0088ff",
    },
    account_icon__notification: {
        color: "#ee4d2d",
    },
    account_item_link: {
        textDecoration: "none",
        padding: "10px",
        display: "block",
    },
    item_link: {
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        color: "#333",
        marginBottom: "15px",
    },
    item_icon: {
        marginRight: "6px",
        fontSize: "24px",
    },
    item_purchase: {
        color: "#0046ab",
    },
    item_store: {
        color: "#ee4d2d",
    },
    item_xu: {
        color: "orange",
    },
    ant_tab__link: {
        textDecoration: "none",
        color: "#555",
    },
    ant_tab__label: {
        fontSize: "14px",
        padding: "10px 30px",
        textTransform: "capitalize",
        "&:hover": {
            color: theme.color.primary,
        },
    },
});

export default styles;