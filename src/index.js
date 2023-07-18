import React, { useReducer } from "react";
import ReactDom from "react-dom";
import App from "./App";
import "regenerator-runtime/runtime";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import { theme } from "./theme";
import { reducer, initialState } from "./App.reducer";

const AppProvider = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <App appState={{ state, dispatch }} />
      </ThemeProvider>
    </>
  );
};

ReactDom.render(<AppProvider />, document.getElementById("app"));
