import React from "react";
import { Button, Container } from "@mui/material";

const ProjectPreview = ({ selectedProject, dispatch }) => (
  <Container>
    <Button onClick={() => dispatch({ action: "CLEAR_SELECTED_PROJECT" })}>
      Back to projects
    </Button>
    <iframe
      width={"100%"}
      height={"600px"}
      src={`http://localhost:300${selectedProject === "vtr" ? 1 : 2}/`}
    ></iframe>
  </Container>
);

export default ProjectPreview;
