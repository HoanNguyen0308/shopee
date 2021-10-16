const styles = (theme) => ({
		header: {
			height: "5.25rem",
		},
		grid: {
			width: "100%",
		},
		wide: {
			width: "75rem",
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
		header_content: {
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
			lineHeight: "5.25rem",
		},
		header_left: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			marginLeft: "20px",
			position: "relative",
		},
		svg: {
			margin: "0 12px 16px 14px",
		},
		header_left__heading: {
			color: "#413b3b",
			fontSize: "1.25rem",
		},
		header_right: {
			color: "#ee4d2d",
			fontSize: "16px",
			cursor: "pointer",
		},
		container: {
			backgroundColor: "rgb(238, 77, 45)",
		},
		container_content: {
			margin: "0 auto",
			backgroundImage:
				"url(https://cf.shopee.vn/file/be50c95ee8da6c997d171fc7e7e36712)",
			backgroundSize: "cover",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center center",
			height: "37.5rem",
			width: "65rem",
			justifyContent: "flex-end",
			display: "flex",
		},
		form: {
			margin: "auto 0",
			width: "24.8125rem",
			backgroundColor: "#fff",
			boxSizing: "border-box",
			boxShadow: "0 3px 10px 0 rgb(0 0 0 / 14%)",
			borderRadius: "0.25rem",
			overflow: "hidden",
			padding: "30px 30px 50px",
		},
		form_heading: {
			fontSize: "1.25rem",
			color: "#222",
			textTransform: "capitalize",
			padding: "0 0 30px",
		},
		form_input: {
			boxSizing: "border-box",
			width: "100%",
			overflow: "hidden",
			border: "1px solid rgba(0, 0, 0, 0.14)",
			borderRadius: "2px",
			boxShadow: "inset 0 2px 0 rgb(0 0 0 / 2%)",
			display: "flex",
			alignItems: "center",
			padding: "0.75rem",
			outline: "none",
			fontSize: "14px",
			opacity: "0.6",
			marginBottom: "30px",
		},
		form_button: {
			color: "#fff",
			backgroundColor: "#ee4d2d",
			boxShadow: "0 1px 1px rgb(0 0 0 / 9%)",
			width: "100%",
			opacity: "0.7",
			cursor: "not-allowed",
			height: "2.5rem",
			minWidth: "8.75rem",
			outline: "none",
			padding: "0 0.625rem",
			border: "0",
			borderRadius: "0.125rem",
			fontSize: theme.typography.fontSize,
		},
		form_support: {
				margin: "0.625rem 0",
				textAlign: "right",
		},
		form_support__link: {
				color: "#05a",
				fontSize: "14px",
				textDecoration: "none",
		},
		form_way: {
			position: "relative",
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			margin: "14px 0",
		},
		form_cross: {
			content: "",
			height: "1px",
			width: "100%",
			backgroundColor: "#dbdbdb",
		},
		form_way__text: {
			margin: "0 1rem",
			color: "#ccc",
			fontSize: "14px",
		},
		form_socials: {
			display: "flex",
			marginBottom: "1.5625rem",
		},
		form_social: {
			backgroundColor: "#1877f2",
			color: "#fff",
			boxSizing: "border-box",
			outline: "none",
			border: "0",
			borderRadius: "2px",
			width: "100%",
			height: "2.5rem",
			fontSize: theme.typography.fontSizes,
			boxShadow: "0 1px 1px rgb(0 0 0 / 9%)",
			display: "flex",
			alignItems: "center",
			cursor: "pointer",
			"&:hover": {
				opacity: "0.8",
			},
		},
		form_social__center: {
			margin: "0 8px",
			padding: "1px 2px",
		},
		left_icon: {
			backgroundImage:
				"url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/a9e27c05087330a9581e4b9b39ad4417.png)",
			backgroundSize: "372% 232%",
			backgroundPosition: "76.47058823529412% 15.151515151515152%",
			width: "1.375rem",
			height: "1.375rem",
		},
		center_icon__wrap: {
			width: "2.25rem",
			height: "2.25rem",
			borderRadius: "1px",
			backgroundColor: "#fff",
			alignItems: "center",
			display: "flex",
		},
		center_icon: {
			backgroundImage:
				"url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/a9e27c05087330a9581e4b9b39ad4417.png)",
			backgroundSize: "516.6666666666666% 322.22222222222223%",
			backgroundPosition: "100% 100%",
			width: "1.375rem",
			height: "1.375rem",
			margin: "auto",
			alignItems: "center",
		},
		form_social__text: {
			marginLeft: "5px",
			fontSize: theme.typography.fontSizeSmall
		},
		form_social__right: {
			backgroundColor: "#000",
		},
		right_icon: {
			backgroundImage:
				"url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/a9e27c05087330a9581e4b9b39ad4417.png)",
			backgroundSize: "290.625% 181.25%",
			backgroundPosition: "8.19672131147541% 19.23076923076923%",
			width: "1.375rem",
			height: "1.375rem",
			alignItems: "center",
			marginRight: "16px",
		},
		form_bonus: {
			whiteSpace: "pre",
			paddingRight: "0.25rem",
			color: "rgba(0, 0, 0, 0.26)",
			fontSize: theme.typography.fontSize,
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			width: "100%",
		},
		form_bonus__login: {
			color: "#ee4d2d",
			textDecoration: "none",
		},
		footer_wrap: {
			padding: "40px 0",
			backgroundColor: "#f5f5f5",
		},
		footer: {
			paddingBottom: "",
			borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
		},
		footer_title: {
			fontSize: "14px",
			fontWeight: "700",
			color: "rgba(0,0,0,.54)",
			marginBottom: "1.25rem",
			marginTop: "2.5ren",
		},
		footer_list: {
			textDecoration: "none",
			display: "block",
			color: "rgba(0,0,0,.54)",
			listStyleType: "none",
			margin: "0 0 1.5625rem",
			padding: "0",
		},
		footer_item: {
			fontSize: theme.typography.fontSizeSmall,
			marginBottom: "0.75rem",
			textTransform: "capitalize",
		},
		footer_item__link: {
			textDecoration: "none",
			color: "rgba(0,0,0,.54)",
			backgroundColor: "transparent",
			cursor: "pointer",
			"&:hover": {
				color: "#ee4d2d",
			},
		},
		pay_list: {
			listStyleType: "none",
			padding: "0",
			margin: "0 0 1.0625rem",
			width: "11.875rem",
			display: "flex",
			flexWrap: "wrap",
		},
		pay_item: {
			width: "3.4375rem",
			height: "1.8125rem",
			marginBottom: "0.5rem",
			marginRight: "0.5rem",
			overflow: "hidden",
		},
		pay_item__logo: {
			backgroundImage:
				"url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/4bdefde103e8aa245cd17511adde9f89.png)",
			width: "55px",
		},
		logo_visa: {
			height: "18px",
			backgroundSize: "1347.2727272727273% 983.3333333333334 %",
			backgroundPosition: "84.6938775510204% 6.289308176100629%",
		},
		logo_mastercard: {
			height: "29px",
			backgroundSize: "1347.2727272727273% 610.3448275862069%",
			backgroundPosition: "49.416909620991255% 41.891891891891895%",
		},
		logo_jcb: {
			height: "23px",
			backgroundSize: "1347.2727272727273% 769.5652173913044%",
			backgroundPosition: "38.48396501457726% 38.311688311688314%",
		},
		logo_mex: {
			height: "24px",
			backgroundSize: "1482% 804.5454545454545%",
			backgroundPosition: "1.447178002894356% 6.451612903225806%",
		},
		logo_cod: {
			height: "29px",
			backgroundSize: "1482% 610.3448275862069%",
			backgroundPosition: "59.91316931982634% 63.513513513513516%",
		},
		logo_installment: {
			height: "29px",
			backgroundSize: "1347.2727272727273% 610.3448275862069%",
			backgroundPosition: "19.97084548104956% 66.21621621621621%",
		},
		logo_homepay: {
			height: "12px",
			backgroundSize: "741% 931.578947368421%",
			backgroundPosition: "71.9188767550702% 6.329113924050633%",
		},
		logo_express: {
			height: "10px",
			backgroundSize: "667.5675675675676% 983.3333333333334%",
			backgroundPosition: "65.71428571428571% 35.22012578616352%",
		},
		logo_ghtk: {
			height: "18px",
			backgroundSize: "1347.2727272727273% 983.3333333333334%",
			backgroundPosition: "19.97084548104956% 37.735849056603776%",
		},
		logo_ghn: {
			height: "29px",
			backgroundSize: "1347.2727272727273% 610.3448275862069%",
			backgroundPosition: "9.037900874635568% 40.54054054054054%",
		},
		logo_vtpost: {
			height: "40px",
			backgroundSize: "578.90625% 138.28125%",
			backgroundPosition: "88.90701468189233% 100%",
		},
		logo_vnpost: {
			height: "27px",
			backgroundSize: "1347.2727272727273% 655.5555555555555%",
			backgroundPosition: "1.4577259475218658% 72.66666666666667%",
		},
		logo_jt: {
			height: "16px",
			backgroundSize: "1347.2727272727273% 1106.25%",
			backgroundPosition: "95.6268221574344% 6.211180124223603%",
		},
		logo_grap: {
			height: "15px",
			backgroundSize: "552.9850746268656% 610.3448275862069%",
			backgroundPosition: "29.9835255354201% 6.756756756756757%",
		},
		logo_ninja: {
			height: "20px",
			backgroundSize: "1235% 680.7692307692307%",
			backgroundPosition: "55.947136563876654% 6.622516556291391%",
		},
		logo_best: {
			height: "22px",
			backgroundSize: "1029.1666666666667% 590%",
			backgroundPosition: "13.452914798206278% 6.802721088435374%",
		},
		footer_socials: {
			textDecoration: "none",
			display: "block",
			color: "rgba(0,0,0,.54)",
			listStyleType: "none",
			margin: "0 0 1.5625rem",
			padding: 0,
			cursor: "pointer",
		},
		footer_social: {
			fontSize: "0.75rem",
			marginBottom: "0.75rem",
			textTransform: "capitalize",
		},
		footer_social__link: {
			color: "rgba(0,0,0,.54)",
			display: "flex",
			fontSize: theme.typography.fontSizeSmall,
			"&:hover": {
				color: "red",
			}
		},
		footer_social__icon: {
			height: "1rem",
			width: "1rem",
			marginBottom: "0.25rem",
			marginRight: "0.625rem",
			backgroundImage:
				"url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/4bdefde103e8aa245cd17511adde9f89.png)",
		},
		footer_social__facebook: {
			backgroundSize: "2315.625% 553.125%",
			backgroundPosition: "1.4104372355430184% 35.86206896551724%",
		},
		footer_social__instagram: {
			backgroundSize: "2315.625% 553.125%",
			backgroundPosition: "29.90126939351199% 40.689655172413794%",
		},
		footer_social__linked: {
			backgroundSize: "2315.625% 553.125%",
			backgroundPosition: "46.403385049365305% 6.896551724137931%",
		},
		footer_apps: {
			height: "5.25rem",
			flexDirection: "column",
			display: "flex",
			justifyContent: "space-around",
			alignItems: "flex-start",
		},
		footer_app__img: {
			width: "5rem",
		},
		copyright: {
			paddingTop: "40px",
		},
		copyright_list: {
			justifyContent: "center",
			display: "flex",
			alignItems: "center",
			paddingBottom: "12px",
		},
		copyright_item: {
			textDecoration: "none",
			color: "rgba(0,0,0,.8)",
			margin: "0 1.25rem",
		},
		copyright_item__logo: {
			cursor: "pointer",
			width: "7.5rem",
			height: "2.8125rem",
			backgroundSize: "617.5% 393.3333333333333%",
			backgroundPosition: "34.13848631239936% 84.0909090909091%",
			backgroundImage:
				"url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/4bdefde103e8aa245cd17511adde9f89.png)",
		},
		logo_nofake: {
			width: "3rem",
			height: "3rem",
			backgroundSize: "1543.75% 368.75%",
			backgroundPosition: "100% 35.65891472868217%",
		},
		copyright_text: {
			width: "100%",
			textAlign: "center",
			marginTop: "0.5rem",
			fontSize: theme.typography.fontSizeSmall,
			color: "rgba(0,0,0,.65)",
		},
	});
	
	export default styles;
	