const styles = (theme) => ({
	link: {
		textDecoration: "none",
		padding: "0 2px",
		display: "block",
		"&:hover": {
			transform: "translateY(-2px)",
		},
		transition: "all linear 0.2s",
	},
	card: {
		maxWidth: 300,
		margin: "2px auto",
		transition: "0.3s",
		boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
		"&:hover": {
			boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
		},
		position: "relative",
		overflow: "unset",
	},
	media: {
		paddingTop: "100%",
	},
	content: {
		padding: "15px",
	},
	divider: {
		margin: "10px",
	},
	subheading: {
		lineHeight: 1.8,
	},
	avatar: {
		display: "inline-block",
		border: "2px solid white",
		"&:not(:first-of-type)": {
			marginLeft: "10px",
		},
	},
	heading: {
		fontSize: "16px",
		fontWeight: "400",
		color: "#222222",
		lineHeight: "1.8rem",
		overflow: "hidden",
		margin: "8px",
		textDecoration: "none",
		display: "-webkit-box",
		WebkitBoxOrient: "vertical",
		WebkitLineClamp: "2",
	},
	caption: {
		fontSize: "17px",
        color: "rgba(0, 0, 0, 0.87)",
		lineHeight: "18px",
		fontWeight: "400",
		wordWrap: "break-word",
		overflow: "hidden",
		display: "-webkit-box",
		textOverflow: "ellipsis",
		"-webkit-box-orient": "vertical",
		"-webkit-line-clamp": "3",
        maxHeight: "3.6em",
	},
	bill: {
		display: "flex",
		marginTop: "4px",
		justifyContent: "space-between",
	},
	tag: {
		color: "white",
		backgroundColor: "rgb(246, 145, 19)",
		lineHeight: "1rem",
		height: "1rem",
		borderRight: "1px dashed ",
		borderLeft: "1px dashed ",
		textAlign: "center",
		fontSize: "12px",
		padding: "0 4px",
	},
	hashtag: {
		color: "rgb(255, 0, 32)",
		border: "1px solid",
		fontSize: "12px",
		padding: "0 4px",
	},
	price_wrap: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	price_old: {
		fontSize: "14px",
        color: "rgba(0,0,0,.13)",
        textDecoration: "line-through",
        margin: "12px 0 4px",
	},
	price_current: {
		fontSize: "155%",
        maxWidth: "200px",
		color: "#ee4d2d",
	},
    label: {
		position: "absolute",
		right: "0",
		top: "0",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: "4px 2px 3px",
		backgroundColor: "rgba(255,212,36,.9)",
		width: "52px",
		height: "46px",
		fontSize: "16px",
	},
	label_percent: {
		color: "#ee3d2d",
	},
	label_sale: {
		color: "#fff",
	},
	label_after: {
		width: "52px",
		height: "0",
		left: "0",
		bottom: "-4px",
		position: "absolute",
		borderColor: "transparent rgba(255,212,36,.9)",
		borderStyle: "solid",
		borderWidth: "0 20px 4px",
	},
    detail: {
        display: "flex",
        alignItems: "center",
    },
    detail_left: {
        flex: "1",
    },
	progress: {
        height: "16px",
        background: "url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/ac7f81d9ee062223753413ec98497a86.png) 0 100% no-repeat",
        backgroundSize: "cover",
        position: "relative",
        borderRadius: "8px",    
        textAlign: "center",
        marginTop: "2px",
    },
    progress_number: {
        color: "#fff",
        fontSize: "12px",
        lineHeight: "16px",
        zIndex: "2",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
    },
    progress_current: {
        width: "90%",
        height: "100%",
        backgroundColor: "#ffbda6",
        position: "absolute",
        top: "0",
        borderTopRightRadius: "8px",
        borderBottomRightRadius: "8px",
        right: "0",
        zIndex: "0",
    },
    detail_right: {
        marginLeft: "20px",
        background: "#ee4d2d",
        color: "#fff",
        borderRadius: "4px",
        fontSize: "18px",
        height: "41px",
        width: "88px",
        display: "block",
        textAlign: "center",
        lineHeight: "41px",
        textDecoration: "none",
    },
});

export default styles;
