// External imports
import React from "react";
import { Box } from "@mui/material";
import PageShell from "./components/PageShell/PageShell";

const App = ({ appState }) => {
  const { state, dispatch } = appState;

  return (
    <Box
      sx={{
        height: "100vh",
        maxHeight: "100vh",
        width: "100%",
        position: "relative",
        maxWidth: "lg",
        mx: "auto",
      }}
    >
      <PageShell appState={appState}>
        <h2>fish tiddies</h2>
      </PageShell>
    </Box>
  );
};

export default App;
