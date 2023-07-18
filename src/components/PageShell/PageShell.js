import React from "react";
import { Container, Box } from "@mui/material";

import HeaderBar from "./components/HeaderBar";

const PageShell = ({ appState, children }) => {
  const { state } = appState;
  const { currentPage } = state;

  return (
    <>
      <HeaderBar appState={appState} />
      <Box
        sx={{
          height: { xs: "90%", sm: "95%" },
          width: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Container
          sx={{
            pb: "4rem",
            pt: "1rem",
            position: "relative",
            overflowY: "auto",
          }}
        >
          {children}
        </Container>
      </Box>
    </>
  );
};

export default PageShell;
