const styles = (theme) => ({
	wide: {
		width: "75rem",
		margin: "0 auto",
	},
	header: {
		height: "5.25rem",
	},
	headerContent: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		lineHeight: "5.25rem",
	},
	headerLeft: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		marginLeft: "20px",
		position: "relative",
	},
	svg: {
		margin: "0 12px 16px 14px",
	},
	headerLeftHeading: {
		color: "#413b3b",
		fontSize: "1.5rem",
	},
	headerRight: {
		color: "#ee4d2d",
		fontSize: "14px",
		cursor: "pointer",
	},
});

export default styles;
