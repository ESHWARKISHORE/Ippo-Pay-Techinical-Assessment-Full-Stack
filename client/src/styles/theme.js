import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
}

const theme = extendTheme({
    colors: {
        primary: "#006ACE",
        font: {
            whiteColor: "#FFFFFF",
            primaryColor: "#FFFFFF",
            secondaryColor: "#FFFFFF",
            transparentColor: "#000000"
        },
        background: {
            whiteBackground: "#FFFFFF",
            primaryBackground: "#0082FE",
            secondaryBackground: "#121420",
            transparentColor: 'none'
        },
        button: {
            primary: "#151f21",
            secondColor: '#151f21'
        }
    },
    fontSizes: {
        dashboardHeadingText: "19px",
        headerText: "40px",
        searchText: "26px",
        assetsHeader: "21px",
        assetsDescription: "11px",
        assetsNumber: "50px",
        assetsSecondaryNumberCard: '36px',
        chartHeading: '18px',
        buttonText: '12px',
        smallAssetsHeader: '14px',
        smallAssetsDescription: '10px',
        filterHeaderText: '15px',
        filterCardText: '19px',
        footerPrimaryText: '30px',
        footerHeaderText: '40px'
    },
    config,
});
export default theme;