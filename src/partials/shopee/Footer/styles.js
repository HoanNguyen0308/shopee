const styles = (theme) => ({
	main: {
		paddingTop: "12px",	
		backgroundColor: "#f1f1f1",
		margin: "0 auto",
	},
	footer: {
		maxWidth: "1200px",
		margin: "0 auto",
		minHeight: "180px",
	},
	footer__heading: {
		fontSize: "14px",
		fontWeight: "bold",
		textTransform: "uppercase",
		color: "#333",
	},
	footer_list: {
		paddingLeft: 0,
		listStyle: "none",
	},
	footer_item: {
		cursor: "pointer",
	},
	footer_item__link: {
		textDecoration: "none",
		fontSize: "16px",
		color: "#555",
		padding: "4px 0",
		display: "flex",
		alignItems: "center",
		"&:hover": {
			color: "#ee4d2d",
		},
	},
	footer__download: {
		display: "flex",
	},
	footer__download_qr: {
		width: "80px",
		objectFit: "contain",
		border: "1px solid #dbdbdb",
	},
	footer__download_apps: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		marginLeft: "12px",
	},
	footer__download_app_link: {
		textDecoration: "none",
		color: "transparent",
	},
	footer__download_app_img: {
		height: "18px",
		margin: "4px 0",
	},
	footer__bottom: {
		backgroundColor: "#ded5d5",
		padding: "12px 0",
	},
	footer__content: {
		maxWidth: "1200px",
		margin: "0 auto",
	},
	footer__copyright_text: {
		width: "100%",
		textAlign: "center",
		fontSize: "15px",
		fontWeight: 500,
		margin: 0,
	},
});

export default styles;
