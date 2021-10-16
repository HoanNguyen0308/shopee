import React from 'react';
import styles from './styles.js'
import { withStyles } from '@material-ui/core/styles';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import PurchaseOrderProduct from "../PurchaseOrderProduct";

const AntTabs = withStyles({
	root: {
		borderBottom: "1px solid #e8e8e8",
		backgroundColor: "#fff",
		marginBottom: "10px",
	},
	indicator: {
		backgroundColor: "#ee4d2d",
	},
})(Tabs);

const AntTab = withStyles((theme) => ({
	root: {
		textTransform: "none",
		flex: 1,
        color: "#000000",
        fontWeight: 400,
		"&:hover": {
			color: "#ee4d2d",
			opacity: 1,
		},
		"&$selected": {
			color: "#ee4d2d",
		},
		"&:focus": {
			color: "#ee4d2d",
		},
	},
	selected: {},
}))((props) => <Tab disableRipple {...props} />);

const TabPanel = (props) => {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && <Grid>{children}</Grid>}
		</div>
	);
};

// kho hang trong
const ProductNone = props => {
    const style = {
        textAlign: 'center',
        color: '#333333',
        fontSize: '20px',
        marginTop: '10px',
        backgroundColor: '#FFFFFF',
        padding: '200px 0',
    }
    return (
        <div style={style}>
            <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/5fafbb923393b712b96488590b8f781f.png" alt="Không có sản phẩm" />
            <p >Chưa có đơn hàng</p>
        </div>
    )
}

const PurchaseOrder = props => {
    const { classes } = props
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    const render = (
        <div>
            root
            <p style={{fontSize: '12px', color: 'black'}}>rest</p>
        </div>
    )
    
    return (
        <div className={classes.root}>
            <AntTabs value={value} onChange={handleChange} aria-label="ant example">
                <AntTab label={render} />
                <AntTab label="Chờ xác nhận" />
                <AntTab label="Chờ lấy hàng" />
                <AntTab label="Đang giao" />
                <AntTab label="Đã giao" />
                <AntTab label="Đã hủy" />
            </AntTabs>
            <TabPanel value={value} index={0}>
                <PurchaseOrderProduct />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ProductNone />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <ProductNone />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <ProductNone />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <PurchaseOrderProduct />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <ProductNone />
            </TabPanel>
        </div>
    )
}

export default withStyles(styles)(PurchaseOrder);
