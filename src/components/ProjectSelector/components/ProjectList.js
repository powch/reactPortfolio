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

const ProjectList = () => (
  <>
    {projects.map(({ title, description, image }, idx) => (
      <ProjectCard
        key={`project-${idx}`}
        title={title}
        description={description}
        image={image}
      />
    ))}
  </>
);

export default ProjectList;
