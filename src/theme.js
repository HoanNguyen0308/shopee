import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: "#fefefe"
        }
    },
    typography: {
        fontFamily: "Roboto",
        fontSize: 18,
        fontSizeSmall: 14,
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    },
    color: {
        primary: '#EE4D2D',
        secondary: '#26AA99',
        bgColor: '#f5f5f5',
    },
});

export default theme;
