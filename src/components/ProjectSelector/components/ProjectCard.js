import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const ProjectCard = ({
  projectKey,
  title,
  description,
  image,
  source,
  appState,
}) => {
  const { dispatch } = appState;

  const handlePreviewClick = (payload) =>
    dispatch({ action: "SELECT_PROJECT", payload });

  return (
    <Card sx={{ maxWidth: 300, mr: 3 }}>
      <CardMedia height={150} component="img" src={image}></CardMedia>
      <CardContent>
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ fontFamily: "Fira Code" }}
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: "Fira Code" }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handlePreviewClick(projectKey)}>
          <Typography sx={{ fontFamily: "Fira Code" }}>Preview</Typography>
        </Button>
        <Button size="small" href={source} target="blank_">
          <Typography sx={{ fontFamily: "Fira Code" }}>Source</Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
