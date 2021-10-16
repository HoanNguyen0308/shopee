const styles = (theme) => ({
    voucher: {
        boxSizing: "border-box",
        position: "relative",
        height: "118px",    
        display: "flex",
        alignItems: "center",
        boxShadow: "0.125rem 0.125rem 0.3125rem rgb(0 0 0 / 7%)",
    },
    voucher_left: {
        alignItems: "center",
        width: "7.375rem",
        height: "100%",
        background: "linear-gradient(90deg,transparent 0,transparent .1875rem,#ee4d2d 0)",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        position: "relative",
    },
    left_img: {
        height: "3.5rem",
        width: "3.5rem",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
    },
    left_text: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        "-webkit-box-orient": "vertical",
        "-webkit-line-clamp": "2",
        fontSize: "0.75rem",
        lineHeight: "0.875rem",
        maxHeight: "1.75rem",
        maxWidth: "90%",
        color: "#fff",
        textAlign: "center",
        wordBreak: "break-word",
        marginTop: "0.3125rem",
        padding: "0 .5rem",
    },
    left_dashed: {
        position: "absolute",
        top: "0.3125rem",
        left: "0",
        width: "0.25rem",
        height: "calc(100% - .4375rem)",
        background: "radial-gradient(circle at 0 .25rem,transparent 0,transparent .1875rem,#ee4d2d 0)",
        backgroundSize: ".25rem .625rem",
        backgroundRepeat: "repeat-y",
    },
    voucher_right: {
        display: "flex",
        height: "100%",
        borderRadius: "0 .125rem .125rem 0",
        border: "1px solid #e8e8e8",
        flex: "1",
    },
    right_detail: {
        padding: "0 0.75rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "left",
    },
    right_detail__up: {
        fontSize: "1rem",
        lineHeight: "1.25rem",
    },
    right_detail__center: {
        fontSize: "14px",
        lineHeight: "1.25rem",
    },
    right_detail__down: {
        margin: "14px 0 0",
        fontSize: "12px",
        color: "#ee4d2d",
    },
    right_bonus: {
        padding: ".75rem 0.75rem 0.75rem 0",
        display: "flex",
        flex: "1",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-end",
    },
    bonus_up: {
        display: "flex",
        fontSize: "14px",
        textDecoration: "none",
        color: "#ee4d2d",
        alignItems: "center",
    },
    bonus_up__icon: {
        fontSize: "18px",
    },
    bonus_down: {
        textDecoration: "none",
        fontSize: "14px",
        color: "#508be3",
    },
    voucher_label: {
        position: "absolute",
        left: "-.1875rem",
        top: ".3125rem",
        background: "#fb0",
        padding: ".125rem .25rem",
        borderRadius: ".125rem .125rem .125rem 0",
        color: "#fff",
        fontSize: ".625rem",
        lineHeight: ".75rem",
    },
    voucher_label__after: {
        borderLeft: ".1875rem solid #dfa400",
        position: "absolute",
        width: "0",
        height: "0",
        left: "1px",
        top: "calc(100% + 1px)",
        border: ".1875rem solid transparent",
        "-webkit-transform": "rotate(-45deg) translate(50%,-50%);transform: rotate(-45deg) translate(50%,-50%)",
    },
});

export default styles;