import * as React from "react";
import * as ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import {ThemeProvider } from "@mui/material/styles";
import App from "./App";
import { Provider, useSelector } from "react-redux";
import store from "./store/index";
import { State } from "./Interfaces";
import { darkTheme, lightTheme } from "./theme";

const ThemedApp = () => {
  const darkMode = useSelector((state: State) => state.darkMode);
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <ThemedApp />
  </Provider>
);
