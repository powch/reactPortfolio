import React from "react";
import { Container, Box, Typography, Slide, Fade } from "@mui/material";

const Projects = ({ currentPage }) => (
  <Container sx={{ display: "flex", flexDirection: "column" }}>
    <Box>
      <Slide direction="right" in={currentPage === "projects"}>
        <Typography
          variant="h1"
          sx={{
            color: "#000",
            fontFamily: "Fira Code",
            mt: 1,
            mb: 1,
          }}
        >
          projects
        </Typography>
      </Slide>
    </Box>
    <Box sx={{ width: "100%" }}></Box>
  </Container>
);

export default Projects;
