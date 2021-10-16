const styles = (theme) => ({
    container: {
        borderTop: "4px solid #ee4d2d",

    },
    introduction: {
        borderBottom: "1px solid rgba(0,0,0,.09)",
        marginTop: "3.75rem",
        width: "1200px",
        margin: "0 auto",
        backgroundColor: "#fff",
        paddingBottom: "3.75rem",
        fontFamily: "Arial",
    },
    introduction_title: {
        margin: "20px 0 2px",
        fontWeight: "700",
    },
    introduction_description: {
        fontSize: "14px",
    },
    category: {
        fontFamily: "Helvetica, Arial, sans-serif",
        width: "1200px",
        margin: "3.75rem auto .625rem",
        paddingBottom: "3.75rem",
    },
    category_heading: {
        color: "rgba(0,0,0,.54)",
        fontSize: "16px",
        fontWeight: "700",
    },
    category_content: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        margin: "-0.3125rem",
    },
    category_parent: {
        flex: "0 0 20%",
        maxWidth: "20%",
        padding: "0.3125rem",
        boxSizing: "border-box",
    },
    parent_title__wrap: {
        fontWeight: "700",
        margin: "0.625rem 0 0.125rem",
        padding: ".125rem 0",
        color: "rgba(0,0,0,.54)",   
    },
    parent_title: {
        color: "rgba(0,0,0,.54)",   
        textDecoration: "none",
        display: "block",
        fontWeight: "700",
        fontSize: "0.75rem",
        "&:hover": {
            color: "#ee4d2d",
        },
    },
    child_list: {
        width: "100%",
        margiBottom: "0.625rem",
        lineHeight: "1.5",
        display: "flex",
        flexWrap: "wrap",
        fontSize: "0.75rem",
    },
    child_item__link: {
        color: "rgba(0, 0, 0, 0.54)",
        textDecoration: "none",
        display: "inline-block",
        "&:hover": {
            color: "#ee4d2d",
        },
    },
});

export default styles;