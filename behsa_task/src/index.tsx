import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import * as ReactDOM from "react-dom/client";
import { Provider, useSelector } from "react-redux";
import App from "./App";
import { State } from "./Interfaces";
import store from "./store/index";
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
