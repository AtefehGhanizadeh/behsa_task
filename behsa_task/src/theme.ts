import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  direction: 'rtl',
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          direction: 'rtl',
          // color: "darkred",
          backgroundColor: "#E8E8E8",
          "& h1": {
            color: "black"
          }
        }
      }
    }
  },
  palette: {
    primary: {
      main: '#ff9f31',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;