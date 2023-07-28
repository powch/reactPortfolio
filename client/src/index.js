import React, { useReducer, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "regenerator-runtime/runtime";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, GlobalStyles } from "@mui/material";
import WebFont from "webfontloader";

import { theme } from "./theme";
import { reducer, initialState } from "./App.reducer";

const AppProvider = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Fira Code"],
      },
    });
  }, []);

  return (
    <>
      <CssBaseline />
      <GlobalStyles styles={{ "*": { fontFamily: "Fira Code" } }} />
      <ThemeProvider theme={theme}>
        <App appState={{ state, dispatch }} />
      </ThemeProvider>
    </>
  );
};

const root = createRoot(document.getElementById("app"));
root.render(<AppProvider />);
