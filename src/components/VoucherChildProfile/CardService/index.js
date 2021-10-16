import React from 'react';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core";
import NoVoucher from "../NoVoucher";

const AntTabs = withStyles({
    root: {
        backgroundColor: "#f6f6f6",
        minHeight: "0",
        textAlign: "left",
        margin: "0 0 6px",
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

const CardService = (props) => {
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
                <NoVoucher />
            </TabPanel>

            <TabPanel value={value} index={1}>
                <NoVoucher />
            </TabPanel>

            <TabPanel value={value} index={2}>
                <NoVoucher />
            </TabPanel>
        </div>
    )
};

export default CardService;