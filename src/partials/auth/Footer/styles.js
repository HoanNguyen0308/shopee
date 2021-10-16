const styles = (theme) => ({
	footerWrap: {
		padding: "40px 0",
		backgroundColor: "#fff",
	},
	footer: {
		borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
	},
	wide: {
		maxWidth: '1200px',	
		margin: "0 auto",
	},
	row: {
		display: "flex",
		flexWrap: "wrap",
	},
	col_2: {
		flex: "0 0 20%",
		maxWidth: "20%",
	},
	footerTitle: {
		fontSize: "0.75rem",
		fontWeight: "700",
		color: "rgba(0,0,0,.54)",
		marginBottom: "1.25rem",
		marginTop: "2.5ren",
	},
	footerList: {
		textDecoration: "none",
		display: "block",
		color: "rgba(0,0,0,.54)",
		listStyleType: "none",
		margin: "0 0 1.5625rem",
		padding: "0",
	},
	footerItem: {
		fontSize: "0.75rem",
		marginBottom: "0.75rem",
		textTransform: "capitalize",
	},
	footerItemLink: {
		textDecoration: "none",
		color: "rgba(0,0,0,.54)",
		backgroundColor: "transparent",
		cursor: "pointer",
		"&:hover": {
			color: "#ee4d2d",
		},
	},
	payList: {
		listStyleType: "none",
		padding: "0",
		margin: "0 0 1.0625rem",
		width: "11.875rem",
		display: "flex",
		flexWrap: "wrap",
	},
	payItem: {
		width: "3.4375rem",
		height: "1.8125rem",
		marginBottom: "0.5rem",
		marginRight: "0.5rem",
		overflow: "hidden",
	},
	payItemLogo: {
		backgroundImage:
			"url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/4bdefde103e8aa245cd17511adde9f89.png)",
		width: "55px",
	},
	logoVisa: {
		height: "18px",
		backgroundSize: "1347.2727272727273% 983.3333333333334 %",
		backgroundPosition: "84.6938775510204% 6.289308176100629%",
	},
	logoMastercard: {
		height: "29px",
		backgroundSize: "1347.2727272727273% 610.3448275862069%",
		backgroundPosition: "49.416909620991255% 41.891891891891895%",
	},
	logoJCB: {
		height: "23px",
		backgroundSize: "1347.2727272727273% 769.5652173913044%",
		backgroundPosition: "38.48396501457726% 38.311688311688314%",
	},
	logoMex: {
		height: "24px",
		backgroundSize: "1482% 804.5454545454545%",
		backgroundPosition: "1.447178002894356% 6.451612903225806%",
	},
	logoCod: {
		height: "29px",
		backgroundSize: "1482% 610.3448275862069%",
		backgroundPosition: "59.91316931982634% 63.513513513513516%",
	},
	logoInstallment: {
		height: "29px",
		backgroundSize: "1347.2727272727273% 610.3448275862069%",
		backgroundPosition: "19.97084548104956% 66.21621621621621%",
	},
	logoHomePay: {
		height: "12px",
		backgroundSize: "741% 931.578947368421%",
		backgroundPosition: "71.9188767550702% 6.329113924050633%",
	},
	logoExpress: {
		height: "10px",
		backgroundSize: "667.5675675675676% 983.3333333333334%",
		backgroundPosition: "65.71428571428571% 35.22012578616352%",
	},
	logoGHTK: {
		height: "18px",
		backgroundSize: "1347.2727272727273% 983.3333333333334%",
		backgroundPosition: "19.97084548104956% 37.735849056603776%",
	},
	logoGHN: {
		height: "29px",
		backgroundSize: "1347.2727272727273% 610.3448275862069%",
		backgroundPosition: "9.037900874635568% 40.54054054054054%",
	},
	logoVTPost: {
		height: "40px",
		backgroundSize: "578.90625% 138.28125%",
		backgroundPosition: "88.90701468189233% 100%",
	},
	logoVNPost: {
		height: "27px",
		backgroundSize: "1347.2727272727273% 655.5555555555555%",
		backgroundPosition: "1.4577259475218658% 72.66666666666667%",
	},
	logoJT: {
		height: "16px",
		backgroundSize: "1347.2727272727273% 1106.25%",
		backgroundPosition: "95.6268221574344% 6.211180124223603%",
	},
	logoGrap: {
		height: "15px",
		backgroundSize: "552.9850746268656% 610.3448275862069%",
		backgroundPosition: "29.9835255354201% 6.756756756756757%",
	},
	logoNinja: {
		height: "20px",
		backgroundSize: "1235% 680.7692307692307%",
		backgroundPosition: "55.947136563876654% 6.622516556291391%",
	},
	logoBest: {
		height: "22px",
		backgroundSize: "1029.1666666666667% 590%",
		backgroundPosition: "13.452914798206278% 6.802721088435374%",
	},
	footerSocials: {
		textDecoration: "none",
		display: "block",
		color: "rgba(0,0,0,.54)",
		listStyleType: "none",
		margin: "0 0 1.5625rem",
		padding: 0,
	},
	footerSocial: {
		fontSize: "0.75rem",
		marginBottom: "0.75rem",
		textTransform: "capitalize",
	},
	footerSocialLink: {
		color: "rgba(0,0,0,.54)",
		display: "flex",
	},
	footerSocialIcon: {
		height: "1rem",
		width: "1rem",
		marginBottom: "0.25rem",
		marginRight: "0.625rem",
		backgroundImage:
			"url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/4bdefde103e8aa245cd17511adde9f89.png)",
	},
	footerSocialFacebook: {
		backgroundSize: "2315.625% 553.125%",
		backgroundPosition: "1.4104372355430184% 35.86206896551724%",
	},
	footerSocialInstagram: {
		backgroundSize: "2315.625% 553.125%",
		backgroundPosition: "29.90126939351199% 40.689655172413794%",
	},
	footerSocialLinked: {
		backgroundSize: "2315.625% 553.125%",
		backgroundPosition: "46.403385049365305% 6.896551724137931%",
	},
	footerApps: {
		height: "5.25rem",
		flexDirection: "column",
		display: "flex",
		justifyContent: "space-around",
		alignItems: "flex-start",
	},
	footerAppImg: {
		width: "5rem",
	},
	copyright: {
		paddingTop: "40px",
	},
	copyrightList: {
		justifyContent: "center",
		display: "flex",
		alignItems: "center",
		paddingBottom: "12px",
	},
	copyrightItem: {
		textDecoration: "none",
		color: "rgba(0,0,0,.8)",
		margin: "0 1.25rem",
	},
	copyrightItemLogo: {
		cursor: "pointer",
		width: "7.5rem",
		height: "2.8125rem",
		backgroundSize: "617.5% 393.3333333333333%",
		backgroundPosition: "34.13848631239936% 84.0909090909091%",
		backgroundImage:
			"url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/4bdefde103e8aa245cd17511adde9f89.png)",
	},
	logoNoFake: {
		width: "3rem",
		height: "3rem",
		backgroundSize: "1543.75% 368.75%",
		backgroundPosition: "100% 35.65891472868217%",
	},
	copyrightText: {
		width: "100%",
		textAlign: "center",
		marginTop: "0.5rem",
		fontSize: "0.75rem",
		color: "rgba(0,0,0,.65)",
	},
});

export default styles;
