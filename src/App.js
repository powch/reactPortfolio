// External imports
import React from "react";
import { Box } from "@mui/material";

// Internal imports
import PageShell from "./components/PageShell/PageShell";
import AboutMe from "./views/AboutMe";
import Contacts from "./views/Contacts";
import Projects from "./views/Projects";

const App = ({ appState }) => {
  const { state } = appState;
  const { currentPage } = state;

  return (
    <>
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
          {currentPage === "about" ? (
            <AboutMe currentPage={currentPage} />
          ) : currentPage === "contacts" ? (
            <Contacts currentPage={currentPage} />
          ) : (
            <Projects currentPage={currentPage} />
          )}
        </PageShell>
      </Box>
    </>
  );
};

export default App;
