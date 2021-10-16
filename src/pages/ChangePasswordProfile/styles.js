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
    },
    header: {
        borderBottom: ".0625rem solid #efefef",
        padding: "1.125rem 0",
        height: "80px",
    },
    header_heading: {
        margin: 0,
        fontSize: "1.125rem",
        fontWeight: "500",
        color: "#333",
    },
    header_description: {
        color: "#555",
        marginTop: ".1875rem",
    },
    body: {
        paddingTop: "1.875rem",
    },
    form: {
        width: "700px",
        margin: "0 auto",
    },
    
    field_wrap: {
        marginBottom: "1.875rem",
    },
    field: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    field_title: {
        width: "20%",
        textAlign: "right",
        color: "rgba(85,85,85,.8)",
        marginRight: "1.25rem",
    },
    field_input__wrap: {
        width: "80%",
        boxSizing: "border-box",
        backgroundColor: "#fff",
        borderRadius: "2px",
        border: "1px solid rgba(0,0,0,.14)",
        boxShadow: "inset 0 2px 0 0 rgb(0 0 0 / 2%)",
        height: "40px",
        padding: "10px",
        display: "flex",
        alignItems: "center",
    },
    field_input: {
        flex: "1",
        fontSize: "14px",
        background: "transparent",
        outline: "none",
        boxShadow: "none",
        border: "0",
        color: "#000",
    },
    confirm_block__wrap: {
        width: "80%",
        marginLeft: "auto",
    },
    confirm_block: {
        width: "22.5rem",
        display: "flex",
    },
    input_confirm__wrap: {
        borderRadius: "0.125rem",
        border: "0.0625rem solid rgba(0, 0, 0, 0.14)",
        boxShadow: "rgb(0 0 0 / 2%) 0px 0.125rem 0px 0px inset",
    },
    input_confirm: {
        boxSizing: "border-box",
        color: "rgb(34, 34, 34)",
        fontSize: "0.875rem",
        outline: "none",
        border: "0px",
        height: "2.375rem",
        padding: "0.625rem",
    },
    button_confirm: {
        cursor: "not-allowed",
        color: "#ccc",
        padding: "0 .625rem",
        border: "1px solid rgba(0,0,0,.14)",
        borderLeft: "0",
        backgroundColor: "#fbfbfb",
        outline: "none",
        boxSizing: "border-box",
    },
    button_end__wrap: {
        width: "80%",
        marginLeft: "156px",
    },
    button_end: {
        background: "#facac0",
        cursor: "not-allowed",
        width: "9.375rem",
        color: "#fff",
        height: "40px",
        padding: "0 20px",
        border: "none",
        borderRadius: "2px",
    },
});

export default styles;