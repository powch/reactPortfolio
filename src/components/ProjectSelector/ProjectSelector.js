import React from "react";
import { Container } from "@mui/material";

import ProjectList from "./components/ProjectList";

const ProjectSelector = ({ appState }) => (
  <Container
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      mt: 3,
      justifyContent: "center",
    }}
  >
    <ProjectList appState={appState} />
  </Container>
);

export default ProjectSelector;
