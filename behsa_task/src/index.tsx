import * as React from "react";
import * as ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import theme from "./theme";
import { Provider } from "react-redux";
import store from "./store/index";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement!);
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </ThemeProvider>
);
