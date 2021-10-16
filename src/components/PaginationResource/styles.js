const styles = (theme) => ({
    pagination: {
        margin: "50px 0 3.75rem",
        display: "flex",
        justifyContent: "center",
    },
    pagination_side: {
        minWidth: "2.5rem",
        height: "1.875rem",
        border: "0",
        backgroundColor: "transparent",
        cursor: "pointer",
        margin: "0 .9375rem",
    },
    pagination_side__icon: {
        color: "rgba(0,0,0,.4)",
        width: "34px",
        height: "34px",
    },
    pagination_page: {
        color: "rgba(0,0,0,.4)",
        padding: "0",
        minWidth: "2.5rem",
        textAlign: "center",
        height: "1.875rem",
        fontSize: "1.25rem",
        marginLeft: ".9375rem",
        marginRight: ".9375rem",
        border: "0",
        backgroundColor: "transparent",
        cursor: "pointer",
        borderRadius: "2px",
    },
    pagination_page__active: {
        background: "#ee4d2d",
        color: "#fff",
    },
});

export default styles;