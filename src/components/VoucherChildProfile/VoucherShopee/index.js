import React from 'react';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core";
import VoucherItem from "../VoucherItem";

const vouchersNew = [
    {id: 1, img: "https://cf.shopee.vn/file/a6ff372c86c4e242c76fb75f65ae7579"},
    {id: 2, img: "https://cf.shopee.vn/file/aa73f8aa302834aa9fc6adbf6e704cf2"},
    {id: 3, img: "https://cf.shopee.vn/file/512a3920bbf6de315b98e799a8caf6c0"},
    {id: 4, img: "https://cf.shopee.vn/file/a6ff372c86c4e242c76fb75f65ae7579"},
    {id: 5, img: "https://cf.shopee.vn/file/a6ff372c86c4e242c76fb75f65ae7579"},
];

const vouchersPopular = [
    {id: 6, img: "https://cf.shopee.vn/file/073b2af36b7fb3b55e87371d8fa824f6"},
    {id: 7, img: "https://cf.shopee.vn/file/a6ff372c86c4e242c76fb75f65ae7579"},
    {id: 8, img: "https://cf.shopee.vn/file/a6ff372c86c4e242c76fb75f65ae7579"},
];

const vouchersExpire = [
    {id: 4, img: "https://cf.shopee.vn/file/a6bf1043d07321789fd5a71532887cab"},
    {id: 5, img: "https://cf.shopee.vn/file/a6ff372c86c4e242c76fb75f65ae7579"},
];

const AntTabs = withStyles({
    root: {
        backgroundColor: "#f6f6f6",
        minHeight: "0",
        textAlign: "left",
        margin: "0 0 16px",
    },
    indicator: {
        backgroundColor: "transparent",
    },
})(Tabs);

const AntTab = withStyles((theme) => ({
    root: {
        minHeight: "0", 
        textAlign: "left",
        textTransform: "none",
        flex: 1,
        fontWeight: 400,
        fontSize: "12px",
        color: "color: rgba(0,0,0,.87)",
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

const AllVoucher = (props) => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    return (
        <div>
            <AntTabs value={value} onChange={handleChange} aria-label="ant example">
                <AntTab label="Mới nhất" />
                <AntTab label="Phổ biến" />
                <AntTab label="Sắp hết hạn" />
                <AntTab label="" /> 
                <AntTab label="" />
                <AntTab label="" />
            </AntTabs>

            <TabPanel value={value} index={0}>
                <Grid container spacing={2}>
                    {vouchersNew.map(voucher => {
                        return (
                            <Grid item md={6} xs={12} key={voucher.id}>
                                <VoucherItem voucher={voucher}/>
                            </Grid>
                        )
                    })}
                </Grid>
            </TabPanel>

            <TabPanel value={value} index={1}>
                <Grid container spacing={2}>
                    {vouchersPopular.map(voucher => {
                        return (
                            <Grid item md={6} xs={12} key={voucher.id}>
                                <VoucherItem voucher={voucher}/>
                            </Grid>
                        )
                    })}
                </Grid>
            </TabPanel>

            <TabPanel value={value} index={2}>
                <Grid container spacing={2}>
                    {vouchersExpire.map(voucher => {
                        return (
                            <Grid item md={6} xs={12} key={voucher.id}>
                                <VoucherItem voucher={voucher}/>
                            </Grid>
                        )
                    })}
                </Grid>
            </TabPanel>
        </div>
    )
};

export default AllVoucher;