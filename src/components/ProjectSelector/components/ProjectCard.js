import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const ProjectCard = ({ title, description }) => (
  <Card>
    <CardMedia></CardMedia>
    <CardContent>
      <Typography variant="h5" gutterBottom component="div">
        {title}
      </Typography>
      <Typography variant="body2">{description}</Typography>
    </CardContent>
    <CardActions>
      <Button size="small">
        <Typography sx={{ fontFamily: "Fira Code" }}>Preview</Typography>
      </Button>
      <Button size="small">
        <Typography sx={{ fontFamily: "Fira Code" }}>Source</Typography>
      </Button>
    </CardActions>
  </Card>
);

export default ProjectCard;
