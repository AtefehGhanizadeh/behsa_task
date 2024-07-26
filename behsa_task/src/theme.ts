import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

import vazirmatn from "./fonts/Vazirmatn-Regular.ttf";

// A custom theme for this app
export const lightTheme = createTheme({
  typography: {
    fontFamily: `"vazirmatn"`,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'vazirmatn';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('vazirmatn'), local('vazirmatn'), url(${vazirmatn}) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
          body{
          direction:rtl;
          background-color:#E8E8E8
          }
      `,
    },
  },

  direction: "rtl",
  palette: {
    mode:'light',
    primary: {
      main: "#FC8C26",
    },

    error: {
      main: red.A400,
    },
  },
});

export const darkTheme = createTheme({
  direction: "rtl",
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'vazirmatn';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('vazirmatn'), local('vazirmatn'), url(${vazirmatn}) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
          body{
          direction:rtl;
          }
      `,
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#FC8C26",
    },
  },
});
