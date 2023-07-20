import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

import { projects } from "../../../constants";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ appState }) => {
  return (
    <>
      {projects.map(({ projectKey, title, description, image, source }, idx) => (
        <ProjectCard
          key={`project-${idx}`}
          appState={appState}
          projectKey={projectKey}
          title={title}
          description={description}
          image={image}
          source={source}
        />
      ))}
    </>
  );
};

export default ProjectList;
