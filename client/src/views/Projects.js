import React from "react";
import {
  Container,
  Box,
  Typography,
  Slide,
  Fade,
  Collapse,
  selectClasses,
} from "@mui/material";

import ProjectSelector from "../components/ProjectSelector/ProjectSelector";
import ProjectPreview from "../components/ProjectSelector/components/ProjectPreview";

const Projects = ({ appState }) => {
  const { state, dispatch } = appState;
  const { currentPage, selectedProject } = state;

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        width: { xs: "100%", md: selectedProject ? "100%" : "75%" },
      }}
    >
      <Box>
        <Slide direction="down" in={currentPage === "projects"}>
          <Typography
            variant="h1"
            sx={{
              color: "#000",
              fontFamily: "Fira Code",
              display: "flex",
              justifyContent: "center",
              mt: 1,
              mb: 1,
              textShadow:
            "1px 1px 0 lime, 2px 2px 0 lime, 3px 3px 0 lime, 4px 4px 0 lime, 5px 5px 0 lime, 6px 6px 0 lime",
            }}
          >
            projects
          </Typography>
        </Slide>
      </Box>
      <Box sx={{ height: selectedProject ? "100%" : "unset" }}>
        <Collapse in={currentPage === "projects" && !selectedProject}>
          <div>
            <ProjectSelector appState={appState} />
          </div>
        </Collapse>
        <Collapse in={selectedProject}>
          <ProjectPreview
            selectedProject={selectedProject}
            dispatch={dispatch}
          />
        </Collapse>
      </Box>
    </Container>
  );
};

export default Projects;
