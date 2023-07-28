import React from "react";
import { Box, Typography, Slide, Fade } from "@mui/material";

const AboutMe = ({ currentPage }) => (
  <Box sx={{ display: "flex", flexDirection: "column", width: "75%" }}>
    <Slide direction="right" in={currentPage === "about"}>
      <Typography
        variant="h1"
        sx={{
          color: "#000",
          fontFamily: "Fira Code",
          mt: 1,
          mb: 1,
        }}
      >
        about me
      </Typography>
    </Slide>
    <Fade in={currentPage === "about"}>
      <Typography
        variant="body1"
        sx={{ color: "#000", fontFamily: "Fira Code" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ultricies integer
        quis auctor elit sed. Elit pellentesque habitant morbi tristique
        senectus. Dis parturient montes nascetur ridiculus mus mauris vitae.
        Nunc lobortis mattis aliquam faucibus purus. Feugiat nibh sed pulvinar
        proin gravida. Volutpat odio facilisis mauris sit. Ut enim blandit
        volutpat maecenas volutpat blandit aliquam etiam. Aliquam nulla facilisi
        cras fermentum odio eu feugiat pretium nibh. Lacus vel facilisis
        volutpat est velit egestas. Auctor augue mauris augue neque gravida. Mi
        in nulla posuere sollicitudin aliquam ultrices sagittis.
      </Typography>
    </Fade>
  </Box>
);

export default AboutMe;
