import React from "react";
import { Container, Box } from "@mui/material";

import HeaderBar from "./components/HeaderBar";

const PageShell = ({ appState, children }) => {
  const { state } = appState;
  const { currentPage } = state;

  return (
    <>
      <HeaderBar appState={appState} />
      <Container
          sx={{
            width: '100%',
            pb: "4rem",
            pt: "1rem",
            position: "relative",
            overflowY: "auto",
          }}
        >
          {children}
        </Container>
    </>
  );
};

export default PageShell;
